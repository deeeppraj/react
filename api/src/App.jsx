import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setdata] = useState([])  // declared as a empty array

  async function getData() {
    const url = "https://picsum.photos/v2/list"
    const response = await axios.get(url)
    setdata(response.data)
  }



  return (
    <div>
      <button className='btn' onClick={getData}>
        Get Data
      </button>

      <button className='btn' 
      onClick={() =>{
        console.log(data)
      }}
      
      >
        click  me 
      </button>


    </div>
  )
}

export default App