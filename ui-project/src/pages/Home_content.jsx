import React from 'react'
import Left from '../comp/Left'
import Card from '../comp/Card'

const cards = [
  {
    link:"https://i.pinimg.com/736x/94/b8/45/94b845821b69f9e1926e5f4fd3753c31.jpg",
    number:1,
    content:"Prime customer that have access to bank credit and are satisfied with their current product.",
    btn:"Satisfied"
  },
  {
    link:"https://i.pinimg.com/736x/6e/41/ac/6e41ac6f1b3afc59fb5d6099ce9bf374.jpg",
    number:2,
    content:"Prime customer that have access to bank credit and are not satisfied with their current product.",
    btn:"Under-served"
  },
  {
    link:"https://i.pinimg.com/1200x/51/9f/ea/519feafe09a027630ee9cf0165825b1c.jpg",
    number:3,
    content:"Customers from near prime and sub prime that have no access to bank credit.",
    btn:"Under-banked"
  }
];

const Home_content = () => {
  return (
    <div className="flex gap-6 pt-5 pt-9 justify-start">

      {/* LEFT SIDE */}
      <div className="flex-[1]">
        <Left />
      </div>

      {/* RIGHT SIDE */}
      <div className="flex-[3] flex h-120 w-full px-18 pl-9 gap-3.5 items-start justify-start">
        {cards.map((ele) => (
          <Card
            link={ele.link} 
            number={ele.number}
            content={ele.content}
            btn={ele.btn}
          />
        ))}
      </div>

    </div>
  );
};


export default Home_content