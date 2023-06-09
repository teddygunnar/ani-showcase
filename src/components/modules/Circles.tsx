import { FC, ReactNode } from "react";

const Circles: FC<ReactNode> = () => {
  return (
    <div className="circles-stage">
      <div className="circle circle-overlay-1" />
      <div className="circle circle-overlay-2" />
      <div className="circle circle-overlay-3" />
      <div className="circle circle-overlay-4" />
    </div>
  );
};

export default Circles;
