import { useState, useEffect } from "react";

const useWebpSupport = () => {
  const [isWebpSupported, setIsWebpSupported] = useState(false);

  useEffect(() => {
    const elem = document.createElement("canvas");
    if (!!(elem.getContext && elem.getContext("2d"))) {
      const isSupported =
        elem.toDataURL("image/webp").indexOf("data:image/webp") === 0;
      setIsWebpSupported(isSupported);
    }
  }, []);

  return isWebpSupported;
};

export default useWebpSupport;
