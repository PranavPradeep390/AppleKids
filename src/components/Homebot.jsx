import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Teachers from './Teachers';
import Homegallery from './Homegallery';


function Homebot() {
 
  return (
 <>

 <div className='  flex flex-col justify-center items-center gap-5  min-h-[500px]  p-4 bg-[#F06D4F] overflow-hidden' >
       <button className='bg-[#FEFBF2]  flex justify-center items-center text-[#38AD3D] text-[26px] font-bold py-4 px-6  h-[50px] w-[300px] font-fredoka text-center rounded-tl-[20px] rounded-br-[20px]  '>
               Our mission
             </button>   
             <p className="flex items-center sm:border-2 sm:border-white border-hidden rounded-lg p-3 mb-4 shadow-md sm:w-96 text-white w-[300px]">
          <i className="fas fa-book text-white mr-3"></i>
          Provide value-based education
        </p>
        <p className="flex items-center sm:border-2 sm:border-white border-hidden rounded-lg p-3 mb-4 shadow-md sm:w-96 w-[300px] text-white">
          <i className="fas fa-user-graduate text-white mr-3"></i>
          Mold the character of the younger generation
        </p>
        <p className="flex items-center sm:border-2 sm:border-white border-hidden rounded-lg p-3 mb-4 shadow-md sm:w-96 w-[300px] text-white ">
          <i className="fas fa-child text-white mr-3"></i>
          Stress-free, child-centered, holistic education
        </p>
       </div>

 
       {/* Teachers */}
       <Teachers/>

       {/* gallery */}

       <Homegallery/>

    
    </>
   
  )
}

export default Homebot 



