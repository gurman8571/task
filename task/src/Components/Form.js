import React, { useState } from 'react'
import axios from 'axios'

export default function Form() {

const [name, setname] = useState("")
const [email, setemail] = useState("")
const [phone, setphone] = useState("")

const HandleSubmit=async(e)=>{


e.preventDefault();

if (!email || !phone || !name) {
alert("All feilds are mandatory");    
}




const data=await axios.get(`https://test-api-v3.myways.ai/user?email=${email}`)
if (data.status === 404) {
    alert("Success user found")
} else {
await axios.post(`https://test-api-v3.myways.ai/user`,{
name:name,
email:email,
phone:phone,

 })
 alert("user created");
}


 /*
 console.log(res);*/
}


  return (
    <div className='mt-24 flex justify-center'>


<form className='flex flex-col border border-gray-200  px-20 py-8 mx-6 px-2 my-8 rounded-md' onSubmit={HandleSubmit}>
<h1 className='text-2xl font-bold mx-8 my-4 ' >Enter details</h1>
<input type="text"   onChange={(e)=>{setname(e.target.value)}} placeholder="enter name" className='mx-4 px-12 py-4 my-2  w-full border border-blue-400 shadow-sm rounded-md'/>
<input type="email"  onChange={(e)=>{setemail(e.target.value)}} placeholder="Enter email" className='mx-4 px-12 py-4 my-2  w-full border border-blue-400 shadow-sm rounded-md'/>
<input type="tel"    onChange={(e)=>{setphone(e.target.value)}} placeholder="Enter Phone" className='mx-4 px-12 py-4 my-2  w-full border border-blue-400 shadow-sm rounded-md'/>


<button type="submit" className='px-4 py-2 bg-blue-600 mx-4 my-2 mb-12 w-full text-white'> Add </button>
</form>

    </div>
  )
}
