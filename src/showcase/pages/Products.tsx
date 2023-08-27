import { useEffect, useState } from "react"
import LoadingProducts from "../components/LoadingProducts";

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading,setLoading]=useState<boolean>(true);
  useEffect(() => {
    fetch('https://localhost:7194/api/Product')
      .then(response => response.json())
      .then((data: { products: Product[] }) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);
  if (loading) {
   return <LoadingProducts/>
  }
  return (
    <div className='grid mx-2 my-2 grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8'>
      
      {
        products.length>0 && products.map((product)=>(
          <div key={product.id} className='h-32 mt-1 mb-1 rounded-lg bg-gray-100 shadow-md'>
        <div className="p-2">
        <p>Name: {product.productName}</p>
        <br />
        <p>Stock: {product.stock}</p>
        <br />
        <p>Price: {product.price} $</p>
        </div>
      </div>
        ))
      }
    </div>
  )
}

{/* <div className='h-32 mt-1 mb-1 rounded-lg bg-gray-100'></div> */}

export default Products
