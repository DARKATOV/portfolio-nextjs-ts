import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '@/components/Form'
import styles from '@/styles/App.module.css'
import Title from '@/components/Title'
import { Product, ResponseError } from '@/interfaces'

const fetcher = async (url: string) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}

export default function EditProduct() {
  const router = useRouter()
  const { id } = router.query
  const {
    data: product,
    error,
    isLoading,
  } = useSWR<Product, ResponseError>(id ? `/api/products/${id}` : null, fetcher)

  if (error) return (
    <main className="container">
      <Title text="Editar producto" />

      <h3>Hubo un error</h3>
    </main>
  )

  if (isLoading) return (
    <main className="container">
      <Title text="Editar producto" />

      <div className={styles.loader}></div>
    </main>
  )

  if (!product) return (
    <main className="container">
      <Title text="Editar producto" />
    </main>
  )

  const productForm = {
    name: product.name,
    price: product.price,
  }

  return <Form
    formId="edit-product-form"
    productForm={productForm}
    forNewProduct={false}
  />
}
