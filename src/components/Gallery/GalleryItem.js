import style from "./GalleryItem.module.css";

const GalleryItem = (props) => {
  return (
    <figure className={style.item}>
      <img
        onClick={props.onClick.bind(null, props.url.regular)}
        src={props.url.small}
        className={style.img}
      />
    </figure>
  );
};

export default GalleryItem;
