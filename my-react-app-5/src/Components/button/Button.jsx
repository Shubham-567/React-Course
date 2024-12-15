import PropsType from "prop-types";
import styles from "./Button.module.css";

function Button(props) {
  return <button className={styles.primaryBtn}>{props.name}</button>;
}

Button.propsType = {
  name: PropsType.string,
};

Button.defaultProps = {
  name: "Primary Button",
};

export default Button;
