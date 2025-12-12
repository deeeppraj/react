import React from 'react'

function Photocard(props) {
  return (
    <div className='Parent bg-yellow-50 h-60 w-60 rounded-xl text-white'>
        <img src={props.link} alt="image"
        className='h-full w-full p-1 rounded-xl'/>

        <h1 className='font-bold font-mono pt-1.5 text-center italic'>
            By- {props.author}</h1>
        
    </div>
  )
}

export default Photocard