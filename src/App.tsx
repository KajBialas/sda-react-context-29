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



function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => setCounter(prevCounter => prevCounter + 1);
  const handleDecrementCounter = () => setCounter(prevCounter => prevCounter - 1);
  const handleResetCounter = () => setCounter(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home counter={counter} />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<PostDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/counter" element={
          <Counter 
            counter={counter} 
            handleIncrementCounter={handleIncrementCounter}  
            handleDecrementCounter={handleDecrementCounter}
            handleResetCounter={handleResetCounter}
          />
        } />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
