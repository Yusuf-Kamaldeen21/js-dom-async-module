
import styles from "../styles/Services.module.css";

function Services() {
  const services = [
    {
      title: "Web Development",
      description: "We build modern and responsive websites."
    },
    {
      title: "UI/UX Design",
      description: "We create beautiful user experiences."
    },
    {
      title: "Digital Solutions",
      description: "We help businesses grow through technology."
    }
  ];

  return (
    <section className={styles.services} id="services">
      <h2>Our Services</h2>

      <div className={styles.serviceContainer}>
        {services.map((service, index) => (
          <div className={styles.card} key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
