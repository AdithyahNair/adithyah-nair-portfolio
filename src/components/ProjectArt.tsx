import type { ProjectArt as ArtKind } from '../data/projects';

/**
 * Conceptual illustrations for projects without an authentic screenshot.
 * They deliberately read as diagrams, not product UI.
 */
export function ProjectArt({ kind, title }: { kind: ArtKind; title: string }) {
  if (kind === 'nfl') {
    return (
      <svg viewBox="0 0 640 400" role="img" aria-label={`Conceptual illustration for ${title}`} focusable="false">
        <defs>
          <linearGradient id="nfl-line" x1="0" x2="1">
            <stop offset="0" stopColor="#64f4d2" />
            <stop offset="1" stopColor="#8b7bff" />
          </linearGradient>
          <linearGradient id="nfl-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#64f4d2" stopOpacity="0.25" />
            <stop offset="1" stopColor="#64f4d2" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="640" height="400" fill="#0d0d1c" />
        {/* yard lines */}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={i} x1={40 + i * 56} y1="0" x2={40 + i * 56} y2="400" stroke="#ffffff" strokeOpacity="0.06" />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={40 + i * 56} x2="640" y2={40 + i * 56} stroke="#ffffff" strokeOpacity="0.04" />
        ))}
        {/* expected-points curve */}
        <path
          d="M40 300 C120 290, 160 250, 220 240 S 320 200, 380 150 S 480 120, 540 80 L 600 60"
          fill="none"
          stroke="url(#nfl-line)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M40 300 C120 290, 160 250, 220 240 S 320 200, 380 150 S 480 120, 540 80 L 600 60 L 600 400 L 40 400 Z"
          fill="url(#nfl-fill)"
        />
        {/* stream packets */}
        {[
          [40, 300],
          [220, 240],
          [380, 150],
          [540, 80],
        ].map(([x, y], i) => (
          <g key={i}>
            <circle cx={x} cy={y} r="10" fill="#64f4d2" fillOpacity="0.15" />
            <circle cx={x} cy={y} r="4" fill="#64f4d2" />
          </g>
        ))}
        {/* player tracking dots */}
        {[
          [120, 120, '#8b7bff'],
          [160, 150, '#8b7bff'],
          [200, 110, '#8b7bff'],
          [260, 330, '#64f4d2'],
          [300, 300, '#64f4d2'],
          [340, 340, '#64f4d2'],
          [460, 260, '#8b7bff'],
          [500, 300, '#64f4d2'],
        ].map(([x, y, c], i) => (
          <circle key={`p${i}`} cx={x} cy={y} r="5" fill={String(c)} fillOpacity="0.7" />
        ))}
        <text x="44" y="40" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#9a9ab0">
          expected_points · live
        </text>
        <text x="44" y="60" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#64f4d2">
          kinesis ▸ pyspark ▸ xgboost ▸ fastapi
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 640 400" role="img" aria-label={`Conceptual illustration for ${title}`} focusable="false">
      <defs>
        <linearGradient id="agri-line" x1="0" x2="1">
          <stop offset="0" stopColor="#64f4d2" />
          <stop offset="1" stopColor="#8b7bff" />
        </linearGradient>
      </defs>
      <rect width="640" height="400" fill="#0d0d1c" />
      {/* chain of blocks */}
      {[80, 220, 360, 500].map((x, i) => (
        <g key={i}>
          {i < 3 && <line x1={x + 60} y1="200" x2={x + 140} y2="200" stroke="url(#agri-line)" strokeWidth="2" strokeDasharray="6 6" />}
          <rect x={x} y="170" width="60" height="60" rx="10" fill="#141826" stroke="#64f4d2" strokeOpacity="0.6" />
          <text x={x + 30} y="206" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fill="#64f4d2">
            #{i + 1}
          </text>
        </g>
      ))}
      {/* sensors feeding the chain */}
      {[
        [110, 90, 'temp'],
        [250, 300, 'humidity'],
        [390, 90, 'gps'],
        [530, 300, 'time'],
      ].map(([x, y, label], i) => (
        <g key={`s${i}`}>
          <line x1={Number(x)} y1={Number(y)} x2={Number(x)} y2={Number(y) < 200 ? 170 : 230} stroke="#8b7bff" strokeOpacity="0.6" />
          <circle cx={Number(x)} cy={Number(y)} r="14" fill="#8b7bff" fillOpacity="0.15" stroke="#8b7bff" strokeOpacity="0.8" />
          <circle cx={Number(x)} cy={Number(y)} r="4" fill="#8b7bff" />
          <text
            x={Number(x)}
            y={Number(y) < 200 ? Number(y) - 24 : Number(y) + 34}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="11"
            fill="#9a9ab0"
          >
            {label}
          </text>
        </g>
      ))}
      <text x="44" y="40" fontFamily="JetBrains Mono, monospace" fontSize="13" fill="#9a9ab0">
        provenance ledger · ethereum
      </text>
      <text x="44" y="372" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#64f4d2">
        esp8266 ▸ firebase ▸ ricardian contract ▸ dashboard
      </text>
    </svg>
  );
}
