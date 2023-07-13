import Link from 'next/link'

export default function Home() {
  return (
    <main className="container">
      <h2 className="mb-4">Bienvenido(a)</h2>

      <div className="w-50">
        <p>Gracias por tomarte unos minutos de tu tiempo para visitar mi portafolio web.</p>

        <p>Este es un desarrollo realizado con la tecnología de <b>Next.js</b>,
          el cual es un framework que permite crear aplicaciones web
          full-stack mediante el uso de los últimos features de <b>React</b>.
        </p>

        <p>Visita la pantalla de <b><Link href="/projects">Proyectos</Link></b> para explorar más por esta web.</p>
      </div>
    </main>
  )
}
