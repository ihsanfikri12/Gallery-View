import GalleryItem from "./GalleryItem";

import style from "./GalleryList.module.css";

const GalleryList = (props) => {
  const listGallery = () => {
    return props.image.map((value, index) => (
      <GalleryItem key={index} onClick={props.onClick} url={value.urls} />
    ));
  };

  // console.log(listGallery());

  return <div className={style.list}>{listGallery()}</div>;
};

export default GalleryList;
