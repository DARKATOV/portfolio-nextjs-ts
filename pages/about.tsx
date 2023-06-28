import styles from '@/styles.module.css'

export default function About() {
  return (
    <main className={`container ${styles.containerCustom}`}>
      <h2>Florentino Jose Carrera Gaspar</h2>

      <p className={styles.paragraph}>
        Santiago de Compostela, España | +34 624429291
      </p>
      <p className={styles.paragraph}>
        florentinocarrera44@gmail.com | https://github.com/tinocarrera
      </p>

      <hr />

      <p className={styles.paragraph}>
        Conocimiento sólido en desarrollo frontend con <b>JavaScript</b>, <b>HTML</b>, y <b>CSS</b>.
      </p>
      <p className={styles.paragraph}>
        Experiencia en desarrollo web y móvil con <b>React</b>, <b>Angular</b> y <b>Flutter</b>.
      </p>
      <p className={styles.paragraph}>
        Experiencia en desarrollos multifuncionales con <b>Python</b>.
      </p>
      <p className={styles.paragraph}>
        Entendimiento de los principios de diseño, UI/UX y diseño responsive.
      </p>
      <p className={styles.paragraph}>
        Actitud positiva y buena ética de trabajo, en busca de buenos resultados, manteniendo un enfoque en el rendimiento y calidad del código.
      </p>
    </main>
  )
}
