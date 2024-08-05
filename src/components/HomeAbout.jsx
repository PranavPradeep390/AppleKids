import React from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/images/svg-element-9.svg'
import kids from '../assets/images/dr3.jpg'

function HomeAbout() {
  return (
    <>

<div className='min-h-[400px] grid lg:grid-cols-2 mb-4  overflow-x-hidden' >


        <div className='flex flex-col justify-center sm:items-start items-center gap-6 p-4 sm:ml-[200px]  '>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold  font-fredoka  '>Education <br />through play!</h1>
                <p className='text-base sm:text-lg md:text-xl font-league-spartan w-[300px] sm:w-[350px] sm:p-0 p-4  '>
                Stress free, child centred and holistic education to all students without compromising on quality and helps each child to develop one’s innate talents and abilities. We, Apple Kindergarten, family believes in providing a positive and conducive environment for the growth of the child. The back bone and support system in our school is the faculty. The highly qualified faculty members are extremely well-versed in the up to date methodologies that form an integral feature of education system.
  </p>
            <Link to='/about' >
            <button className='bg-[#E21D26] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg'>
                About Us
            </button>
            </Link>
           
        </div>
        


        <div className='flex items-center lg:justify-start  justify-center bg-no-repeat bg-right-bottom' style={{backgroundImage:`url(${bg})`,backgroundSize:'600px 400px'}} >
        <img
            // src='https://images.pexels.com/photos/8363027/pexels-photo-8363027.jpeg?auto=compress&cs=tinysrgb&w=600'
            src={kids}
            alt='kids pic'
            className=' sm:w-2/3  sm:h-80 w-64  rounded-3xl '
        />
        
        
         </div>


       
    </div>
    </>
  )
}

export default HomeAbout