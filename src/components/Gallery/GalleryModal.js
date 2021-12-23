import React from "react";
import ReactDom from "react-dom";

import style from "./GalleryModal.module.css";

const Backdrop = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`${style.backdrop} ${props.image ? style.visible : ""}`}
    ></div>
  );
};

const Overlay = (props) => {
  return (
    <div className={`${style.frame} ${props.image ? style.visible : ""}`}>
      <img className={style.img} src={props.image} />
    </div>
  );
};

const GalleryModal = (props) => {
  const removeModalHandler = (event) => {
    if (event.key && event.key !== "Escape") return;

    props.removeImage();
  };

  window.addEventListener("keydown", removeModalHandler);

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop image={props.image} onClick={removeModalHandler} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDom.createPortal(
        <Overlay image={props.image} />,
        document.getElementById("overlay-root")
      )}

      {/* <Backdrop image={props.image} onClick={removeModalHandler} />
      <Overlay image={props.image} /> */}
    </React.Fragment>
  );
};

export default GalleryModal;
