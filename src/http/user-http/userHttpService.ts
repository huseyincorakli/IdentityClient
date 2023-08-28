import { User } from "../../entity/user";
import { MessageType, Position, ToastifyService } from "../../services/common/CustomToastifyService";
import { HttpClientService } from "../httpClientService"
import jwt_decode from "jwt-decode";


export const UserHttpService={
    async login(user:User,callBack?:()=>void){
        await HttpClientService.post({
            controller:'Auth',action:'Login'
        },user).then(response=>{
            if (response.status==200) {
                ToastifyService.notfy(`Giriş Başarılı`,MessageType.Success,{position:Position.TopRight})
                localStorage.setItem('token',response.data.token.accessToken)
                localStorage.setItem('expiration',response.data.token.expiration)
                const currentTimestamp = Date.now();
                const currentDate = new Date(currentTimestamp);
                console.log(currentDate);
                
                
            }
        }).catch(err=>{
            ToastifyService.notfy(`${err.response.status}`,MessageType.Error,{position:Position.BottomRight})
           
            
        })
        if (callBack!=undefined) {
            callBack();
        }
    }
}