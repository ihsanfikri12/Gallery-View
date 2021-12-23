import GallerySearch from "./components/Gallery/GallerySearch";
import GalleryList from "./components/Gallery/GalleryList";
import GalleryModal from "./components/Gallery/GalleryModal";
import GalleryLoad from "./components/Gallery/GalleryLoad";

import getImage from "./components/helpers/getImage";

import { useState } from "react";

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  const onClickHandler = (imageUrl) => setActiveImage(imageUrl);

  const removeActiveImage = () => setActiveImage("");

  const addImage = async (input) => {
    cleanState();

    const data = await getImage(input, page);
    const { results } = data.data;

    if (results.length === 0) return;

    setImage(results);
    setInputSearch(input);
    setTotalPage(+data.data.total_pages);
  };

  const updateImage = async () => {
    console.log(page > totalPage);
    const data = await getImage(inputSearch, page + 1);
    const { results } = data.data;

    if (data.length === 0) return;

    setImage((currImage) => [...currImage, ...results]);
    setPage((currValue) => currValue + 1);
  };

  const cleanState = () => {
    setImage([]);
    setPage(1);
    setTotalPage(0);
  };

  return (
    <div>
      {activeImage && (
        <GalleryModal
          removeImage={removeActiveImage}
          image={activeImage}
          activeModal={true}
        />
      )}
      <GallerySearch addImage={addImage} />
      <GalleryList onClick={onClickHandler} image={image} />

      {totalPage <= page ? "" : <GalleryLoad updateImage={updateImage} />}
    </div>
  );
};

export default App;
