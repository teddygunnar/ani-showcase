import { FC, useState } from "react";
import { Alert, Circles, Example, RotateIn, ShowcaseContainer } from "../..";
import { ComponentArrType } from "../../core/_models";

const Showcase: FC = () => {
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

export default Showcase;
