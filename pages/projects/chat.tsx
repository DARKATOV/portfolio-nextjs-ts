import { useState } from 'react'
import Title from '@/components/Title'
import { Message } from '@/interfaces'

type Data = {
  id: number
  prompt: string
  message: Message
}

let messageId = 0

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

      if (res.ok) {
        const message = await res.json()
        setData([
          { id: messageId++, prompt: prompt, message: message },
          ...data,
        ])
        setPrompt("")
      } else {
        console.log(await res.json())
      }
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
            maxLength={100}
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

      {data.map(d => (
        <div className="mb-3" key={d.id}>
          <textarea
            className="form-control mb-2"
            value={d.prompt}
            rows={2}
            readOnly>
          </textarea>

          <textarea
            className="form-control"
            value={d.message.content}
            rows={5}
            readOnly>
          </textarea>
        </div>
      ))}
    </main>
  )
}
