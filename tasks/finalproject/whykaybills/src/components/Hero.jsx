import styles from "../styles/Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">

      <h1>Building Digital Solutions
        For A Better Future
      </h1>

      <p>
        We help businesses grow through
        innovative technology and creative
        digital solutions.
      </p>

      <button>Explore Our Services</button>

    </section>
  );
}

export default Hero;