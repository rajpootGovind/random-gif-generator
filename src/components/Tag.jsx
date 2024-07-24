import React, {  useState } from "react"
// import axios from "axios";
import Spinner from "./Spinner";
import useGif from "./hooks/useGif";



export default function Tag(){

    const [tag, setTag] = useState("")

    // const[gif, setGif] =useState("")

    // const[loading, setLoading] = useState('false')
    
    // async function fetchData(){
    //     setLoading(true)
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    //     // we used axios in place of fetch
    //     //remove one data from output by object destructuring
    //     const {data} =await axios.get(url);

    //     //image source
    //     const imageSources = data.data.images.downsized_large.url;
    //     console.log(imageSources)
    //     setGif(imageSources)
    //     setLoading(false)
    // }

    // useEffect(()=>{
    //     fetchData()
    // },[])

    const { gif, loading, fetchData} = useGif(tag)

    const clickHandler =()=>{
      fetchData()
    }




   return(
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]">
        <h1 className="text-2xl font-bold underline uppercase mt-[15px]">Random {tag} Gif</h1>
       
        {
            loading?(<Spinner/>):( <img src={gif} width="450"/>)
        }
     
       <input 
       className="w-10/12  py-1 rounded-lg mb-[3px] text-center"
       onChange={(event) => {
        setTag(event.target.value)
    }}
       value={tag}/>

        <button onClick={clickHandler}
        className="w-10/12 bg-blue-100 text-lg py-1 rounded-lg mb-[20px] text-center"
        >
        Genrate
        </button>
    </div>
   )
}