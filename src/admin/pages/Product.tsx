
import {CustomToastifyContainer,MessageType,Position,ToastifyService } from "../../services/common/CustomToastifyService";
import ProductList from "../components/ProductList"
import 'react-toastify/dist/ReactToastify.css';



const Product = () => {
 
const goster =()=>{
  ToastifyService.notfy('s',MessageType.Success,{position:Position.TopCenter})
}  
  return (
   <div>
     <div className="bg-white mt-3 p-2 rounded-lg shadow-md mx-10">
     <button onClick={goster}>Notify!</button>
      <ProductList/>

      <CustomToastifyContainer />
    </div>
   </div>
  )
}

export default Product