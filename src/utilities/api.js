
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
// https://jsonplaceholder.typicode.com/posts

export function GET_TOKEN(){
    
}