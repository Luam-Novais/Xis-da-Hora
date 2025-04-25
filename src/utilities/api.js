import { urlProd, urlTest } from "./urls"


export function DATA_POST(route, body){
    return {
        url: urlProd + route,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        }
    }
}

export function GET_TOKEN(token){
    return {
        url: urlProd,
        options: {
            method: 'GET',
            headers:{
                'Authorization' : 'Bearer' + token
            }
        }
    }
}