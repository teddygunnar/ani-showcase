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

  const { data, loading, error } = useFirestoreCollection({
    collectionName: "portofolio_images",
  });

  const handleDownloadCV = () => {
    const url = 'https://firebasestorage.googleapis.com/v0/b/portofolio-2869d.appspot.com/o/CV_Teddy_Gunnar_Solkjaer%202024.pdf?alt=media&token=c9fdaca0-d86a-448d-8ad3-c99d50606cff';

    window.open(url, '_blank')
  }

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
            <div className="porto-hero__profile__avatar">
              <img src='https://firebasestorage.googleapis.com/v0/b/portofolio-2869d.appspot.com/o/1611650805096.jpg?alt=media&token=efbe7da0-0a49-44d6-a653-95643fdb9a73' />
            </div>
            <div className="porto-hero__profile__desc">
              <span>My name is</span>
              <span>
                Teddy Gunnar Solkajer
              </span>
              <span>
                As a passionate <label>Front-End Developer</label>, I specialize in designing and developing simple, user-friendly websites that prioritize elegance and functionality. My goal is to create web experiences that are not only visually appealing but also intuitive and accessible for everyone.
              </span>

              <ul className="porto-hero__profile__desc__list">
                <li>
                  <a href='https://github.com/teddygunnar' target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/teddygunnars/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </li>
                <li onClick={handleDownloadCV}>Download my CV</li>
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
                  <span play-state={playState.toString()}>Projects</span>
                </div>
                <div className="porto-contents">
                  {val.image_url.map((url: string, idx: number) => {
                    return (
                      <div
                        key={idx}
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
                      <span>{val.title}</span>
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


      <div className="porto-footer">
        <div />
        <div />
        <div />
        <div />
        <div className="porto-footer__copyrights">
          <p>©Copyrights. All rights reserved.</p>
          <p>This website is made with Vite & React (TypeScript)</p>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
