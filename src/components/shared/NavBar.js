import React,{useState} from 'react'

import logo from '../../assets/mawulilogo.svg'
import { endPoints } from '../../constants/EndPointConstant'

function NavBar() {
  const[isOpen, setIsOpen] = useState(false)
  
  function toggleNavbar() {
    setIsOpen(prevIsOpen => !prevIsOpen)

  }

  return (
    <nav className=" top-0 absolute w-full flex  items-center px-2 py-3  navbar-expand-lg">

      <div className="container px-3 mx-auto flex flex-wrap items-center justify-between"> 

      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <a href=" " className="font-bold leading-relaxed inline-block whitespace-no-wrap py-6">

          <img src={logo} alt="" />

        </a>

        <button
            className="cursor-pointer text-xl leading-none px-3 py-4 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
          
            onClick={toggleNavbar}>
            <i className={isOpen?"text-green fas fa-times":"text-yellow fas fa-bars"}></i>
        </button>


      </div>

      <div className={isOpen?"flex justify-center w-full text-green rounded-md bg-green ":"lg:flex bg-gray-800 lg:bg-transparent lg:shadow-none hidden"}
          >
        
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          <li className="flex items-center">
            <a href="#home" className="text-gray-200 px-3 py-4 lg:py-2 flex items-center  capitalize font-bold">
                Home
            </a>
          </li>

          <li className="flex items-center">
            <a href="#about" className="text-gray-200 px-3 py-4 lg:py-2 flex items-center capitalize font-bold">
                About
            </a>
          </li>

          <li className="flex items-center">
            <a href="#events" className="text-gray-200 px-3 py-4 lg:py-2 flex items-center capitalize font-bold">
                Events
            </a>
          </li>

          <li className="flex items-center">
            <a href="#contact" className="text-gray-200 px-3 py-4 lg:py-2 flex items-center capitalize font-bold">
                Contact
            </a>
          </li>
        </ul>
      </div>

      

        <a href={endPoints.GOOGLE_FORM_URL} target="blank" className="
        invisible lg:visible
        font-bold text-xl  mr-3 px-11 py-3
         whitespace-no-wrap capitalize 
         bg-transparent border border-yellow 
         rounded-lg text-yellow 
         
         ">
              <span>join now</span>
        </a>
        

      </div>

    </nav>
  )
}

export default NavBar
