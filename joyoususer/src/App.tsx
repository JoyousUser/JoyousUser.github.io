import React from "react";
import "./index.css";

const projects = [
  {
    title: "Project One",
    description:
      "A sleek app built using React and Symfony for managing tasks and workflows.",
    img: "/assets/project1.jpg",
    github: "#",
  },
  {
    title: "Project Two",
    description:
      "A mobile-first dashboard built with Spring Boot and Tailwind for analytics.",
    img: "/assets/project2.jpg",
    github: "#",
  },
  {
    title: "Project Three",
    description:
      "Real-time messaging platform using Python, Docker, and WebSockets.",
    img: "/assets/project3.jpg",
    github: "#",
  },
];

function App() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white font-sans px-6 py-12">
      <header className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Fullstack Developer in Training
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto text-lg">
          I build modern web and mobile apps with PHP/Symfony, Python, React,
          Java, Docker. Open to internship (Sept 8 – Oct 31, 2025).
        </p>
      </header>

      <main className="grid md:grid-cols-3 gap-8">
        {projects.map((proj, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-sm text-gray-300 mb-4">{proj.description}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </main>

      <footer className="text-center text-gray-500 text-sm mt-16">
        © 2025 Your Name — Built with React, Tailwind, and Vite
      </footer>
    </div>
  );
}

export default App;
