import React from "react";
import { NavLink } from "react-router-dom";
import { useMediaQueries } from "../hooks/getWindowSize";
import "../App.css";
import useMediaSize from '../hooks/useMediaSize';
import VideoHome from "../assets/home/alessandro-bravi-portfolio.mp4";
import PosterImg from "../assets/home/alessandro-bravi-portfolio-thumb.webp";

export default function Home() {
  const { isDesktopOrLaptop } = useMediaQueries();
  const [observedDiv, mediaSize] = useMediaSize();

  return (
    <>
      <h1>Alessandro Bravi</h1>
      <main>
        <section className={isDesktopOrLaptop ? "full-height flex-center" : "flex-center flex-col"}>
          <div className="video-container">
            <div className="video-wrapper">
              <video
              className="full-height-video"
                playsInline
                ref={observedDiv}
                width={mediaSize.width}
                height={mediaSize.height} 
                muted
                autoPlay
                loop
                poster={PosterImg}
                alt="Alessandro Bravi Video Home"
>
                <source src={VideoHome} type="video/mp4" />
                
              </video>
            </div>
          </div>
          {!isDesktopOrLaptop && (
            <header className="no-padding">
              <nav>
                <ul className="flex-col flex-center">
                  <li>
                    <NavLink to="/projects" className="larger-font">
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="larger-font">
                      About
                    </NavLink>
                  </li>
                  <li>
                    <a
                      className="larger-font"
                      href="https://www.instagram.com/alessandro_bravi"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      IG
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          )}
        </section>
      </main>
    </>
  );
}
