import GallerySearch from "./components/Gallery/GallerySearch";
import GalleryList from "./components/Gallery/GalleryList";
import GalleryModal from "./components/Gallery/GalleryModal";
import GalleryLoad from "./components/Gallery/GalleryLoad";

import getImage from "./components/helpers/getImage";

import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [inputSearch, setInputSearch] = useState("");
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [activeImage, setActiveImage] = useState("");

  const addImage = useCallback(async function (input) {
    cleanState();

    const { totalPages, results } = await getImage(input, page);

    setImage(results);
    setInputSearch(input);
    setTotalPage(totalPages);
  }, []);

  const onClickHandler = (imageUrl) => setActiveImage(imageUrl);

  const removeActiveImage = () => setActiveImage("");

  function updateImage() {
    setPage((currValue) => currValue + 1);
  }

  function cleanState() {
    setImage([]);
    setPage(1);
    setTotalPage(0);
  }

  useEffect(() => {
    addImage("book");
  }, [addImage]);

  useEffect(() => {
    const image = async () => {
      const { results } = await getImage(inputSearch, page + 1);
      setImage((currImage) => [...currImage, ...results]);
    };

    image();
  }, [page]);

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
