import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import Counter from "./pages/counter/Counter";
import PostDetails from "./pages/postDetails/PostDetails";
import AddPost from "./pages/addPost/AddPost";
import Spotify from "./pages/spotify/Spotify";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import { CounterProvider } from "./context/counter/CounterContext";
import { BlogProvider } from "./context/blog/BlogContext";

// Zadanie 6
// 1. Zaimplementuj stronę: Spotify, gdzie będzie moliwość odtwarzania muzyki



function App() {

  return (
    <BlogProvider>
      <CounterProvider>
            <Router>
                  <Header />
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/blog/:id" element={<PostDetails />} />
                    <Route path="/add-post" element={<AddPost />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/counter" element={<Counter />} />
                    <Route path="/spotify" element={<Spotify />} />
                  </Routes>
                  <Footer />
                </Router>
          </CounterProvider>
    </BlogProvider>
    
    
  );
}


// Wdrozyc context dla countera
// Dodaj context z listą postów bloga

export default App;
