import { Product } from "../../entity/product"
import { MessageType, Position, ToastifyService } from "../../services/common/CustomToastifyService";
import { HttpClientService } from "../httpClientService"
interface Response<T> {
    data:Data<T>;
    status:number;
  }
  interface Data<T> {
    products:T[]
  }
export const productHttpService={
    
   async read(  setState:React.Dispatch<React.SetStateAction<Product[]>>,callBack?:()=>void){
       await HttpClientService.get<Response<Product>>({
            controller:'product'
        }).then(response=>{
            setState(response.data.products)
        }).catch(err=>{
            return err
        })
        if(callBack!=undefined){
            callBack();
        }
    },
    async create(entity:Product,callBack?:()=>void){
        await HttpClientService.post<Response<Product>>({
        controller:'product'
        },entity).then(response=>{
            if (response) {
                if (response.status==201) {
                    ToastifyService.notfy('Ürün eklendi!',MessageType.Success,{position:Position.TopRight})
                }
                
            }
            return response
        }).catch(err=>{
            return err;
        })
        if (callBack!= undefined) {
            callBack();
        }
        
    }
}