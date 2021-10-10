import React from 'react'
import NavBar from './shared/NavBar'



import Events from './Events'
import About from './About'
import Contact from './Contact'
import JoinUs from './JoinUs'
import WhoJoin from './WhoJoin'
import { people } from '../data/People'
import { endPoints } from '../constants/EndPointConstant'
import { events } from '../data/Event'


function Home() {
  return (
    <main>
      <section className="bg-mawuli-image bg-no-repeat bg-local " style={{ minHeight:'90vh'}}>
      <NavBar/>

        <div className="container mx-auto ">

          <div className="flex flex-wrap pt-16 lg:pb-32">
            <div className="w-full ml-auto mr-auto pt-20 lg:pt-32 text-center px-4">

            <h1 className="capitalize text-4xl lg:text-7xl font-bold text-gray-100">where haviwo connect !!</h1>

            <p className="text-gray-100 lg:text-center font-bold text-lg leading-normal pt-4 lg:px-56">
            This is the official platform for old Mawulians from the 2013 batch. The goal is to connect with each other  , collaborate on projects and organize events.
            </p>

            <div className="justify-center mt-16">
            <a href={endPoints.GOOGLE_FORM_URL} target="blank" className="font-bold text-2xl mt-10 px-12 py-3  capitalize bg-yellow border border-yellow rounded-lg text-green ">
              <span>join now</span>
            </a>
            </div>

            </div>
          </div>

        </div>
        
      </section>
      <section className="container mx-auto -mt-1 lg:mt-0" id="about">
       <About/>

      </section>

      <section className="mt-14 bg-gray-100" id="events">

          <Events events={events}/>
        
      </section>

      <section className="mt-10">
       <WhoJoin people={people}/>
      </section>

      <section className="bg-gray-100 mt-16">
       <JoinUs/>
      </section>

      <section className="bg-black" id="contact">
        <Contact/>
      </section>
    </main>
  )
}

export default Home
