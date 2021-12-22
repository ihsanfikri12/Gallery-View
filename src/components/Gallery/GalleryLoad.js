import React from "react";

import style from "./GalleryLoad.module.css";

const GalleryLoad = () => {
  const loadImage = document.querySelector(".loadImage");
  console.log(loadImage);

  const loadMoreImage = function () {
    const observerCallback = (entries) => {
      const [entry] = entries;

      if (!entry.isInterSecting) return;

      console.log("hello");
    };

    const load = new IntersectionObserver(observerCallback, {
      root: null,
      threshold: 0.15,
    });

    // load.observe(loadImage);
  };

  loadMoreImage();

  return (
    <React.Fragment>
      <p className={style.loadImage}>Load Image</p>
    </React.Fragment>
  );
};

export default GalleryLoad;
