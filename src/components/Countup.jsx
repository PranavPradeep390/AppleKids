import React from 'react'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Svg from './Svg';

function Countup() {
    const { ref: facilityRef, inView: facilityInView } = useInView({
        triggerOnce: true,
        threshold: 0.5, // Adjust this value based on when you want to trigger the animation
      });
      const { ref: staffRef, inView: staffInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const { ref: courseRef, inView: courseInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      const { ref: studentsRef, inView: studentsInView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
  return (
    
    <>
<div>
  

     
   
    <div className='min-h-[200px] bg-[#F06D4F] grid sm:grid-cols-4 '>
   
    <div ref={studentsRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {studentsInView && <CountUp end={100} duration={2}  suffix="+" className='text-6xl font-extrabold text-white font-fredoka' />} 
      
      <h2 className='text-2xl font-semibold text-white font-fredoka'>students</h2>
    </div>
    <div ref={facilityRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {facilityInView && <CountUp end={8} duration={2} suffix='+' className='text-6xl font-extrabold text-white font-fredoka' />}
      <h2 className='text-2xl font-semibold text-white font-fredoka '>Activities</h2>
    </div>
    <div ref={staffRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {staffInView && <CountUp end={5} duration={2} suffix='+' className='text-6xl font-extrabold text-white font-fredoka ' />}
      <h2 className='text-2xl font-semibold text-white  font-fredoka'>Staffs</h2>
    </div>
    <div ref={courseRef} className='flex flex-col space-y-4 justify-center items-center m-4'>
      {courseInView && <CountUp end={6} duration={2} suffix='+' className='text-6xl font-extrabold text-white font-fredoka ' />}
      <h2 className='text-2xl font-semibold text-white font-fredoka '>Courses</h2>
    </div>
  </div>
  </div>

    </>

    

  )
}

export default Countup