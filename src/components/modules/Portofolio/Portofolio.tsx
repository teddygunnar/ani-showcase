import React, { CSSProperties, FC, useEffect, useRef, useState } from "react";
import linkedInIcons from "../../../assets/icons/linkedin.svg";
import githubIcons from "../../../assets/icons/github.svg";
import envelopeIcons from "../../../assets/icons/envelope.svg";
import { useFirestoreCollection } from "../../../hooks";
import { DocumentData } from "firebase/firestore";

export interface IPortofolioProps {
  description: string;
  image_url: string[];
  title: string;
}

const Portofolio: FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [playState, setPlayState] = useState<boolean>(false);
  const [openDesc, setOpenDesc] = useState<boolean | null>(null);

  useEffect(() => {
    const div = ref.current;

    if (div && !playState) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry: IntersectionObserverEntry) => {
            if (entry.isIntersecting) {
              setPlayState(true);
            }
          });
        },
        { threshold: 0.25 }
      );
      observer.observe(div);
      return () => observer.disconnect();
    }
  }, [playState]);

  const { data, loading, error, reload } = useFirestoreCollection({
    collectionName: "portofolio_images",
  });

  console.log({ data });

  return (
    <div className="porto-wrapper">
      <div className="porto-container-hero">
        <div className="porto-hero">
          <div className="porto-hero__title">
            <div className="porto-hero__title__letter">
              <span>W</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>E</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>L</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>C</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>O</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>M</span>
            </div>
            <div className="porto-hero__title__letter">
              <span>E</span>
            </div>
          </div>

          <div className="porto-hero__sub-title">
            <div className="porto-hero__sub-title__text">
              <span>to</span>
              <div className="porto-hero__sub-title__text__content">
                My Profile
              </div>
              <div className="porto-hero__sub-title__text__content">
                My Profile
              </div>
            </div>
          </div>

          <div className="porto-hero__overlay"></div>
          <div className="porto-hero__profile">
            <div className="porto-hero__profile__desc">
              <span>Lorem Ipsum Dolor</span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit,
                maiores, natus a aliquam laborum rem sapiente possimus aperiam
                officia, impedit modi neque. Amet fuga illo tempore, atque
                libero officia unde!
              </span>
            </div>

            <div className="porto-hero__profile__icons">
              <ul>
                <li>
                  <img src={linkedInIcons} />
                </li>
                <li>
                  <img src={githubIcons} />
                </li>
                <li>
                  <img src={envelopeIcons} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="porto-container-contents" ref={ref}>
        {loading && <div>Loading...</div>}
        {error && <div>Got an error</div>}

        {!loading &&
          data &&
          data.map((_val: DocumentData, index: number) => {
            const val = _val as IPortofolioProps;
            return (
              <React.Fragment key={index + val.title}>
                <div className="porto-divider">
                  <span play-state={playState.toString()}>{val.title}</span>
                </div>
                <div className="porto-contents">
                  {val.image_url.map((url: string) => {
                    return (
                      <div
                        className="porto-contents__box"
                        play-state={playState.toString()}
                      >
                        <img src={url} />
                      </div>
                    );
                  })}
                  <div
                    className="porto-contents__content-desc"
                    open-desc={openDesc?.toString()}
                  >
                    <div>
                      <span>Description</span>
                    </div>
                    <div
                      className="porto-contents__content-desc__context"
                      dangerouslySetInnerHTML={{ __html: val.description }}
                    ></div>
                    <div
                      className="porto-contents__content-desc__desc-btn"
                      onClick={() => setOpenDesc((prev) => !prev)}
                    >
                      Pull here!
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
};

export default Portofolio;
