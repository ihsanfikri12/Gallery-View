import style from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={style.button} type={props.type}>
      {props.children}
    </button>
  );
};

export default Button;
