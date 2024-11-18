import { FC, ReactNode } from "react";

const RotateIn: FC = () => {
  return (
    <div className="rotate-in-container">
      <div className="rotate-in rotate-in-ripples">
        <div className="effect" />
        <div className="effect" />
        <div className="effect" />
      </div>

      <div className="rotate-in rotate-in-box">
        <div className="effect" />
        <div className="effect" />
        <div className="effect" />
      </div>

      <div className="rotate-in rotate-in-origin">
        <div className="effect" />
        <div className="effect" />
        <div className="effect" />
      </div>
    </div>
  );
};

export default RotateIn;
