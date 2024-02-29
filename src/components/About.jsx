import React, { useEffect } from "react";
import { useMediaQueries } from "../hooks/getWindowSize";
import useWebpSupport from "../hooks/useWebpSupport"; // Import the hook
import useMediaSize from '../hooks/useMediaSize';
import AboutImgWEB from "../assets/alessandro-bravi-about-webp.webp";
import AboutImgPNG from "../assets/alessandro-bravi-about-png.png";
import IanBrvLogo from "../assets/ianbrv-logo.webp";

export default function About() {
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();
  const isWebpSupported = useWebpSupport(); // Use the hook
  const [observedDiv, mediaSize] = useMediaSize();

  useEffect(() => {
    const preloadResources = () => {
      const img = new Image();
      img.src = isWebpSupported ? AboutImgWEB : AboutImgPNG;
    };
    preloadResources();

    return () => {
      // Cleanup if necessary
    };
  }, [isWebpSupported]);

  return (
    <>
      {isDesktopOrLaptop && (
        <main
          className="full-height small-space"
          style={{ justifyContent: "unset" }}
        >
          <section className="full-col flex">
            <div id="aboutImg" >
              <img

                src={isWebpSupported ? AboutImgWEB : AboutImgPNG}
                loading="lazy"
                preload="auto"
                alt="Alessandro Bravi ianBrv"
              />
            </div>

            <div className="flex-col about">
              <div
                className="flex justify-content-btw "
                style={{ marginBottom: "8vh" }}
              >
                <div className="logo-text">
                  <img ref={observedDiv}
                    width={mediaSize.width}
                    height={mediaSize.height} src={IanBrvLogo} alt="Alessandro Bravi ianBrv" />
                </div>
                <p>{new Date().getFullYear()}</p>
              </div>
              <div className="flex-col small-gap">
                <p>
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demonstrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and ability to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>

                <p>
                  <b>Education</b> <br />
                  2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                  indirizzo Grafica pubblicitaria.
                  <br />
                  2019-2021 Laurea in Design della comunicazione Visiva presso
                  IED Firenze.
                </p>

                <p>
                  <b>My Freelance work at</b> <br />
                  MELPOMENE STUDIO video production agency. <br />
                  ARCHIMEDE6 creative studio
                </p>

                <p>
                  <b>Language</b> <br />
                  Italiano <br />
                  Inglese
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {isTabletOrMobile && (
        <main>
          <section className="flex-col about">
            <div id="aboutImg">
              <img

                src={isWebpSupported ? AboutImgWEB : AboutImgPNG}
                loading="lazy"
                preload="auto"
                alt="Alessandro Bravi ianBrv"
              />
            </div>
            <div className="flex-col small-gap" style={{ marginTop: "3vh" }}>
              <div className="flex justify-content-btw ">
                <div className="logo-text">
                  <img ref={observedDiv}
                    width={mediaSize.width}
                    height={mediaSize.height} src={IanBrvLogo} alt="Alessandro Bravi ianBrv" />
                </div>
                <p>{new Date().getFullYear()}</p>
              </div>
              <div className="flex-col small-gap">
                <p>
                  Experienced graphic designer and video creator, able to use a
                  variety of visual languages for projects. Demonstrates mastery
                  in graphic design, motion graphics, and video editing. Strong
                  conceptual skills and ability to convey compelling narratives
                  through images. Adaptive and detail-oriented, consistently
                  delivers aesthetically pleasing and effective solutions.
                </p>

                <p>
                  <b>Education</b> <br />
                  2012-2017 Liceo Artistico "Scuola del libro" di Urbino,
                  indirizzo Grafica.
                  <br />
                  2019-2021 Laurea in Design della comunicazione Visiva presso
                  IED Firenze.
                </p>
                <div className="flex justify-content-btw">
                  <p>
                    <b>My Freelance work at</b> <br />
                    MELPOMENE STUDIO video production agency. <br />
                    ARCHIMEDE6 creative studio
                  </p>

                  <p>
                    <b>Language</b> <br />
                    Italiano <br />
                    Inglese
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}



