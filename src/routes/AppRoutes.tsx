import { Routes, Route, Navigate } from "react-router-dom";
import { Portofolio } from "../components";

const AppRoutes = () => {
  return (
    <Routes>
      {/* <Route path="/parallax" element={<Parallax />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/scroll-animation" element={<ScrollAnimation />} />
      <Route path="/portofolio" element={<Portofolio />} />
      <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<Portofolio />} />
      <Route path="/*" element={<Navigate to='/' />} />
    </Routes>
  );
};

export default AppRoutes;
