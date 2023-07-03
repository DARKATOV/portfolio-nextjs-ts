import { useState } from 'react'
import Title from '@/components/Title'
import { Message } from '@/interfaces'

type Data = {
  prompt: string
  message: Message
}

export default function Chat() {
  const contentType = 'application/json'
  const [prompt, setPrompt] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState<Data[]>([])

  async function sendMessage(e: any) {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch('/api/chat', {
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

      const message = await res.json()
      setData([
        { prompt: prompt, message: message },
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
      <Title text="Chat" href="/projects" />

      <form onSubmit={sendMessage}>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Escribe un mensaje"
            maxLength={1000}
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
        <div className="mb-3" key={index}>
          <textarea
            className="form-control mb-2"
            value={item.prompt}
            rows={2}
            readOnly>
          </textarea>

          <textarea
            className="form-control"
            value={item.message.content}
            rows={5}
            readOnly>
          </textarea>
        </div>
      ))}
    </main>
  )
}
