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
    
    read(  setState:React.Dispatch<React.SetStateAction<Product[]>>,callBack?:()=>void){
        HttpClientService.get<Response<Product>>({
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
    create(entity:Product,callBack?:()=>void){
        HttpClientService.post({
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