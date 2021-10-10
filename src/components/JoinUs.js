import React from 'react'
import SchoolCloth from '../assets/schoolcloth.png'
import { endPoints } from '../constants/EndPointConstant'

function JoinUs() {
  return (
    <div className="lg:px-14">
      <div className=" block lg:flex lg:px-14 lg:pb-10">

        <div className=" bg-cover h-auto bg-no-repeat lg:bg-none w-full md:w-1/2 px-4" >
          <h3 className="lg:text-justify font-extrabold text-4xl lg:text-6xl pt-16 text-black">You can join us too</h3>
          <p className="text-justify text-gray-800 lg:text-gray-500 pt-2 text-lg">
          This is the official platform for old Mawulians from the 2013 batch. The goal is to connect with each other  , collaborate on projects and organize events.
          </p>

          <div className=" flex justify-center lg:block pt-10 pb-10">
            <a href={endPoints.GOOGLE_FORM_URL} target="blank" className="font-bold text-xl px-10 py-2  capitalize bg-green border border-green rounded-lg text-white ">
              <span>join now</span>
            </a>
          </div>
        </div>
        <div className="hidden lg:inline w-full md:w-1/2 px-4" >
          <img src={SchoolCloth} alt="" className="w-full rounded-md" />
        </div>

      </div>
    </div>
  )
}

export default JoinUs
