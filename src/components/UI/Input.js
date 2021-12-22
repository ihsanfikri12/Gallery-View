import style from "./Input.module.css";

const Input = (props) => {
  return (
    <input
      autoFocus
      className={style.input}
      type={props.type}
      value={props.value}
      placeholder="Search"
      onChange={props.changeHandler}
    />
  );
};

export default Input;
