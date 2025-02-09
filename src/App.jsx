import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import { AnimatePresence, motion } from "framer-motion";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<PageWrapper><Hero /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/experience" element={<PageWrapper><Experience /></PageWrapper>} />
        <Route path="/projects" element={<PageWrapper><Projects /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

const PageWrapper = ({ children }) => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 100, scale: 0.95 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    exit={{ opacity: 0, x: -100, scale: 0.95 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      {/* Navbar */}
      <header className="sticky top-0 bg-white/50 backdrop-blur-md transition-all duration-300 shadow-md z-50">
        <nav className="flex justify-between items-center px-6 md:px-10 py-4">
          <div className="text-3xl font-bold">
            <Link to="/" onClick={() => setMenuOpen(false)}>Abhinav Singh</Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-xl">
            {["about", "experience", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  className="transition-all duration-300 ease-in-out text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4"
                  to={`/${item}`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col justify-between h-6 w-8 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2.5 translate-x-translate-y-2.5" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-full h-0.5 bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2.5 translate-x-translate-y-2.5" : ""
              }`}
            />
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 w-full bg-white/90 flex flex-col items-center overflow-hidden transition-all duration-300 ${
            menuOpen ? "opacity-100 visible py-4" : "opacity-0 invisible py-0"
          }`}
        >
          {["about", "experience", "projects", "contact"].map((item) => (
            <Link
              key={item}
              to={`/${item}`}
              className="block py-3 text-xl text-black w-full text-center transition-all duration-300 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          ))}
        </div>
      </header>

      {/* Routes */}
      <main className="min-h-[80vh]">
        <AnimatedRoutes />
      </main>

      {/* Neon Cursor Effect */}
      <div
        id="neon-cursor"
        className="hidden lg:block w-10 h-10 border-2 border-cyan-200 rounded-full absolute pointer-events-none shadow-[0_0_10px_cyan,0_0_20px_cyan,0_0_30px_cyan,0_0_40px_cyan] transition-transform duration-100 transform -translate-x-1/2 -translate-y-1/2 z-[100]"
      >
        <div className="text-center text-2xl text-blue-300">&rarr;</div>
      </div>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md transition-all duration-300 shadow-md z-50 w-full mt-5 py-6 flex flex-col sm:gap-y-4 text-xs items-center">
        <nav>
          <ul className="flex gap-2 sm:gap-6 text-xl">
            {["about", "experience", "projects", "contact"].map((item) => (
              <li key={item}>
                <Link
                  className="transition-all duration-300 ease-in-out text-black no-underline hover:text-gray-500 hover:underline hover:underline-offset-4"
                  to={`/${item}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <p>Copyright &#169; {new Date().getFullYear()} All Rights Reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
