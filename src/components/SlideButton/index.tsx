/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useCallback, useEffect, useState } from "react";
import { ComponentArrType } from "../core/_models";

type SlideButtonProps = {
  components: ComponentArrType[];
};

const SlideButton: FC<SlideButtonProps> = ({ components }) => {
  const [nav, setNav] = useState(0);

  const keyPress = useCallback(
    (event: KeyboardEvent) => {
      const { key } = event;

      if (key === "ArrowRight") {
        handleNextBtn();
      }

      if (key === "ArrowLeft") {
        handlePrevBtn();
      }
    },
    [nav]
  );

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

  useEffect(() => {
    document.addEventListener("keydown", keyPress, false);
  }, []);

  //prettier-ignore
  return (
    <>
      <div className="showcase">
        {components.map(
          ({ Components, Title, props }, index) =>
            index === nav && (
              <>
                <div className="title" key={index}>{Title}</div>
                <div className="container" key={index}>{<Components {...props} />}</div>
              </>
            )
        )}
      </div>
      <div className="prev-btn" onClick={handlePrevBtn} />
      <div className="next-btn" onClick={handleNextBtn} />
    </>
  );
};

export default SlideButton;
