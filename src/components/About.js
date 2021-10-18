import React from 'react'

export default function About() {
  return (
    <div className="lg:px-14">
       
       <div className=" flex flex-wrap pt-16 ">
          <div className="w-full ml-auto mr-auto ">
            <h2 className="font-extrabold px-4 text-4xl lg:text-6xl lg:text-justify text-black">
           People you already trust 
            </h2>
            <p className="font-normal leading-normal break-words lg:w-3/4 text-lg lg:text-justify pt-4 px-4 text-gray-500">
            Reconnection and networking is the bedrock of personal and collective development.
            As such, the leadership of the OMSU 2013 year group has instituted this very resourceful platform to help us reconnect,
            brainstorm, share ideas and have fun.
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap pt-14 ">

          <div className="w-full lg:w-1/2 ml-auto mr-auto px-4">
            <div className="flex  justify-between">
                <div className="text-gray-100 mt-3 p-3 text-center inline-flex items-center justify-center w-14 h-14 mr-5  shadow-lg rounded-md bg-green">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <div>
                  <h2 className="font-bold text-black leading-relaxed text-3xl">Connect with old friends</h2>
                  <p className="pt-2 font-medium text-lg text-gray-500 mb-16">
                  Are you interested in reconnecting with old friends? 
                  Get interactive now
                  </p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 ml-auto mr-auto px-4">
          <div className="flex  justify-between">
            <div className="text-gray-100 mt-3 p-3 text-center inline-flex items-center justify-center w-14 h-14 mr-5  shadow-lg rounded-md bg-green">
                  <i className="fas fa-calendar-week text-2xl"></i>
                </div>
                <div>
                  <h2 className="font-bold text-black leading-relaxed text-3xl">Find events near you</h2>
                  <p className="pt-2 font-medium text-lg text-gray-500">
                  There are various events going on throughout the year. Keep up to date to discover events close to you
                  </p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 ml-auto mr-auto px-4">
          <div className="flex  justify-between">
            <div className="text-gray-100 mt-3 p-3 text-center inline-flex items-center justify-center w-14 h-14 mr-5  shadow-lg rounded-md bg-green">
                  <i className="fas fa-handshake text-xl"></i>
                </div>
                <div>
                  <h2 className="font-bold text-black leading-relaxed text-3xl">Collaborate on projects</h2>
                  <p className="pt-2 font-medium text-lg text-gray-500">
                  Join hands with other colleagues to undertake and execute projects. Also, the doors are open to business collaborations.
                  </p>
                </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 ml-auto mr-auto px-4">
          <div className="flex  justify-between">
            <div className="text-gray-100 mt-3 p-3 text-center inline-flex items-center justify-center w-14 h-14 mr-5  shadow-lg rounded-md bg-green">
                  <i className="fas fa-life-ring text-2xl"></i>
                </div>
                <div>
                  <h2 className="font-bold text-black leading-relaxed text-3xl">Support the Alma mata</h2>
                  <p className="pt-2 font-medium text-lg text-gray-500">
                  Your financial donation can help address the current needs of the Alma Mata.
                  You can also volunteer for resource oriented initiatives. 
                  </p>
                </div>
            </div>
          </div>

        </div>
    </div>
  )
}
