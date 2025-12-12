import React from 'react'

const Card = (props) => {
  return (
    <div className="relative h-120 w-65 rounded-3xl overflow-hidden">
  <img
    src={props.link}
    alt="Customer satisfaction background"
    className="h-full w-full object-cover blur-xs"
  />
  <div className="absolute top-3 left-3 bg-gray-100 rounded-2xl px-3 py-1 flex items-center justify-center">
    <h1 className="text-2xl font-mono font-bold">{props.number}</h1>
  </div>
  <div className="absolute bottom-16 left-0 right-0 px-4">
    <h1 className="font-mono text-xl font-bold text-white">
      {props.content}
    </h1>
  </div>
  <div className="absolute bottom-4 pl-4">
    <button className="rounded-2xl font-extrabold font-serif bg-blue-600 px-6 py-2 text-white text-xl shadow-lg hover:bg-blue-700 transition">
      {props.btn}
    </button>
  </div>
</div>

  )
}

export default Card