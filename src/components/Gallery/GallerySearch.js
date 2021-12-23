import { useRef, useState } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";

import style from "./GallerySearch.module.css";
import { ReactComponent as Logo } from "./search-outline.svg";

const GallerySearch = (props) => {
  const data = useRef();
  const [searchInput, setSearchInput] = useState("");

  const addInputHandler = (event) => {
    setSearchInput(event.target.value);
  };

  const submitInputHandler = async (event) => {
    event.preventDefault();

    const input = event.target.querySelector("input");
    input.value = "";
    input.blur();

    props.addImage(searchInput);
    setSearchInput("");
  };

  // console.log(getComputedStyle(data.current).width);

  return (
    <div ref={data} className={style.search}>
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
