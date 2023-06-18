import { NextApiResponse, NextApiRequest } from 'next'
import dbConnect from '@/lib/dbConnect'
import ProductSchema from '@/models/Product'
import type { Product, ResponseError } from '@/interfaces'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Product | ResponseError>
) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const products = await ProductSchema.find({})
        res.status(200).json(products)
      } catch (error) {
        res.status(400).json({ message: 'Error al obtener productos.' })
      }
      break
    case 'POST':
      try {
        const product = await ProductSchema.create(req.body)
        res.status(201).json(product)
      } catch (error) {
        res.status(400).json({ message: 'Error al crear producto.' })
      }
      break
    default:
      res.status(400).json({ message: 'Método no válido.' })
      break
  }
}
