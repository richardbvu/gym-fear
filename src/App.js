import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Classes from "./pages/Classes";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import Schedule from "./pages/Schedule";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='schedule' element={<Schedule />} />
        <Route path='blog' element={<Blog />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='classes' element={<Classes />} />
        <Route path='contact' element={<Contact />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
