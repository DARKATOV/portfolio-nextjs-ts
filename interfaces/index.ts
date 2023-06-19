export type Product = {
  _id?: string
  name: string
  price: number
}

export type Message = {
  role: string
  content: string
}

export type ResponseError = {
  message: string
}
