import { FC, ReactNode } from "react";
import { Example, ShowcaseContainer, Circles } from "./components";

export type ComponentArrType = {
  title: string;
  comp: FC<ReactNode>;
};

const App = () => {
  const componentArr: ComponentArrType[] = [
    {
      title: "Border Wide",
      comp: Example,
    },
    {
      title: "Circles Fade In",
      comp: Circles,
    },
  ];
  return (
    <>
      <div className="app-title">
        <span>Animation Showcase</span>
      </div>
      <ShowcaseContainer components={componentArr} />
    </>
  );
};

export default App;
