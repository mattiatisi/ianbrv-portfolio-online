import  { useState, useEffect, useRef } from "react";

function useMediaSize () {
  const [mediaSize, setMediaSize] = useState({ width: undefined, height: undefined });

  const observedDiv = useRef(null);

  useEffect(() => {
    if (!observedDiv.current) {
      return;
    }

    const resizeObserver = new ResizeObserver(() => {
      if(observedDiv.current.offsetWidth !== mediaSize.width || observedDiv.current.offsetHeight !== mediaSize.height) {
        setMediaSize({
          width: observedDiv.current.offsetWidth,
          height: observedDiv.current.offsetHeight
        });
      }
    });
    
    resizeObserver.observe(observedDiv.current);

    return function cleanup() {
      resizeObserver.disconnect();
    }
  },
  [observedDiv.current, mediaSize.width, mediaSize.height]);

  return [observedDiv, mediaSize];
}

export default useMediaSize;


