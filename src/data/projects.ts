export const projects = [
  {
    id: 'spherix-marketing',
    title: "Spherix Marketing Website",
    description: "A marketing website made for Spherix, built while I was working with Apex Technologies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    technologies: ["Astro", "Spline"],
    link: "#",
    github: "https://github.com/example/spherix",
    overview: "A modern marketing website built for Spherix, featuring stunning 3D animations and interactive elements using Spline. The website was built with performance and SEO in mind using Astro's static site generation capabilities.",
    features: [
      "Interactive 3D hero section with Spline",
      "Optimized performance with 90+ Lighthouse score",
      "Responsive design across all devices",
      "Dynamic content management system"
    ],
    challenges: "The main challenge was optimizing the 3D animations for mobile devices while maintaining smooth performance. We implemented progressive enhancement to ensure a great experience across all devices.",
    learnings: "This project helped me master Astro's partial hydration features and taught me a lot about optimizing 3D content for the web. Working with the design team also improved my eye for detail."
  },
  {
    id: 'ggl-fitness',
    title: "GGL Fitness App",
    description: "Fitness app packed with features like calorie counter, workouts and measurement journal to help users achieve their fitness goals.",
    image: "https://images.unsplash.com/photo-1461773518188-b3e86f98242f?w=800&q=80",
    technologies: ["Next.js", "Chakra UI"],
    link: "#",
    github: "https://github.com/example/ggl-fitness",
    overview: "A comprehensive fitness tracking application that helps users monitor their progress, track workouts, and maintain a healthy lifestyle. Built with Next.js for optimal performance and SEO.",
    features: [
      "Personalized workout plans",
      "Calorie tracking with food database",
      "Progress photos and measurements",
      "Social features for motivation"
    ],
    challenges: "Implementing real-time synchronization of workout data across devices while maintaining offline functionality was particularly challenging. We solved this using a combination of service workers and IndexedDB.",
    learnings: "This project deepened my understanding of state management in large applications and taught me valuable lessons about building offline-first applications."
  },
  {
    id: 'daily-prayer',
    title: "Daily Prayer Time",
    description: "An easy-to-use API to get today's prayer time based on Muslim Pro.",
    image: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=800&q=80",
    technologies: ["Python", "Flask"],
    link: "#",
    github: "https://github.com/example/daily-prayer",
    overview: "A RESTful API service that provides accurate prayer times for any location worldwide. Built with Python and Flask, it uses sophisticated astronomical calculations to determine prayer times.",
    features: [
      "Prayer times for any location",
      "Multiple calculation methods",
      "Timezone support",
      "Qibla direction calculation"
    ],
    challenges: "Ensuring accuracy of prayer times across different geographical locations and handling edge cases near the poles required careful implementation of astronomical algorithms.",
    learnings: "This project improved my understanding of API design and taught me about handling time zones and geographical calculations in backend applications."
  },
  {
    id: 'opiniometer',
    title: "Opiniometer",
    description: "Analyze an opinion on a specific topic based on Twitter posts!",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80",
    technologies: ["React", "Python", "Chart.js"],
    link: "#",
    github: "https://github.com/example/opiniometer",
    overview: "A sentiment analysis tool that processes Twitter data to provide insights about public opinion on various topics. Uses machine learning for accurate sentiment classification.",
    features: [
      "Real-time Twitter data analysis",
      "Sentiment visualization with Chart.js",
      "Customizable search parameters",
      "Export functionality for reports"
    ],
    challenges: "Processing large volumes of Twitter data in real-time while maintaining application responsiveness was a significant challenge. We implemented efficient data streaming and caching mechanisms to handle this.",
    learnings: "This project enhanced my skills in data processing and visualization, and taught me about the practical applications of machine learning in web applications."
  }
];