import { useEffect, useState } from 'react'
import LoadingProducts from '../components/LoadingProducts'
import { Product } from '../../entity/product'
import { productHttpService } from '../../http/product-http/productHttpService'

const Products = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    productHttpService.read(setProducts, () => {
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <LoadingProducts />
  }
  return (
    <div className='grid mx-2 my-2 grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
      {products.length > 0 &&
        products.map(product => (
          <div
            key={product.id}
            className='h-32 mt-1 mb-1 rounded-lg bg-gray-100 shadow-md'
          >
            <div className='p-2'>
              <p>Name: {product.productName}</p>
              <br />
              <p>Stock: {product.stock}</p>
              <br />
              <p>Price: {product.price} $</p>
            </div>
          </div>
        ))}
    </div>
  )
}

{
  /* <div className='h-32 mt-1 mb-1 rounded-lg bg-gray-100'></div> */
}

export default Products
