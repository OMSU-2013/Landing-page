import React, {useState} from 'react'
let singleEvent
 function Events(props) {
   const events = props.events
   const[isDetail, setIsDetail] = useState(false)
   
   function getOneEvent(id){
     setIsDetail(prevIsDetail => !prevIsDetail)
     const data = events.filter(item => item.id !== "" && item.id === id)
      singleEvent = data[0].description
     
   }

   function toggleModal(){
    setIsDetail(prevIsDetail => !prevIsDetail)
    
  }

  return (
    <div className="">
       <div className="block lg:flex flex-wrap pt-14">
          <div className="w-full ml-auto mr-auto ">
            <h2 className="font-extrabold text-4xl lg:text-6xl text-center text-black">
            Featured events
            </h2>
            <p className="font-normal leading-relaxed break-words text-lg text-center pt-4 text-gray-500">
            Find upcoming programmes or events near you and join the happy family make it happen
            </p>
          </div>
        </div>
        
        <div className="block lg:flex pt-14 lg:px-16"> 

        {
          events?events.map((item)=>(
            <div className="w-full lg:w-3/4 px-5 " key={item.id}>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 rounded-lg">
               <div className="flex-auto">
                 
                   <img src={item.image} alt="" className="w-full"/>
                 
                 <div  className="px-4 pb-3">
                 <h6 className="text-xl text-gray-700 font-extrabold">{item.title}</h6>
                 <h6 className="text-gray-500 font-bold">{item.date}</h6>
 
                 <p className="mt-2 mb-2 text-gray-500">
                  {item.description.substring(0,68)}
                 </p>

                 <button onClick={()=>getOneEvent(item.id)} className="text-center text-green  text-xs ">Let me see more </button>
                 
                 </div>
               
               </div>
             </div>
           </div>
 
          )):""
         
        }
          { isDetail ? (
        
          <div
            className="px-5 justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col justify-center w-full  bg-white outline-none focus:outline-none">
              
                <div className="relative p-6 flex-auto ">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    {singleEvent}
                  </p>
                </div>
               
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={toggleModal}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
      ) : null}
  
 
        </div>
    </div>
  )
}

export default Events
