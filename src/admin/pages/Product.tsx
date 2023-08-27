import ProductList from '../components/ProductList'
import 'react-toastify/dist/ReactToastify.css'

const Product = () => {
  return (
    <div>
      <div className='bg-white mt-3 p-2 rounded-lg shadow-md mx-10'>
        <ProductList />
      </div>
    </div>
  )
}

export default Product
