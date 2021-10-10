import React from 'react'
import logo from '../assets/mawulilogo.svg'
import Footer from './shared/Footer'

function Contact() {
  return (
    <>
      <div className=" flex justify-center pt-14">
            <img src={logo} alt=""/>
        </div>
        
        <div className="flex justify-center pt-10">
        <p className="text-center text-gray-100 lg:w-2/4 px-4">
        This is the official platform for old Mawulians from the 2013 batch. The goal is to connect with each other  , collaborate on projects and organize events.
        </p>
        </div>

       <Footer/>
    </>
  )
}

export default Contact
