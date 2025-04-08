
export function DATA_POST(route, body){
    return {
        url: 'http://26.235.226.168:3001' + route,
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