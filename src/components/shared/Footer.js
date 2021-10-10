import React from 'react'
import { endPoints } from '../../constants/EndPointConstant'

export default function Footer() {
  return (
    <>
       <div className="flex justify-center pt-10 pb-10">
        <a href={endPoints.TWITTER_URL} target="blank" className="text-yellow font-bold mr-2 p-3" type="button">
            <i className="flex fab fa-twitter-square fa-2x"></i>
          </a>

          <a href={endPoints.FACEBOOK_URL} target="blank" className="text-yellow font-bold mr-2 p-3" type="button">
            <i className="flex fab fa-facebook-square fa-2x"></i>
          </a>
          
          <a href={endPoints.INSTAGRAM_URL} target="blank" className=" text-yellow font-bold mr-2 p-3" type="button">
            <i className="flex fab fa-instagram fa-2x"></i>
          </a>
 
        </div>
    </>
  )
}
