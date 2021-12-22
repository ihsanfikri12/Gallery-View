import React from "react";

import style from "./GalleryModal.module.css";

const GalleryModal = (props) => {
  const removeModalHandler = (event) => {
    if (event.key && event.key !== "Escape") return;

    props.removeImage();
  };

  window.addEventListener("keydown", removeModalHandler);

  return (
    <React.Fragment>
      <div
        onClick={removeModalHandler}
        className={
          props.image ? `${style.backdrop} ${style.visible}` : style.backdrop
        }
      ></div>
      <div
        className={
          props.image ? `${style.frame} ${style.visible}` : style.frame
        }
      >
        <img className={style.img} src={props.image} />
      </div>
    </React.Fragment>
  );
};

export default GalleryModal;
