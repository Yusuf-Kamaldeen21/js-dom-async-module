import styles from "../styles/Services.module.css";

function Services() {

  const services = [
    {
      title: "Web Development",
      description: "We create modern and responsive websites."
    },
    {
      title: "UI/UX Design",
      description: "We design attractive and user-friendly interfaces."
    },
    {
      title: "Digital Solutions",
      description: "We provide technology solutions for businesses."
    }
  ];

  return (
    <section className={styles.services} id="services">

      <h2>Our Services</h2>

      <div className={styles.container}>

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