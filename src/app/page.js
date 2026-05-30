import {
  FaCode,
  FaMobileAlt,
  FaRobot,
  FaShieldAlt,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-purple-950 text-white">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md bg-black/40 border-b border-purple-500/20">
        <h1 className="text-2xl font-bold text-purple-400">
          MaVionix
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-purple-400">Home</a>
          <a href="#about" className="hover:text-purple-400">About</a>
          <a href="#services" className="hover:text-purple-400">Services</a>
          <a href="#portfolio" className="hover:text-purple-400">Portfolio</a>
          <a href="#contact" className="hover:text-purple-400">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center h-[80vh] px-6"
      >
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          MaVionix
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          All Digital Services at One Place
        </p>

        <div className="flex gap-4">
          <button className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition">
            Get Started
          </button>

          <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="py-20 px-8 bg-black scroll-mt-24"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            About Us
          </h2>

          <p className="text-gray-300 text-lg leading-8">
            MaVionix is a technology-driven company providing Web
            Development, Mobile App Development, AI Solutions,
            Cybersecurity Services, UI/UX Design, and Digital
            Marketing. Our mission is to help businesses grow
            through innovative and secure digital solutions.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="py-20 px-8 scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaCode className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Web Development
            </h3>
            <p>Modern responsive websites for businesses.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaMobileAlt className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              App Development
            </h3>
            <p>Android and iOS applications.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaRobot className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              AI Solutions
            </h3>
            <p>Smart AI-powered automation tools.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaShieldAlt className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Cybersecurity
            </h3>
            <p>Secure and reliable protection solutions.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaPaintBrush className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              UI/UX Design
            </h3>
            <p>Beautiful and user-friendly interfaces.</p>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-lg border border-purple-500/20 p-6 rounded-xl hover:scale-105 transition duration-300">
            <FaBullhorn className="text-4xl text-purple-400 mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              Digital Marketing
            </h3>
            <p>Grow your online presence effectively.</p>
          </div>

        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        className="py-20 px-8 bg-black scroll-mt-24"
      >
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">
          Portfolio
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              E-Commerce Website
            </h3>
            <p className="mt-3">
              Modern shopping platform built using React.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              AI Chatbot
            </h3>
            <p className="mt-3">
              Intelligent customer support assistant.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl">
            <h3 className="text-2xl font-bold">
              Healthcare App
            </h3>
            <p className="mt-3">
              Smart healthcare management solution.
            </p>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-8 scroll-mt-24"
      >
        <div className="max-w-xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">
            Contact Us
          </h2>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-slate-900"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-slate-900"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-slate-900"
            />

            <button
              type="submit"
              className="bg-purple-600 px-6 py-3 rounded-lg w-full hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-black py-6 text-center text-gray-400">
        <p>© 2026 MaVionix. All Rights Reserved.</p>
      </footer>

    </main>
  );
}