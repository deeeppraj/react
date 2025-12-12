import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <div className='post'>
            <div className='logo'>
                <img src = {props.logo} alt="logo" />
                <div className='save'>
                    <p>Save</p>

                </div>
            </div>

            <div className='content'>
                <div className='name'>
                    <h3>{props.name}</h3>
                    <p>{props.date}</p>
                </div>

                <h1>{props.role}r</h1>
                <div className='skill'>
                    <button> {props.tag1}</button>
                    <button>{props.tag2}</button>

                </div>
                
            </div>


        </div>
        <div className='apply'>
            <div className='salary'>
                <div className='a'><h1>{props.rate}</h1>
                <p>{props.location}</p></div>
                <div className='b'><button>Apply Now</button></div>
                
            </div>
        </div>


    </div>
  )
}

export default Card