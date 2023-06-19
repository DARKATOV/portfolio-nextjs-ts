import { useState } from 'react'
import { useRouter } from 'next/router'
import { mutate } from 'swr'
import { Product } from '@/interfaces'
import Title from '@/components/Title'

type Props = {
  formId: string
  productForm: Product
  forNewProduct?: boolean
}

export default function Form({ formId, productForm, forNewProduct = true }: Props) {
  const router = useRouter()
  const contentType = 'application/json'
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const [form, setForm] = useState({
    name: productForm.name,
    price: productForm.price,
  })

  const putData = async (form: any) => {
    const { id } = router.query

    try {
      const res = await fetch(`/api/products/${id}`, {
        method: 'PUT',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        const { data } = await res.json()
        mutate(`/api/products/${id}`, data, false)
        router.push('/projects/crud')
      } else {
        console.log(await res.json())
      }
    } catch (error) {
      setMessage('Error al actualizar producto')
    }
  }

  const postData = async (form: any) => {
    try {
      const res = await fetch('/api/products', {
        method: 'POST',
        headers: {
          Accept: contentType,
          'Content-Type': contentType,
        },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        router.push('/projects/crud')
      } else {
        console.log(await res.json())
      }
    } catch (error) {
      setMessage('Error al crear producto')
    }
  }

  const handleChange = (e: any) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setForm({
      ...form,
      [name]: value,
    })
  }

  const formValidate = () => {
    let err: any = {}
    if (!form.name) err.name = 'El nombre es requerido'
    if (!form.price) err.price = 'El precio es requerido'
    return err
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const errs = formValidate()
    if (Object.keys(errs).length === 0) {
      forNewProduct ? postData(form) : putData(form)
    } else {
      setErrors({ errs })
    }
  }

  return (
    <main className="container">
      <Title text={forNewProduct ? 'Crear producto' : 'Editar producto'} />

      <form id={formId} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            maxLength={20}
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete={'off'}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            autoComplete={'off'}
          />
        </div>

        <button
          type="button"
          className="btn btn-danger me-4"
          onClick={() => history.back()}>
          Cancelar
        </button>

        <button type="submit" className="btn btn-success">
          {forNewProduct ? 'Crear' : 'Guardar'}
        </button>
      </form>
      <p>{message}</p>
      <div>
        {Object.keys(errors).map((err, index) => (
          <li key={index}>{err}</li>
        ))}
      </div>
    </main>
  )
}
