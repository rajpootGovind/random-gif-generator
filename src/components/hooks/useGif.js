
import React, { useEffect, useState } from "react"
    import axios from "axios";


function useGif(tag) {

          const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
          const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        
    
        const[gif, setGif] =useState("")
    
        const[loading, setLoading] = useState('false')
        
        async function fetchData(){
            setLoading(true)
      
            // we used axios in place of fetch
            //remove one data from output by object destructuring
            const {data} =await axios.get(tag? (`${url}&tag=${tag}`):(url));
             
            //image source
            const imageSources = data.data.images.downsized_large.url;
            console.log(imageSources)
            setGif(imageSources)
            setLoading(false)
        }
    
        useEffect(()=>{
            fetchData()
        },[])
    
       return{gif, loading, fetchData}
}

export default useGif