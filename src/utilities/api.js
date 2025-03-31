
export function TOKEN_POST(route, body){
    return{
        url: 'http://26.252.150.176:3001' + route,
        options:{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }
    }
}
export function USER_GET(route, token){
    return{
        url: 'http://26.252.150.176:3001' + route,
        options:{
            method: 'GET',
            headers: {
                Authorization: 'Bearer ' + token
            }
        }
    }
}