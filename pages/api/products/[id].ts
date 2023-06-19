import { NextApiResponse, NextApiRequest } from 'next'
import dbConnect from '@/lib/dbConnect'
import ProductSchema from '@/models/Product'
import type { Product, ResponseError } from '@/interfaces'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Product | ResponseError>
) {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const product = await ProductSchema.findById(id)
        if (!product) {
          return res.status(400).json({ message: 'El producto no existe.' })
        }
        res.status(200).json(product)
      } catch (error) {
        res.status(400).json({ message: 'Error al obtener producto.' })
      }
      break
    case 'PUT':
      try {
        const product = await ProductSchema.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!product) {
          return res.status(400).json({ message: 'El producto no existe.' })
        }
        res.status(200).json(product)
      } catch (error) {
        res.status(400).json({ message: 'Error al modificar producto.' })
      }
      break
    case 'DELETE':
      try {
        const deletedProduct = await ProductSchema.findByIdAndDelete(id)
        if (!deletedProduct) {
          return res.status(400).json({ message: 'El producto no existe.' })
        }
        res.status(200).json(deletedProduct)
      } catch (error) {
        res.status(400).json({ message: 'Error al eliminar producto.' })
      }
      break
    default:
      res.status(400).json({ message: 'Método no válido.' })
      break
  }
}
