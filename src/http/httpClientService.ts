import axios, { AxiosHeaders } from 'axios'

export const HttpClientService = {
    
    url(requestParameters: Partial<RequestParameters>): string {
        const mainUrl :string='https://localhost:7194/api';
        return `${requestParameters.baseUrl ? requestParameters.baseUrl : mainUrl}/${requestParameters.controller}${requestParameters.action ? `/${requestParameters.action}` : ""}`;
    },

    async get<T>(requestParameters: Partial<RequestParameters>, id?: string): Promise<T> {
        let url: string = '';
        if (requestParameters.fullEndPoint) {
            url = requestParameters.fullEndPoint
        }
        else {
            url = `${this.url(requestParameters)}${id ? `?id=${id}` : ''}${requestParameters.queryString ? `/${requestParameters.queryString}` : ''}`;
            return  axios.get(url, { headers: requestParameters.headers })
        }
    },
    async post<T>(requestParameters:Partial<RequestParameters>,body):Promise<T>{
        let url: string = '';
        if (requestParameters.fullEndPoint) {
            url = requestParameters.fullEndPoint
        }
        else {
            url = `${this.url(requestParameters)}${requestParameters.queryString ? `/${requestParameters.queryString}` : ''}`;
            return  axios.post(url,body, { headers: requestParameters.headers})
        }
    }
}

export class RequestParameters {
    controller?: string;
    action?: string;
    queryString?: string;
    headers?: AxiosHeaders;
    baseUrl?: string;
    fullEndPoint?: string
}