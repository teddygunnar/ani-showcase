import { FC, ReactNode } from "react";

const Example: FC<ReactNode> = () => {
  return (
    <div className="box">
      <div className="overlay overlay-1" />
      <div className="overlay overlay-2" />
      <div className="overlay overlay-3" /> 
      <span>Foo</span>
      <div className="divider" />
      <span>Bar</span>
    </div>
  );
};

export default Example;
