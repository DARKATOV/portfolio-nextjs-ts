import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor ingresa un nombre para este producto'],
    maxlength: [60, 'El nombre no puede ser de más de 60 caracteres'],
  },
  price: {
    type: Number,
    required: [true, 'Por favor ingresa un precio para este producto'],
    maxlength: [10, 'El precio no puede ser de más de 10 números'],
  }
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)
