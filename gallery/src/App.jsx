import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Photocard from './comp/Photocard'
import Loader from './comp/loader';


const App = () => {

  const [page, setpage] = useState(1);
  const [array, setarray] = useState([]);
  const [state, setstate] = useState("")


async function getData(e){
  const url = `https://picsum.photos/v2/list?page=${e}&limit=10`
  const response = await axios.get(url)
  setarray(response.data)
  setstate('Data')
  
}

useEffect(  
  function(){
    setarray([])
    getData(page)
  },[page]
)

  function prev(){
    if(page>1){
      setstate('')
      setpage(page-1)
    }
    
  }

  function next(){
    setstate('')
    setpage(page+1)
  }

 

  return (
    <div className='bg-black h-screen w-screen text-white pt-12 pl-12  gap-9
    flex flex-row flex-wrap justify-around pr-8'>

      {state == 'Data'
      ? array.map(function(elem){
        return <Photocard link={elem.download_url} author={elem.author} />
      }) : <Loader /> }

      <div className='flex justify-between items-center gap-12'>
        <button className='bg-yellow-700 p-2 rounded-3xl font-extrabold
        font-mono hover:bg-red-700'
        onClick={prev}
        >Previous</button>

        <button className='bg-red-700 p-2 rounded-3xl font-extrabold
        font-mono w-20 hover:bg-yellow-700' 
        onClick={next}
        >Next</button>
      </div>



      </div>

    
  )
}

export default App
