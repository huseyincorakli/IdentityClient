import { User } from "../../entity/user";
import { HttpClientService } from "../httpClientService"



export const UserHttpService={
    async login(user:User){
        await HttpClientService.post({
            controller:'Auth',action:'Login'
        },user).then(response=>{
            console.log(response);
            
        })
    }
}