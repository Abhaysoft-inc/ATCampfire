import  { Component } from 'react'
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";



export default class Footer extends Component {
  render() {
    return (
      <>
      <div className="ft px-10 py-10 bg-[#05060e] mt-10">
        <div className="topsctn flex p-5 justify-between">
            <h1 className="w-2/5 text-white text-3xl">We help companies transform their ambitious ideas into timeless products at lightning speed</h1>
            <p className="bg-[#f53d68] px-10 py-4 h-[85px] font-[700] mr-10 outline-white hover:bg-[#cc4f6c] cursor-pointer ">LISTEN A FREE <br/> PODCAST NOW</p>
        </div>
        <hr className="mt-10 border-[#f53d68]" />
        <div className="flex justify-between mt-5 text-white">
          <p>&copy; ATCampfire | All Rights Reserved  </p>
          <ul className="flex space-x-6">
            <li className='text-[#f53d68]'><a href="">Home</a></li>
            <li className='text-[#f53d68]'><a href="">About</a></li>
            <li className='text-[#f53d68]'><a href="">Contact</a></li>
            <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaFacebook /></a></li>
            <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><BsTwitterX /></a></li>
            <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><AiFillInstagram /></a></li>
            <li className='text-[#f53d68] pt-1 w-4 h-9'><a href=""><FaLinkedin /></a></li>
          </ul>
        </div>
      </div>
      
      </>
    )
  }
}
