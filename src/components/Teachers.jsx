import React from 'react'
import profile from '../assets/images/profile.png'
import bushra from '../assets/images/bushra.jpg'
import afsana from '../assets/images/afsana.jpg'

const teachers = [
  {
    name: 'Bushra. B. A',
    subject: 'Principal',
    image:bushra,
    exp:"25 years in India & abroad"
  },
  {
    name: 'Shieka Aysha ',
    subject: 'Academic Coordinator',
    image: profile,
    exp:"2 year experience "
  },
  {
    name: 'Afsana',
    subject: 'Montessori',
    image:afsana,
  },
  {
    name: 'Amina',
    subject: 'CTTC',
    image: profile,
  },
  {
    name: 'Fathima',
    subject: 'Dheeniyath',
    image: profile,
  },
];


function Teachers() {
  return (
    <>
    <div className='min-h-[500px] p-6 '>
         <div className='flex justify-center items-center p-6 flex-col gap-4'>
         <h1 className='text-2xl sm:text-3xl md:text-4xl  font-bold font-fredoka'>
            Meet Our Team
          </h1>
          <p className='text-base sm:w-[500px] w-[300px] sm:text-lg md:text-xl text-center font-league-spartan'>
          Now is the time to invest in your child's education
  </p>
         </div>



 <div className='container mx-auto p-6'>
  <div className='flex flex-wrap justify-center gap-20 '>
    {teachers.map((teacher, index) => (
      <div
        key={index}
        className='bg-white border border-gray-300 rounded-lg w-full sm:w-60 md:w-52 lg:w-48 p-4 shadow-md hover:shadow-lg   hover:border-r-5 hover:border-b-2 hover:border-r-gray-200 hover:border-b-gray-200'
      >
        <img
          className='rounded-full w-32 h-32 mx-auto'
          src={teacher.image}
          alt={teacher.name}
        />
        <h2 className='text-xl font-bold text-center mt-4 font-fredoka m-2'>{teacher.name}</h2>
        <p className='text-center text-[#379E3B] font-fredoka m-2'>{teacher.subject}</p>
        <p className='text-center text-[#0e2b0e] font-fredoka'>{teacher.exp}</p>
      </div>
    ))}
  </div>
</div> 



    </div>
    </>
  )
}

export default Teachers