import React from 'react'

function WhoJoin(props) {
  const people = props.people
  return (
    <div className="lg:px-14">
       <h3 className="capitalize text-center text-4xl lg:text-6xl font-extrabold ">See who joined</h3>
        <p className="text-center break-words pt-3 font-bold text-lg text-gray-600">
          Over <span className="text-green"> 100 + Mawulians</span> have joined the OMSU 13 network. <br/> It will be nice to see you too , tap on the plus sign to join us now!
        </p>

        <div className="container mx-auto flex justify-center flex-wrap pt-10 px-14 ">
          {
            people?people.map((item)=>
            <div className="-ml-3 -mt-2 lg:-mt-4" key={item.id}>
            <img src={item.image} alt="" className="rounded-full  border-2 border-yellow h-14 w-14 lg:h-28 lg:w-28" />
            </div>
            ):""
          }
           
        </div>
    </div>
  )
}

export default WhoJoin
