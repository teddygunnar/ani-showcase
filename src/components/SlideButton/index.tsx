import { FC, useCallback, useState } from "react";
import { ComponentArrType } from "../../App";

type SlideButtonProps = {
  components: ComponentArrType[];
};

const SlideButton: FC<SlideButtonProps> = ({ components }) => {
  const [nav, setNav] = useState(1);
  const handleNextBtn = useCallback(() => {
    setNav((prev) => {
      const len = components.length - 1;

      if (prev === len) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  }, [components]);

  const handlePrevBtn = useCallback(() => {
    setNav((prev) => {
      const len = components.length - 1;

      if (prev === 0) {
        return len;
      } else {
        return prev - 1;
      }
    });
  }, [components]);
  return (
    <>
      <div className="showcase">
        <div className="title">{components[nav].title}</div>
        <div className="container">{components[nav].comp(nav)}</div>
      </div>
      <div className="prev-btn" onClick={handlePrevBtn} />
      <div className="next-btn" onClick={handleNextBtn} />
    </>
  );
};

export default SlideButton;
