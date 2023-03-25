import React, { useState ,useEffect} from 'react'

import SingleCharacter from './SingleCharacter'
import axios from 'axios'

export default function Disney() {
    const [characters, setcharacters] = useState([])
const [search, setsearch] = useState("") 
const [filtered, setfiltered] = useState([])
    useEffect(() => {
    getdata()
    }, []);

    const getdata=async()=>{
const {data}=await axios.get('https://api.disneyapi.dev/characters')
console.log(data);
setcharacters(data.data);

setfiltered(data.data)
    }
    function compare(a,b) {
       
            if(a.name>b.name){return 1;}

            else{
                return -1;
            }
            
        
    }

    const sortit=()=>{
let newarray =characters?.sort(compare)
setfiltered(newarray);

    }

    const onsearch=()=>{

        if (search == '') {
            setfiltered(characters)
        }
       
        let filter=characters?.filter((item)=> item?.name.toLowerCase().includes(search.toLowerCase()))
              console.log(filter);
        setfiltered(filter);
        //setcharacters(filtered)
    }
  return (
    <>
    <h1 className='font-bold text-xl mx-4 mt-2'>Disney character</h1>
   

<div className='flex justify-center'> <input type="search" onChange={(e)=>{setsearch(e.target.value)}} placeholder="search" className='px-4 py-2 w-1/2 border border-blue-400'/>
    <button className='px-4 py-2 text-white bg-blue-500' onClick={onsearch} >search</button></div>
    <button className='px-4 py-2 text-white bg-blue-500 flex justify-center mx-24' onClick={sortit} >sort</button>
    <div className='border border-gray-400 flex flex-wrap rounded-md m-6 p-6 '>


{filtered?.map((item)=>{
return(
<SingleCharacter name={item?.name} image={item?.imageUrl} key={item._id} tv={item?.tvShows} video={item?.videoGames}/>
)

})}


    </div>
    </>
  )
}
