import { useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import unplash from "../../api/unsplash";

import style from "./GallerySearch.module.css";
import { ReactComponent as Logo } from "./search-outline.svg";

const GallerySearch = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const addInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitInputHandler = async (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    input.value = "";
    input.blur();

    const image = await unplash.get("/search/photos", {
      params: {
        query: searchInput,
        per_page: 9,
      },
    });

    const { results } = image.data;

    if (results.length !== 0) {
      props.addImage(results);
    }

    setSearchInput("");
  };

  return (
    <div className={style.search}>
      <form onSubmit={submitInputHandler} className={style.form}>
        <Input
          type="search"
          value={searchInput}
          changeHandler={addInputHandler}
        />

        <Button type="submit">
          <Logo className={style.icon} />
        </Button>
      </form>
    </div>
  );
};

export default GallerySearch;
