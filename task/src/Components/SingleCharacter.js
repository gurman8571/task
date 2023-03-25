import React from 'react'

export default function SingleCharacter({name,image,tv,video}) {
  return (
    <div className="p-4 md:w-1/3">
    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
      <img
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={image}
        alt="blog"
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
        
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
        {name}
        </h1>
        <p className="leading-relaxed mb-3">
        <span className='px-4 font-bold'>Tv shows:</span> {
tv.length>0?tv?.map((item,i)=>{return(<>
<span  className='' key={i}>{item} {i+1 !== tv.length? ',':''}</span>
</>)})

:<span className=''> no shows</span>}
        </p>
        <p className="leading-relaxed mb-3">
        <span className='px-4 font-bold'>Video games:</span> {
video.length>0?video?.map((item,i)=>{return(<>
<span  className='' key={i}>{item} {i+1 !== video.length? ',':''} </span>
</>)})

:<span className=''> no Game</span>}
        </p>
      </div>
    </div>
  </div>
  )
}
