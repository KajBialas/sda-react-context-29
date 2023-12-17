import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import PostDetails from "./pages/PostDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";


// 1. Utwórz komponent Nav zawierający linki do wszystkich podstron, osadzony w Header
// 2. Utwórz podstronę Counter, obsługującą mozliwość zwiększania, zmniejszania oraz resetowania stanu licznika

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
