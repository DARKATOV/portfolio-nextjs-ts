import styles from '@/styles/App.module.css'

export default function About() {
  return (
    <main className={`container ${styles.containerCustom}`}>
      <h4>FLORENTINO JOSE CARRERA GASPAR</h4>

      <p className={styles.paragraph}>
        Santiago de Compostela, España | +34 624429291
      </p>
      <p className={styles.paragraph}>
        florentinocarrera44@gmail.com
        | <a
            href="https://github.com/tinocarrera"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/tinocarrera
          </a>
      </p>

      <hr />

      <p className={styles.paragraph}>
        Conocimiento sólido en desarrollo frontend con <b>JavaScript</b>,
        <b>HTML</b>, y <b>CSS</b>.
      </p>
      <p className={styles.paragraph}>
        Experiencia en desarrollo web y móvil con <b>React</b>, <b>Angular</b>
        y <b>Flutter</b>.
      </p>
      <p className={styles.paragraph}>
        Experiencia en desarrollos multifuncionales con <b>Python</b>.
      </p>
      <p className={styles.paragraph}>
        Entendimiento de los principios de diseño, UI/UX y diseño responsive.
      </p>
      <p className={styles.paragraph}>
        Actitud positiva y buena ética de trabajo, en busca de buenos resultados,
        manteniendo un enfoque en el rendimiento y calidad del código.
      </p>

      <hr />

      <b>DESARROLLADOR WEB</b>
      <p className={styles.paragraph}>
        KreaciaLabs | Puebla, México | Teletrabajo | 2023 - Actualidad
      </p>
      <p>
        Desarrollo y mantenimiento de web administrativa, construida con
        Angular, trabajando con los lenguajes TypeScript, HTML y CSS.
      </p>

      <b>DESARROLLADOR FULL STACK</b>
      <p className={styles.paragraph}>
        ProOil de México | Veracruz, México | Teletrabajo | 2022 - Actualidad
      </p>
      <p>
        Desarrollo de aplicación multiplataforma (para Android, IOS y Windows)
        construida con Flutter, trabajando con Dart y bases de datos SQL.
      </p>

      <b>DESARROLLADOR WEB</b>
      <p className={styles.paragraph}>
        ACALconecta | Caracas, Venezuela | Teletrabajo | 2021 - 2022
      </p>
      <p>
        Desarrollo de distintas funcionalidades web utilizando Python, HTML y
        CSS, junto con los frameworks de desarrollo Web2py y Py4web.
      </p>

      <b>TÉCNICO EN ELECTRÓNICA</b>
      <p className={styles.paragraph}>
        Corporación Paytech C.A. | Caracas, Venezuela | Presencial | 2020 - 2022
      </p>
      <p className={styles.paragraph}>
        Diseño, ensamblaje, programación e instalación de dispositivos
        electrónicos, utilizando Python como lenguaje de programación.
      </p>

      <hr />

      <b>EDUCACIÓN</b>
      <p className={styles.paragraph}>
        Técnico Superior Universitario en Tecnología Electrónica
      </p>
      <p className={styles.paragraph}>
        Universidad Simón Bolívar | Vargas, Venezuela | 2021
      </p>

      <hr />

      <b>PROYECTOS EN PARALELO</b>
      <p>
        Desarrollador voluntario de un dispositivo médico para medir hemoglobina, utilizando un System on a Chip (SoC) ESP32 y Python como lenguaje.
      </p>
    </main>
  )
}
