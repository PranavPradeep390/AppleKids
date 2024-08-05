import React from 'react'
import kinder from '../../assets/images/KINDER.svg'
import bg from '../../assets/images/svg-element-7.svg'
import pen from '../../assets/images/PEN.svg'



function Banner() {
  return (
    <>
    <div className='grid sm:grid-cols-12 min-h-[400px] bg-[#FCF2D9] '>

        <div className='sm:col-span-3 relative z-10 overflow-hidden'>
       
      
          <img
            decoding="async"
            src={bg}
            className='w-72 h-72 absolute bottom-[20px]  '
            alt="Illustration"
          />
          
        
            <img 
                 decoding="async"
                 src={kinder}
                 className='w-60 h-60 absolute bottom-[-50px]   '
                 alt="Illustration"
            />
            
         
          
      
        </div>

          <div className='flex justify-center  items-center flex-col gap-6 sm:col-span-6 sm:static absolute top-[400px] w-full  '>
          <h1 className="font-bold text-2xl  font-fredoka sm:text-3xl md:text-4xl lg:text-5xl text-center mx-auto px-auto">About Us</h1>
       </div>

       <div className='sm:col-span-3 relative'>
       <img 
            decoding="async"
            src={pen}
            className=' w-[100px] h-[100px] absolute right-0 sm:top-0  sm:block hidden'
            alt="Illustration"
             />
       </div>



    </div>
    </>
  )
}

export default Banner