import GallerySearch from "./components/Gallery/GallerySearch";
import GalleryList from "./components/Gallery/GalleryList";
import GalleryModal from "./components/Gallery/GalleryModal";

import unsplash from "./api/unsplash";

import { useState } from "react";

const App = () => {
  const [image, setImage] = useState([]);
  const [activeImage, setActiveImage] = useState("");

  const onClickHandler = (imageUrl) => {
    setActiveImage(imageUrl);
  };

  const removeImageHandler = () => {
    setActiveImage("");
  };

  const addImageHandler = (image) => {
    setImage(image);
  };

  return (
    <div>
      {activeImage && (
        <GalleryModal
          removeImage={removeImageHandler}
          image={activeImage}
          activeModal={true}
        />
      )}
      <GallerySearch addImage={addImageHandler} />
      <GalleryList onClick={onClickHandler} image={image} />
    </div>
  );
};

export default App;
