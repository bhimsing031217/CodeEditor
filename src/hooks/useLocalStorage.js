import React, {useEffect, useState} from 'react'

const PREFIX ='codepen-clone-'

export default function useLocalStorage(key, initialValue) {
    const prefixedkey =PREFIX + key

    const [value, setValue] = useState(()=>{
        const jasonValue = localStorage.getItem(prefixedkey)

        if (jasonValue != null) return JSON.parse(jasonValue)

        if (typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(() =>{
        localStorage.setItem(prefixedkey, JSON.stringify(value))
    }, [prefixedkey, value])
    
    
    return [value, setValue]
        
   
  
}
