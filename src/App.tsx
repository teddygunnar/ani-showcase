import { ComponentType, FC, ReactElement, useState } from "react";
//prettier-ignore
import { Example, ShowcaseContainer, Circles, RotateIn, Alert } from "./components";

interface Props {
  [key: string]: unknown;
}

export type ComponentArrType = {
  Title: string;
  Components: ComponentType<any>;
  props?: Props;
};

const App = () => {
  const [isOpenAlert, setIsOpenAlert] = useState<boolean>(false);
  const componentArr: ComponentArrType[] = [
    {
      Title: "Reveal + Hide Card",
      Components: Example,
    },
    {
      Title: "Circles Slide In",
      Components: Circles,
    },
    {
      Title: "Rotate In + Tranform Origin",
      Components: RotateIn,
    },
    {
      Title: "Alert Message",
      Components: Alert,
      props: {
        isOpenAlert,
        setIsOpenAlert,
      },
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
