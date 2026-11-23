
import styles from "../styles/Navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.logo}>Whykaybills</h2>

      <ul className={styles.navLinks}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
      </ul>

      <button className={styles.navButton}>
        Get Started
      </button>
    </nav>
  );
}

export default Navbar;
