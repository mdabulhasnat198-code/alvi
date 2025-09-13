import React from "react";

const projects = [
  { id: 1, title: "RIVERGUARD", description: "Project 1 summary here", link: "#" },
  { id: 2, title: "Air Cooler with Peltier Module", description: "Project 2 summary here", link: "#" },
  { id: 3, title: "Air-Conditioning System Analysis", description: "Project 3 summary here", link: "#" },
  { id: 4, title: "Interactive Games with Python", description: "Project 4 summary here", link: "#" },
];

const publications = [
  { id: 1, title: "Thesis", description: "Your thesis details here", link: "#" }
];

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Mohtasim Saib Nahin</h1>
          <div className="text-sm text-slate-500">Final semester — BUET, Mechanical Engineering</div>
        </div>
        <nav className="space-x-4 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#publications" className="hover:underline">Publications</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <section id="about" className="py-12 text-center">
          <h2 className="text-4xl font-extrabold">Welcome</h2>
          <p className="mt-4 text-slate-700 max-w-2xl mx-auto">
            Hello, I'm Nahin, originally from Bangladesh and currently in my final semester at BUET. 
            I have a deep passion for learning, exploring fields, and pursuing higher studies...
          </p>
        </section>

        <section id="resume" className="mt-10">
          <h3 className="text-2xl font-bold">Resume</h3>
          <p className="mt-4 text-slate-700">
            <a href="#" className="text-blue-600 hover:underline">Download Resume (PDF)</a>
          </p>
        </section>

        <section id="projects" className="mt-10">
          <h3 className="text-2xl font-bold">Projects & Thesis</h3>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {projects.map(p => (
              <article key={p.id} className="rounded-xl border p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{p.description}</p>
                <a href={p.link} className="mt-3 inline-block text-sm text-blue-600 hover:underline">View More</a>
              </article>
            ))}
          </div>
        </section>

        <section id="publications" className="mt-10">
          <h3 className="text-2xl font-bold">Research & Publications</h3>
          <div className="mt-6 space-y-4">
            {publications.map(pub => (
              <div key={pub.id} className="p-4 border rounded-lg bg-white shadow-sm">
                <h4 className="text-lg font-semibold">{pub.title}</h4>
                <p className="mt-1 text-sm text-slate-600">{pub.description}</p>
                <a href={pub.link} className="text-sm text-blue-600 hover:underline">Read more</a>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-10">
          <h3 className="text-2xl font-bold">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: <a href="mailto:your.email@example.com" className="text-blue-600 hover:underline">your.email@example.com</a></li>
            <li>Facebook: <a href="#" className="text-blue-600 hover:underline">facebook.com/yourprofile</a></li>
            <li>LinkedIn: <a href="#" className="text-blue-600 hover:underline">linkedin.com/in/yourprofile</a></li>
          </ul>
        </section>

        <footer className="mt-20 border-t pt-8 pb-8 text-sm text-slate-500 text-center">
          © {new Date().getFullYear()} Mohtasim Saib Nahin
        </footer>
      </main>
    </div>
  );
}
