
export function DATA_POST(route, body){
    return {
        url: 'http://26.252.150.176:3001' + route,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        }
    }
}
//https://xisdahora.up.railway.app
// http://26.252.150.176:3001/

export function GET_TOKEN(token){
    return {
        url: 'https://xisdahora.up.railway.app',
        options: {
            method: 'GET',
            headers:{
                'Authorization' : 'Bearer' + token
            }
        }
    }
}