import logo from "../../assets/Images/BlogNestLogo.png";
import logoStyles from "./logo.module.css";

function Logo() {
  return (
    <div id={logoStyles.logo}>
      <img src={logo} alt='BlogNest Logo' />
    </div>
  );
}

export default Logo;
