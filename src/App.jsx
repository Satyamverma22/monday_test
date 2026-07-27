import { Routes, Route } from "react-router";
import Home from "./features/Pages/Home";
import About from "./features/Pages/About";
import Contact from "./features/Pages/Contact";

const App = () => {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;