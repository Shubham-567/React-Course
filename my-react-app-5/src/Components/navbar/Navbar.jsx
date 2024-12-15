import PrimaryBtn from "../button/Button.jsx";
import Logo from "../logo/Logo.jsx";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    
    <nav id={styles.navbar}>
      <Logo />

      <ul>
        <li>
          <a href='./home.html'>Home</a>
        </li>
        <li>
          <a href='./home.html'>Categories</a>
        </li>
        <li>
          <a href='home.html'>Blog Feed</a>
        </li>
        <li>
          <a href='home.html'>About Us</a>
        </li>
        <li>
          <a href='home.html'>Contact</a>
        </li>
      </ul>

      <PrimaryBtn name={"Sign Up"} />
    </nav>
  );
}
export default Navbar;
