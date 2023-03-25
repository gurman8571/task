import React, { useState ,useEffect} from 'react'

import SingleCharacter from './SingleCharacter'
import axios from 'axios'
import Skeleton from './Skeleton'
export default function Disney() {
    const [characters, setcharacters] = useState([])
const [search, setsearch] = useState("") 
const [order, setorder] = useState("ASC")
const [loading, setloading] = useState(true)
const [filtered, setfiltered] = useState([])
    useEffect(() => {
        console.log('calw');
    getdata()
    }, []);

    const getdata=async()=>{
const {data}=await axios.get('https://api.disneyapi.dev/characters')

setcharacters(data.data);

setfiltered(data.data)
setloading(false)
console.log(filtered);
    }
    

    const sortit=()=>{
       
let newarray =[...filtered].sort(function(a,b) {
       
    let fa = a.name.toLowerCase(),
    fb = b.name.toLowerCase();
    

    if (fa < fb) {
        return 1;
    }
    if (fa > fb) {
        return -1;
    }
    return 0;
    



})

setfiltered(newarray);
console.log(filtered);


    }
    const sortitaesc=()=>{
       
        let newarray =[...filtered].sort(function(a,b) {
               
            let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
            
        
            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        
        
        })
        
        setfiltered(newarray);
        //console.log(filtered);
        
        
            }
    const onsearch=()=>{

        if (search == '') {
            setfiltered(characters)
        }
       
        let filter=characters?.filter((item)=> item?.name.toLowerCase().includes(search.toLowerCase()))
        //console.log(filter);
        setfiltered(filter);
        //setcharacters(filtered)
    }
  return (
    <>
    <h1 className='font-bold text-xl mx-4 mt-2'>Disney character</h1>
   

<div className='flex justify-center'> <input type="search" onChange={(e)=>{setsearch(e.target.value)}} placeholder="search" className='px-4 py-2 w-1/2 border border-blue-400'/>
    <button className='px-4 py-2 text-white bg-blue-500' onClick={onsearch} >search</button></div>
<div className='flex mt-2'>    <button className='px-4 py-2 text-white bg-blue-500 flex justify-center mx-24' onClick={sortit} >sort Desc</button>
    <button className='px-4 py-2 text-white bg-blue-500 flex justify-center mx-24' onClick={sortitaesc}>sort Aesc</button></div>
    <div className='border border-gray-400 flex flex-wrap rounded-md m-6 p-6 '>

{loading ?  <div className="flex flex-wrap">
            <div className="flex flex-wrap  ">
              {Array(15)
                .fill("")
                .map((item, index) => {
                  return <Skeleton key={index} />;
                })}
            </div>
          </div>:filtered?.map((item)=>{
return(
<SingleCharacter name={item?.name} image={item?.imageUrl} key={item._id} tv={item?.tvShows} video={item?.videoGames}/>
)

})}



    </div>
    </>
  )
}
