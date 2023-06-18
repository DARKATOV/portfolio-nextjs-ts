import Form from '@/components/Form'

export default function NewProduct() {
  const productForm = {
    name: '',
    price: 0,
  }

  return <Form formId="add-product-form" productForm={productForm} />
}
