import Title from '@/components/Title'
import { MessageImage } from '@/interfaces'
import { useState } from 'react'

type Data = {
  prompt: string
  image: MessageImage
}

export default function ImagesGenerator() {
  const contentType = 'application/json'
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Data[]>([])

  async function createImage(e: any) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/images', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify({ prompt: prompt })
      })

      if (!res.ok) {
        throw new Error('Error al enviar mensaje')
      }

      const image = await res.json()
      setData([
        { prompt: prompt, image: image },
        ...data,
      ])
      setPrompt("")
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <main className="container">
      <Title text="Generador de imágenes" href="/projects" />

      <form onSubmit={createImage}>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={prompt}
            maxLength={1000}
            onChange={(e) => setPrompt(e.target.value)}
            rows={3}
            required>
          </textarea>
        </div>
        <div className="mb-3">
          {isLoading ? (<p>Cargando...</p>) :
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>}
        </div>
      </form>

      {data.map((item, index) => (
        <div className="row mb-3" key={index}>
          <div className="col-lg-6">
            <textarea
              className="form-control mb-2"
              value={item.prompt}
              rows={3}
              readOnly>
            </textarea>
          </div>

          <div className="col-lg-6">
            <img
              src={item.image.url}
              alt="Generator"
              width="100%"
              className="card-img-top"
            />
          </div>
        </div>
      ))}
    </main>
  )
}
