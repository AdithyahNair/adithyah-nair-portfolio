import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Ambient "connected systems" backdrop: drifting particles joined by faint
 * links plus two slowly rotating wireframe solids, rendered on a fixed
 * Canvas 2D layer. Pixel ratio is capped, work is reduced on small screens,
 * rendering pauses when the tab is hidden, and reduced-motion users get a
 * single static frame. If the canvas cannot be created, a static SVG stands in.
 */

interface Particle {
  x: number;
  y: number;
  z: number; // 0.4 – 1, used for parallax and size
  vx: number;
  vy: number;
  hue: 'mint' | 'violet';
}

const MINT = '100, 244, 210';
const VIOLET = '139, 123, 255';

type Vec3 = [number, number, number];

function icosahedron(): { verts: Vec3[]; edges: [number, number][] } {
  const t = (1 + Math.sqrt(5)) / 2;
  const raw: Vec3[] = [
    [-1, t, 0], [1, t, 0], [-1, -t, 0], [1, -t, 0],
    [0, -1, t], [0, 1, t], [0, -1, -t], [0, 1, -t],
    [t, 0, -1], [t, 0, 1], [-t, 0, -1], [-t, 0, 1],
  ];
  const len = Math.hypot(1, t);
  const verts = raw.map(([x, y, z]) => [x / len, y / len, z / len] as Vec3);
  const edges: [number, number][] = [];
  for (let i = 0; i < verts.length; i++) {
    for (let j = i + 1; j < verts.length; j++) {
      const d = Math.hypot(verts[i][0] - verts[j][0], verts[i][1] - verts[j][1], verts[i][2] - verts[j][2]);
      if (Math.abs(d - 2 / len) < 0.01) edges.push([i, j]);
    }
  }
  return { verts, edges };
}

function octahedron(): { verts: Vec3[]; edges: [number, number][] } {
  const verts: Vec3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
  const edges: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    for (let j = i + 1; j < 6; j++) {
      if (Math.floor(i / 2) !== Math.floor(j / 2)) edges.push([i, j]);
    }
  }
  return { verts, edges };
}

function rotate([x, y, z]: Vec3, ax: number, ay: number): Vec3 {
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const cx = Math.cos(ax), sx = Math.sin(ax);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const y2 = y * cx - z1 * sx;
  const z2 = y * sx + z1 * cx;
  return [x1, y2, z2];
}

const SOLIDS = [
  { shape: icosahedron(), rgb: MINT, cx: 0.78, cy: 0.42, size: 0.16, speed: 0.18 },
  { shape: octahedron(), rgb: VIOLET, cx: 0.16, cy: 0.74, size: 0.11, speed: -0.24 },
];

export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx: CanvasRenderingContext2D | null = null;
    try {
      ctx = canvas.getContext('2d', { alpha: true });
    } catch {
      ctx = null;
    }
    if (!ctx) {
      setFallback(true);
      return;
    }
    const c = ctx;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let raf = 0;
    let running = false;
    let last = performance.now();
    let time = 0;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      const small = width < 720;
      const count = small ? 45 : Math.min(150, Math.round((width * height) / 11000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: 0.4 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        hue: Math.random() < 0.82 ? 'mint' : 'violet',
      }));
    };

    const draw = (dt: number) => {
      time += dt;
      c.clearRect(0, 0, width, height);
      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      const linkDist = width < 720 ? 110 : 140;
      // Links
      c.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < linkDist * linkDist) {
            const alpha = (1 - Math.sqrt(d2) / linkDist) * 0.16;
            c.strokeStyle = `rgba(${MINT}, ${alpha})`;
            c.beginPath();
            c.moveTo(a.x + pointer.x * a.z, a.y + pointer.y * a.z);
            c.lineTo(b.x + pointer.x * b.z, b.y + pointer.y * b.z);
            c.stroke();
          }
        }
      }
      // Particles
      for (const p of particles) {
        p.x += p.vx * dt * 0.06 * p.z;
        p.y += p.vy * dt * 0.06 * p.z;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;
        const rgb = p.hue === 'mint' ? MINT : VIOLET;
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.0012 + p.x * 0.01);
        c.fillStyle = `rgba(${rgb}, ${0.35 + 0.45 * twinkle * p.z})`;
        c.beginPath();
        c.arc(p.x + pointer.x * p.z, p.y + pointer.y * p.z, 0.8 + p.z * 1.2, 0, Math.PI * 2);
        c.fill();
      }
      // Wireframe solids
      if (width >= 720) {
        for (const s of SOLIDS) {
          const r = Math.min(width, height) * s.size;
          const ox = width * s.cx + pointer.x * 1.6;
          const oy = height * s.cy + pointer.y * 1.6;
          const ax = time * 0.00012 * s.speed * 2 + 0.6;
          const ay = time * 0.00018 * s.speed * 2;
          const pts = s.shape.verts.map((v) => rotate(v, ax, ay));
          c.strokeStyle = `rgba(${s.rgb}, 0.22)`;
          c.beginPath();
          for (const [i, j] of s.shape.edges) {
            const a = pts[i], b = pts[j];
            c.moveTo(ox + a[0] * r, oy + a[1] * r);
            c.lineTo(ox + b[0] * r, oy + b[1] * r);
          }
          c.stroke();
          c.fillStyle = `rgba(${s.rgb}, 0.6)`;
          for (const p of pts) {
            c.beginPath();
            c.arc(ox + p[0] * r, oy + p[1] * r, 1.6, 0, Math.PI * 2);
            c.fill();
          }
        }
      }
    };

    const loop = (now: number) => {
      if (!running) return;
      const dt = Math.min(now - last, 50);
      last = now;
      draw(dt);
      raf = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduce) return;
      running = true;
      last = performance.now();
      raf = window.requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      if (raf) window.cancelAnimationFrame(raf);
      raf = 0;
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };
    const onPointer = (e: PointerEvent) => {
      pointer.tx = ((e.clientX / width) - 0.5) * 18;
      pointer.ty = ((e.clientY / height) - 0.5) * 18;
    };
    const onScroll = () => {
      const root = rootRef.current;
      if (!root) return;
      const fade = Math.min(1, window.scrollY / Math.max(1, window.innerHeight * 0.9));
      root.style.opacity = String(1 - fade * 0.65);
    };

    try {
      resize();
      onScroll();
      if (reduce) {
        draw(16);
      } else {
        start();
      }
      window.addEventListener('resize', resize);
      window.addEventListener('scroll', onScroll, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);
      if (finePointer) window.addEventListener('pointermove', onPointer, { passive: true });
    } catch {
      stop();
      setFallback(true);
    }

    return () => {
      stop();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointermove', onPointer);
    };
  }, [reduce]);

  return (
    <div className="backdrop" ref={rootRef} aria-hidden="true">
      {fallback ? <StaticBackdrop /> : <canvas ref={canvasRef} />}
    </div>
  );
}

/** Static stand-in used when a drawing context is unavailable. */
function StaticBackdrop() {
  const pts = Array.from({ length: 40 }, (_, i) => ({
    x: ((i * 37) % 100) + ((i * 13) % 7),
    y: ((i * 53) % 100) + ((i * 7) % 5),
  }));
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" focusable="false">
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={0.25} fill={i % 6 === 0 ? '#8b7bff' : '#64f4d2'} opacity={0.6} />
      ))}
      {pts.slice(0, 20).map((p, i) => {
        const q = pts[(i + 3) % pts.length];
        return <line key={`l${i}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y} stroke="#64f4d2" strokeWidth={0.08} opacity={0.25} />;
      })}
    </svg>
  );
}
