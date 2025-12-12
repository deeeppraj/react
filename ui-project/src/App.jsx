import React, { useState } from 'react'
import NoteCard from './comp/NoteCard'

const App = () => {

  const [title, settitle] = useState('')
  const [content, setcontent] = useState('')
  const [notes, setnotes] = useState([])

  function submit(e){
    e.preventDefault();
    console.log("Form submitted");
    const curr = {}
    curr.heading = title;
    curr.content = content;
    setnotes([...notes , curr]);
    settitle('')
    setcontent('')
  }

  function onDelete(idx){
    const current = [...notes]
    current.splice(idx,1)
    setnotes(current)

  }
  return (
    <div className='parent h-screen  w-screen bg-black p-4 flex items-center justify-between pl-40'>

      <form className='grid gap-3'
        onSubmit={(e)=>{
          submit(e)}}>
        <title className='text-blue-600 '>
          Task Planner</title>

        <h1 className='text-blue-600 font-serif font-bold text-3xl'>
          Task Planner
        </h1>

        <input type="text" 
        placeholder='Enter heading' 
        value={title}
        onChange={(elem) =>{
          settitle(elem.target.value)}}
        className='text-white font-serif font-extrabold text-xl p-3 w-90 items-center
        border-2 border-amber-50 rounded h-12' />

        <textarea placeholder='Enter your tasks...'
        value={content}
        onChange={(elem) =>{
          setcontent(elem.target.value)
        }}
        className='font-mono text-white border-2 border-amber-50 rounded w-90 h-50 p-3'
        ></textarea>

        <button
        className='bg-blue-600 h-15 rounded-xl'>
          Add task
        </button>


      </form>

      <div className='border-l-2 border-white h-screen'>
            l
      </div>

      <div className='w-1/2 h-full overflow-y-auto'>
        <h1 className='text-blue-600 font-serif font-bold text-3xl pb-9'>
            Recent Notes:
        </h1>
        
        <div className='flex gap-4 flex-wrap  '>
         {notes.map(function(e,idx){
          return <NoteCard key = {idx} heading = {e.heading} content = {e.content} onDelete = {onDelete} />
         })}

        </div>
        
      </div>


    </div>
  )
}

export default App