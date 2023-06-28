import { useState } from 'react'
import { useRouter } from 'next/router'
import { Product, ResponseError } from '@/interfaces'
import Link from 'next/link'
import useSWR from 'swr'
import Title from '@/components/Title'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function ProductPage() {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const { id } = router.query
  const {
    data: product,
    error,
    isLoading,
  } = useSWR<Product, ResponseError>(id ? `/api/products/${id}` : null, fetcher)

  const handleDelete = async () => {
    try {
      await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      })
      router.push('/projects/crud')
    } catch (error) {
      setMessage('Error al eliminar el producto.')
    }
  }

  if (error) return (
    <main className="container">
      <Title text="Producto" href="/projects/crud" />

      <h3>Hubo un error</h3>
    </main>
  )

  if (isLoading) return (
    <main className="container">
      <Title text="Producto" href="/projects/crud" />

      <div className="loader"></div>
    </main>
  )

  if (!product) return (
    <main className="container">
      <Title text="Producto" href="/projects/crud" />
    </main>
  )

  return (
    <main className="container">
      <Title text="Producto" href="/projects/crud" />

      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={product.name}
            disabled
            readOnly
            autoComplete={'off'}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            id="price"
            type="number"
            className="form-control"
            value={product.price}
            disabled
            readOnly
            autoComplete={'off'}
          />
        </div>

        <Link
          href={`/projects/crud/${product._id}/edit`}
          className="btn btn-warning me-4">
          Editar
        </Link>
        <button type="button" className="btn btn-danger" onClick={handleDelete}>
          Eliminar
        </button>
      </form>
      {message && <p>{message}</p>}
    </main>
  )
}
