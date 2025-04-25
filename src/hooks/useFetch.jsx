import React, { useCallback, useState } from 'react'

const useFetch = () => {
      const [data, setData] = useState(null)
      const [loading, setLoading] = useState(false)
      const [error, setError] = useState(null)

    const request = useCallback(async (url)=>{
        let response;
        let json;

        try{
            setLoading(true)
            response = await fetch(url)
            json = await response.json()

            if(!response.ok) throw new Error(json.message)
        }catch(err){
            setError(err)
        }
        finally{
            setLoading(false)
            setData(json)
            return{
                json, response
            }
        }
    }, [])

  return {
    request,
    data,
    loading, 
    error
  }
}

export default useFetch