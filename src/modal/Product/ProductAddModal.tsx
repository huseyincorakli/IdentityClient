import { Button } from '@mui/material'
import BaseModal from '../BaseModal'
import { useState } from 'react'
import { ProductObject } from '../../entity/productObject'
import { Product } from '../../entity/product'
import { productHttpService } from '../../http/product-http/productHttpService'

export const ProductAddModal = ({ open, handleClose, setProduct }) => {
  const [name, setName] = useState<string>()
  const [price, setPrice] = useState<number>()
  const [stock, setStock] = useState<number>()

  const handleProductAdd = () => {
    const newProduct: Product = new ProductObject()
    newProduct.productName = name
    newProduct.price = price
    newProduct.stock = stock
    productHttpService.create(newProduct, () => {
      productHttpService.read(setProduct)
      productHttpService.read(setProduct)
    })
    handleClose()
  }

  return (
    <BaseModal
      open={open}
      handleClose={handleClose}
      title='Ürün Ekle'
      content={
        <div>
          <input
            onChange={e => {
              setName(e.target.value)
            }}
            type='text'
            placeholder='Ürün Adı'
          />
          <input
            onChange={e => {
              setPrice(parseFloat(e.target.value))
            }}
            type='number'
            placeholder='Fiyat'
          />
          <input
            onChange={e => {
              setStock(parseFloat(e.target.value))
            }}
            type='number'
            placeholder='Stock'
          />
          <Button onClick={handleProductAdd}>Ekle</Button>
        </div>
      }
    />
  )
}
