import React, { useEffect, useState } from 'react'

const useMedia = (media) => {
    const [matches, setMaches] = useState(()=>{
        const {matches} = window.matchMedia(media)
        return matches
    })
    function handleResize(){
        const {matches} = window.matchMedia(media)
        setMaches(matches)
    }
    useEffect(()=>{
        window.addEventListener('resize', handleResize )

        return()=> window.removeEventListener('resize', handleResize )
    }, [matches])
  return matches
}

export default useMedia