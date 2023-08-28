import { useEffect, useState } from "react";
import { ProductAddModal } from "../../modal/Product/ProductAddModal"
import { ProductDeleteModal } from "../../modal/Product/DeleteProductModal";
import { Product } from "../../entity/product";
import { productHttpService } from "../../http/product-http/productHttpService";
import LoadingProductList from "../../showcase/components/LoadingProductList";

const ProductList = () => {
  const [isProductAddModalOpen, setProductAddModalOpen] = useState(false);
  const [isDeleteProductModalOpen,setIsDeleteProductModalOpen]=useState(false);
  const [products,setProducst]=useState<Product[]>([]);
  const[selectedProduct,setSelectedProduct]= useState<Product>(null);
  const [loading,setLoading]=useState(true);
 useEffect(()=>{
  productHttpService.read(setProducst,()=>{
    setLoading(false)
  })
 },[])
  

  
  const openDelete=(product)=>{
    console.log(product);
    setSelectedProduct(product)
    

    setIsDeleteProductModalOpen(true);
  }

  
  const closeDelete=()=>{ 
    setIsDeleteProductModalOpen(false);
  }
  const openProductAddModal = () => {
    setProductAddModalOpen(true);
  };

  const closeProductAddModal = () => {
    setProductAddModalOpen(false);
  };
  if (loading) {
    return <LoadingProductList/>
  }
  return (
    <div>
      <div className='overflow-x-auto'>
        <table className='min-w-full divide-y-2 divide-gray-200 bg-white text-sm'>
          <thead className='ltr:text-left rtl:text-right'>
            <tr>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Name
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Stock
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
                Price
              </th>
              <th className='whitespace-nowrap px-4 py-2 font-medium text-gray-900'>
              <a
                  onClick={openProductAddModal}
                  className='inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white hover:bg-green-700'
                >
                  Add Product
                </a>
              </th>
              <th className='px-4 py-2'></th>
            </tr>
          </thead>

          <tbody className='divide-y divide-gray-200'>
            {
              products.length>0 && products.map((product)=>(
                <tr key={product.id}>
              <td className='whitespace-nowrap px-4 py-2 font-medium text-gray-900 text-center'>
                {product.productName}
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                {product.stock}
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-gray-700 text-center'>
                ${product.price}
              </td>
              <td className='whitespace-nowrap px-4 py-2 text-center'>
                <a
                onClick={()=>{openDelete(product)}}
                  className='inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white hover:bg-red-700'
                >
                  Delete
                </a>
              </td>
            </tr>
              ))
            }
          </tbody>
        </table>
      </div>
      <ProductAddModal setProduct={setProducst} open={isProductAddModalOpen} handleClose={closeProductAddModal} />
      <ProductDeleteModal product={selectedProduct} handleClose={closeDelete} open={isDeleteProductModalOpen} />
    </div>
  )
}

export default ProductList
