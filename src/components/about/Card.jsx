import React from 'react'
import kids2 from '../../assets/images/group.jpg'

function Card() {
  return (
    <>
    <div className='min-h-[700px] flex justify-center items-center'>
        <div className=' w-[800px] h-[500px] rounded-2xl flex lg:flex-row  overflow-hidden'>
           
           
            <div className='bg-[#F06D4F] lg:w-1/2 w-full flex flex-col space-y-4 justify-center items-start p-6 lg:m-0 m-4 lg:rounded-none rounded-2xl  '>
            <div>
               <p className='font-fredoka text-white'>The curriculum aims to</p>
                <h1 className='font-fredoka text-white text-xl sm:text-2xl font-bold '>Develop skills relevant to the 21st century:</h1>
            </div>


            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>1</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Critical thinking</h1>
                 <p className='text-white font-league-spartan'>  
                 These conceptions in education will help children gain different skills needed for their successful future.
                 </p>
               </div>
            </div>

            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>2</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Creativity</h1>
                 <p className='text-white font-league-spartan'>  
                 We strive to help each child to find their own talents, and also constantly develop and graduate from the school with a confidence in their abilities.
                 </p>
               </div>
            </div>

            <div className='flex gap-4'>
               <div>
                 <p className='bg-white px-2 rounded-lg font-fredoka'>3</p>
               </div>
               <div>
                 <h1 className='text-white font-fredoka'>Communication</h1>
                 <p className='text-white font-league-spartan'>  
                 These conceptions in education will help children gain different skills needed for their successful future.
                 </p>
               </div>
            </div>
            
            
               
            </div>



            <div className='bg-pink-800 w-1/2 lg:block hidden'>
                <img 
                // src='https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600' 
                src={kids2}
                alt='kidabout' className='w-full h-full' />
            </div>
        </div>
    </div>
    </>
    
  )
}

export default Card




