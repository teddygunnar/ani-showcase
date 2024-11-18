import { Routes, Route } from "react-router-dom";
import { Parallax, Showcase, Home, ScrollAnimation,Portofolio } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/parallax" element={<Parallax />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/scroll-animation" element={<ScrollAnimation />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;