import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="zoom-in-up"> Let's connect</h2>
            <p className='text-#555555 text-[18px] pt-2' data-aos="zoom-in-up">
            Send a message or request a call by completing the form.
            </p>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
                <IoMailOutline size={30} /> laibaaaimran22@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="zoom-in-up">
            <BsTelephone  size={30} /> (+92) 3182887658
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="name">Name</label>
                <input type="text"
                className='h-[40px] border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none p-2'
                id='name'/>
            </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="email">Email</label>
                <input type="text"
                className="h-[40px] border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none p-2"
                id='email'/>
                </div>
            <div className='flex flex-col gap-1' data-aos="zoom-in-up">
                <label htmlFor="msg">Message</label>
                <textarea
                className="border-2 border-gray-300 rounded-md focus:border-indigo-500 focus:outline-none p-2"
                id='msg' rows={8}>
                    </textarea>
            </div>
            <button className="bg-teal-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-teal-600 transition duration-300">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact


