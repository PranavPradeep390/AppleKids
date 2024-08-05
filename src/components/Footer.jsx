import React from 'react'
import {Link} from 'react-router-dom'
import bg from '../assets/images/aj1.png'
import Footertop from './Footertop'
import logo from '../assets/images/logoapp.png'

function Footer() {
 
  return (
 <>
   <Footertop/>

{/* second portion */}

        <div className=' min-h-[600px] bg-no-repeat md:bg-cover bg-contain flex justify-start items-center overflow-hidden bg-[#F87253]  ' style={{ backgroundImage: `url(${bg})` }}
        >
         <div className=' grid md:grid-cols-4  mx-auto container'>


         <div className='flex flex-col space-y-6 justify-start items-center sm:p-2 p-4 '>
               <img  src={logo} alt='logo' className='md:w-[100px] md:h-[100px] w-[50px] h-[50px]' />
      <p className="text-white text-sm sm:text-base md:text-md lg:text-lg font-league-spartan">
      Premier Montessori school offering a nurturing and dynamic environment for early childhood education. Join us at Apple Kids, where we lay the foundation for a lifetime of learning and ethical living.
      </p>
                   
                </div> 
   
             <div className='flex flex-col lg:space-y-6 space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white font-fredoka">Pages</h1>
                <Link to='/'>
                <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">Home</h3>
                </Link>
                <Link to='/about' >
                <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">About Us</h3>
                </Link>
    <Link to='/contact'>
    <h3  className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">Contact</h3>
    </Link>
    <Link  to='/events'>
    <h3 className="lg:text-lg md:text-md text-sm font-medium  cursor-pointer text-white font-league-spartan">News & Events</h3>
    </Link>
     <Link to='/gallery'>
     <h3 className="lg:text-lg md:text-md text-sm font-medium  cursor-pointer text-white font-league-spartan">Gallery</h3>
     </Link>
     
                </div>
                <div className='flex flex-col lg:space-y-6 space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white  font-fredoka">Courses</h1>
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">Daycare</h3>
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">Pre-KG</h3>
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white font-league-spartan">LKG/UKG</h3>
      <h3 className="lg:text-lg md:text-md text-sm font-medium  cursor-pointer text-white font-league-spartan">Tution(LKG to +2)</h3>
      <h3 className="lg:text-lg md:text-md text-sm font-medium  cursor-pointer text-white font-league-spartan">Handwriting Development</h3>
                </div>

                <div className='flex flex-col lg:space-y-6  space-y-3 justify-start items-center sm:p-2 p-4'>
                <h1 className="text-3xl md:text-2xl font-bold text-white  font-fredoka">Information</h1>
                <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/address.png" alt="address"/></span>
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white ml-2 font-league-spartan ">National nagar,Kallattumukku</h3>
    </div> 
    <div className="flex items-center">
      <span><img width="16" height="16" src="https://img.icons8.com/tiny-glyph/16/FFFFFF/email.png" alt="email"/></span>
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white ml-2 font-league-spartan ">Applekidskindergarten@gmail.com</h3>
    </div> 
    <div className="flex items-center">
      <h3 className="lg:text-lg md:text-md text-sm font-medium cursor-pointer text-white ml-2 font-league-spartan ">7736965145 | 8086029291 </h3>
    </div> 
    </div>
              


         </div>
        </div>

        </>    
      
  )
}

export default Footer

