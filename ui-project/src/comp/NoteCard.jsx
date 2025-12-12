import React from 'react'

const NoteCard = (props) => {
  return (
    <div key= {props.idx} id = "card" className='bg-white h-70 w-60 rounded-xl flex flex-col justify-between  items-start border-2 border-blue-600
    overflow-y-auto
    '>
        <div className='flex  flex-col overflow-auto  pl-3'>
        <h1 className='font-serif font-extrabold pt-3 pl-3 underline'>{props.heading}</h1>

        <p className='font-mono pt-2 pl-3'>{props.content}</p>
        
        </div>
        
        <div className='pl-17 flex-col justify-end pt-2 pb-2'>
        <button 
        onClick={props.onDelete}
        className='items-end hover:bg-amber-500 h-8 w-20 text-white bg-red-600 rounded-xl px-2 pl-3font-extrabold font-mono
          '> Delete </button>
        </div>
        
        



    </div>
  )
}

export default NoteCard