import Link from 'next/link'
import useSWR from 'swr'
import Title from '@/components/Title'
import type { Product } from '@/interfaces'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function CRUD() {
  const { data, error, isLoading } = useSWR<Product[]>(`/api/products`, fetcher)

  if (error) return (
    <main className="container">
      <Title text="CRUD" href="/projects" />

      <h3>Hubo un error</h3>
    </main>
  )

  if (isLoading) return (
    <main className="container">
      <Title text="CRUD" href="/projects" />

      <div className="loader"></div>
    </main>
  )

  if (!data) return (
    <main className="container">
      <Title text="CRUD" href="/projects" />

      <h3>No se encontraron los productos</h3>
    </main>
  )

  return (
    <main className="container">
      <Title text="CRUD" href="/projects" />

      <table className="table">
        <thead>
          <tr>
            <th>Nombre del producto</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  href={`/projects/crud/${product._id}`}
                  className="btn btn-dark me-3">
                  Ver
                </Link>

                <Link
                  href={`/projects/crud/${product._id}/edit`}
                  className="btn btn-warning">
                  Editar
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link
        href="/projects/crud/new"
        className="btn btn-success">
        Crear producto
      </Link>
    </main>
  )
}
