import React, { useState, useEffect, useRef, useCallback } from "react";
import { useMediaQueries } from "../hooks/getWindowSize";
import useMediaSize from "../hooks/useMediaSize";
import useWebpSupport from "../hooks/useWebpSupport";
import ProjectData from "../data/ProjectData";

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);



function ProjectsList() {
  const isWebpSupported = useWebpSupport();
  useEffect(() => {
    const preloadResources = () => {
      ProjectData.forEach((item) => {
        preloadImages(item.imgWebp, item.imgJpg);
        preloadImages(item.posterWebp, item.posterJpg);
        preloadImages(item.imagesWebp?.imgWebp1, item.imagesJpg?.imgJpg1);
        preloadImages(item.imagesWebp?.imgWebp2, item.imagesJpg?.imgJpg2);
        preloadImages(item.imagesWebp?.imgWebp3, item.imagesJpg?.imgJpg3);
        preloadImages(item.imagesWebp?.imgWebp4, item.imagesJpg?.imgJpg4);
        preloadImages(item.imagesWebp?.imgWebp5, item.imagesJpg?.imgJpg5);
      });
    };
    preloadResources();
  }, [isWebpSupported]);

  const preloadImages = (...imageSources) => {
    imageSources.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = isWebpSupported ? src : src.replace(".webp", ".jpg");
      }
    });
  };
  return (
    <div className="flex-column">
      {ProjectData.map((item) => (
        <ListItem key={item.id} item={item} isWebpSupported={isWebpSupported} // Check if it's the first item
        />
      ))}
    </div>
  );
}
const ListItem = ({ item, isWebpSupported }) => {
  const { isDesktopOrLaptop, isTabletOrMobile } = useMediaQueries();
  return (
    <div className={item.id === 1 ? "first-child" : ""}>

      {item.layout === "1" && !item.imgWebp && (
        <div className="delete-margin">
          <VideoPlayer item={item} isWebpSupported={isWebpSupported} />
        </div>
      )}
      {item.layout === "1" && item.imgWebp && item.imgJpg && (
        <><div className="medium-space-projects"><img
          loading="lazy" preload="auto"
          className="full-max-height"
          src={isWebpSupported ? item.imgWebp : item.imgJpg}
          alt={item.name} /></div></>
      )}
      {item.layout === "2" && (
        <div className="grid-col-2 medium-space-projects">
          <div className="flex-col  medium-gap-row">
            <div className="flex-col">
              {item.headingRow.row1 && <h2>{item.headingRow.row1}</h2>}
              {item.headingRow.row2 && <h2>{item.headingRow.row2}</h2>}
              {item.headingRow.row3 && <h2>{item.headingRow.row3}</h2>}
            </div>
            {item.logo && <img loading="lazy" preload="auto" alt={item.name} src={item.logo} className="logo-text"></img>}
            {item.logoText && <p>{item.logoText}</p>}
            <p>{item.paragraph}</p>
          </div>
          <img className="img-projects" loading="lazy" preload="auto" src={isWebpSupported ? item.imgWebp : item.imgJpg}
            alt={item.name} />
        </div>

      )}

      {item.layout === "3" && (
        <>
          <div className="grid-col-2-layout-3 medium-space-projects">
            <div className="flex-col">
              {item.headingRow.row1 && <h2>{item.headingRow.row1}</h2>}
              {item.headingRow.row2 && <h2>{item.headingRow.row2}</h2>}
              {isTabletOrMobile && item.logo && <h2>{item.logo}</h2>}
              <div className="flex-col-layout-3">
                {isDesktopOrLaptop && item.logo && <h2>{item.logo}</h2>}
                <img
                  loading="lazy" preload="auto"
                  className=""
                  src={isWebpSupported ? item.imagesWebp.imgWebp1 : item.imagesJpg.imgJpg1}
                  alt={item.name} />
                <img
                  loading="lazy" preload="auto"
                  className=""
                  src={isWebpSupported ? item.imagesWebp.imgWebp2 : item.imagesJpg.imgJpg2}
                  alt={item.name} />
              </div>
            </div>
            <img
              loading="lazy" preload="auto"
              className="large-img-layout-3"
              src={isWebpSupported ? item.imagesWebp.imgWebp3 : item.imagesJpg.imgJpg3}
              alt={item.name} />

          </div></>
      )}
      {item.layout === "4" && (
        <>
          <div className="medium-space-projects">
            <div className="grid-col-3">
              {isTabletOrMobile && (
                <div className="flex-col-center">
                  {item.headingRow.row1 && <h2>{item.headingRow.row1}</h2>}
                  {item.headingRow.row2 && <h2>{item.headingRow.row2}</h2>}
                  {item.headingRow.row3 && <h2>{item.headingRow.row3}</h2>}
                </div>
              )}
              <img
                loading="lazy"
                preload="auto"
                className="full-max-height"
                src={isWebpSupported ? item.imagesWebp.imgWebp1 : item.imagesJpg.imgJpg1}
                alt={item.name} />
              <img
                loading="lazy"
                preload="auto"
                className="full-max-height"
                src={isWebpSupported ? item.imagesWebp.imgWebp2 : item.imagesJpg.imgJpg2}
                alt={item.name} />
              <img
                loading="lazy"
                preload="auto"
                className="full-max-height"
                src={isWebpSupported ? item.imagesWebp.imgWebp3 : item.imagesJpg.imgJpg3}
                alt={item.name} />
              <img
                loading="lazy"
                preload="auto"
                className="full-max-height"
                src={isWebpSupported ? item.imagesWebp.imgWebp4 : item.imagesJpg.imgJpg4}
                alt={item.name} />
              <img
                loading="lazy"
                preload="auto"
                className="full-max-height"
                src={isWebpSupported ? item.imagesWebp.imgWebp5 : item.imagesJpg.imgJpg5}
                alt={item.name} />
              {isDesktopOrLaptop && (
                <div className="flex-col-center">
                  {item.headingRow.row1 && <h2>{item.headingRow.row1}</h2>}
                  {item.headingRow.row2 && <h2>{item.headingRow.row2}</h2>}
                  {item.headingRow.row3 && <h2>{item.headingRow.row3}</h2>}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const VideoPlayer = ({ item, isWebpSupported, isDesktopOrLaptop }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { width, height } = useMediaSize();
  const [isLoading, setIsLoading] = useState(true);
  


  const togglePlay = async () => {
    if (videoRef.current) {
      try {
        if (videoRef.current.paused) {
          await videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      } catch (error) {
        console.error('Error toggling play:', error);
      }
    }
  };

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const [showVideo, setShowVideo] = useState(false);





  const toggleFullscreen = () => {
    const videoElement = videoRef.current;

    if (!isIOS) {
      // Do something specific for iOS
      if (videoElement) {
        if (!document.fullscreenElement) {
          videoElement.requestFullscreen()
            .then(() => setIsFullscreen(true))
            .catch((err) => console.error('Error attempting to enable full-screen mode:', err));
        } else {
          document.exitFullscreen()
            .then(() => setIsFullscreen(false))
            .catch((err) => console.error('Error attempting to exit full-screen mode:', err));
        }
      }
    } else {
      if (videoElement) {
        setShowVideo(!showVideo);
        if (!showVideo) {
          document.body.style.overflow = 'hidden'; // Disable body scroll
        } else {
          document.body.style.overflow = 'auto'; // Enable body scroll
        }
      }
      console.log('This is not an iOS device.');
    }
  };








  const handleIntersection = useCallback((entries) => {
    const entry = entries[0];
    if (entry.isIntersecting && videoRef.current) {
      togglePlay();
    } else if (!entry.isIntersecting && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, [handleIntersection]);


  const handleVideoClick = () => {
    togglePlay();
  };


  useEffect(() => {
    const handleLoadedMetadata = () => {
      setIsLoading(false);
    };

    if (videoRef.current) {
      videoRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () => {
      };
    }
  }, []);

  return (
    
    <div className="video-container">
      {isLoading && <div className="asbolute-video-loading">Loading...</div>}

      <div className="video-wrapper">

        <video
          ref={videoRef}
          className={!showVideo ? (item.notFullHeight ? "video-projects max-height-unset" : "video-projects") : "video-projects active-video-bg"}
          width={width}
          height={height}
        poster={isWebpSupported ? item.posterWebp : item.posterJpg}
          playsInline
          autoPlay
          loop
          muted={isMuted}
          onClick={handleVideoClick} // Handle video click
        >
          <source src={item.projectVideo} type="video/mp4" />
        </video>


        <div className={showVideo ? "custom-controls active" : "custom-controls"}>
          <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button onClick={toggleAudio}>{isMuted ? "Unmute" : "Mute"}</button>
          {showVideo ? (
            <button className="exit-fullscreen-btn" onClick={toggleFullscreen}>
              Exit Fullscreen
            </button>
          ) : (
            <button className="fullscreen-btn" onClick={toggleFullscreen}>
              Fullscreen
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
