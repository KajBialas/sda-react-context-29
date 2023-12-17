import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Counter from "./pages/Counter";
import PostDetails from "./pages/PostDetails";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { CounterProvider } from "./context/CounterContext";



function App() {

  return (
    <CounterProvider>
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
    </CounterProvider>
    
  );
}

export default App;
