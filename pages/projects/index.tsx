import Card from '@/components/Card'

export default function Projects() {
  return (
    <main className="container">
      <h2 className="mb-4">Proyectos</h2>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            src={project.src}
            title={project.title}
            text={project.text}
            href={project.href}
          />
        ))}
      </div>
    </main>
  )
}

const projects = [
  {
    src: "/images/crud.jpg",
    title: "CRUD",
    text: "Este CRUD, del acrónimo en inglés Create, Read, Update and Delete, fue desarrollado con Next.js y MongoDB.",
    href: "/projects/crud",
  },
  {
    src: "/images/chat.png",
    title: "Chat",
    text: "Este es un Chat de inteligencia artificial desarrollado con Next.js y la API de OpenAI.",
    href: "/projects/chat",
  },
  {
    src: "/images/images_generator.png",
    title: "Generador de Imágenes",
    text: "Este Generador de Imágenes está desarrollado con Next.js y la API de OpenAI.",
    href: "/projects/images-generator",
  },
]
