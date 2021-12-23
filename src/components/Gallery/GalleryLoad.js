import React, { useEffect, useRef, useState } from "react";

import style from "./GalleryLoad.module.css";

const GalleryLoad = (props) => {
  const loadImageRef = useRef();

  useEffect(() => {
    const observerCallback = (entries, observe) => {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      props.updateImage();

      // observe.unobserve(entry.target);
    };

    const load = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0,
    });

    load.observe(loadImageRef.current);
  }, [loadImageRef.current]);

  return (
    <React.Fragment>
      <div ref={loadImageRef} className={style.loadImage}></div>
    </React.Fragment>
  );
};

export default GalleryLoad;
