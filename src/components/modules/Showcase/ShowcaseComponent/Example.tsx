import { FC } from "react";

const Example: FC = () => {
  return (
    <div className="box">
      <div className="overlay overlay-1" />
      <div className="overlay overlay-2" />
      <div className="overlay overlay-3" />
      <div className="overlay overlay-4" />
      <div className="box-text">
        <span>Foo</span>
        <div className="divider" />
        <span>Bar</span>
      </div>
    </div>
  );
};

export default Example;
