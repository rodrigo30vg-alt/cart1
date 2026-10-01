import { useState } from 'react'
import camaraImg from '../assets/camara.jpg'

export const NewProduct = ({ setProducts }) => {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState('1')
  const [image, setImage] = useState('')

  const addition = (event) => {
    event.preventDefault()
    setProducts((products) => [
      ...products,
      {
        name: name.trim(),
        id: Date.now(),
        quantity: Number(quantity),
        description: description.trim(),
        image: image.trim() || camaraImg,
      },
    ])
    setName('')
    setDescription('')
    setQuantity('1')
    setImage('')
    setIsFormOpen(false)
  }

  return (
    <div>
      <button type="button" onClick={() => setIsFormOpen((open) => !open)} className="bg-cyan-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-800 transition-colors duration-200">
        Nuevo producto
      </button>
      {isFormOpen && (
        <form onSubmit={addition} className="my-4 flex max-w-md flex-col gap-3">
          <label className="flex flex-col gap-1">
            Nombre
            <input required value={name} onChange={(event) => setName(event.target.value)} className="rounded border px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            Descripción
            <textarea required value={description} onChange={(event) => setDescription(event.target.value)} className="rounded border px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            Cantidad
            <input required type="number" min="0" step="1" value={quantity} onChange={(event) => setQuantity(event.target.value)} className="rounded border px-3 py-2" />
          </label>
          <label className="flex flex-col gap-1">
            URL de imagen (opcional)
            <input type="url" value={image} onChange={(event) => setImage(event.target.value)} className="rounded border px-3 py-2" />
          </label>
          <button type="submit" className="bg-cyan-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-cyan-800 transition-colors duration-200">
            Guardar producto
          </button>
        </form>
      )}
    </div>
  )
}

