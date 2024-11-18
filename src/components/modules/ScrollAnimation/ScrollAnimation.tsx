import { FC, useEffect, useRef } from "react";

const ScrollAnimation: FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parentDiv = ref.current;
    const childDiv = parentDiv?.querySelectorAll<HTMLSpanElement>(".scroll-wrapper__box__1__container__text");

    if (parentDiv) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            // add "active" class to child elements
            childDiv?.forEach((child) => {
              child.classList.add("active");
            });
          }
        });
      });

      observer.observe(parentDiv);

      //clean up the observer when the component is unmounted
      return () => observer.disconnect();
    }
  }, []);

  return (
    <div className="scroll-wrapper">
      <div className="scroll-wrapper__box">
        <div className="scroll-wrapper__box__3">
          <div className="scroll-wrapper__box__3__container">
            <span className="scroll-wrapper__box__3__container__text">H</span>
            <span className="scroll-wrapper__box__3__container__text">e</span>
            <span className="scroll-wrapper__box__3__container__text">l</span>
            <span className="scroll-wrapper__box__3__container__text">l</span>
            <span className="scroll-wrapper__box__3__container__text">o</span>
            <div className="scroll-wrapper__box__3__container__maskIn"></div>
          </div>
        </div>
        <div className="scroll-wrapper__box__2">
          <div className="scroll-wrapper__box__2__container">
            <div className="scroll-wrapper__box__2__container__mono">
              <div className="scroll-wrapper__box__2__container__mono__text">
                mono
              </div>
              <div className="scroll-wrapper__box__2__container__mono__line"></div>
            </div>
            <div className="scroll-wrapper__box__2__container__chrome">
              <div className="scroll-wrapper__box__2__container__chrome__text">
                chrome
              </div>
              <div className="scroll-wrapper__box__2__container__chrome__line"></div>
            </div>
          </div>
        </div>
        <div className="scroll-wrapper__box__1" ref={ref}>
          <div className="scroll-wrapper__box__1__container">
            <span className="scroll-wrapper__box__1__container__text">H</span>
            <span className="scroll-wrapper__box__1__container__text">e</span>
            <span className="scroll-wrapper__box__1__container__text">l</span>
            <span className="scroll-wrapper__box__1__container__text">l</span>
            <span className="scroll-wrapper__box__1__container__text">o</span>
            <span className="scroll-wrapper__box__1__container__text"> </span>
            <span className="scroll-wrapper__box__1__container__text">W</span>
            <span className="scroll-wrapper__box__1__container__text">o</span>
            <span className="scroll-wrapper__box__1__container__text">r</span>
            <span className="scroll-wrapper__box__1__container__text">l</span>
            <span className="scroll-wrapper__box__1__container__text">d</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollAnimation;
