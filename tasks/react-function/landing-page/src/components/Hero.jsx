
import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroContent}>
        <h1>
          Build Your Future With Technology
        </h1>

        <p>
          We provide innovative digital solutions
          to help businesses grow and succeed.
        </p>

        <button>Explore Our Services</button>
      </div>
    </section>
  );
}

export default Hero;
