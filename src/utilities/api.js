
export function DATA_POST(route, body){
    return {
        url: 'https://xisdahora.up.railway.app' + route,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(body)
        }
    }
}
// 

export function GET_TOKEN(token){
    return {
        url: '',
        options: {
            method: 'GET',
            headers:{
                'Authorization' : 'Bearer' + token
            }
        }
    }
}