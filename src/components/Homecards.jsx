import React from 'react'

function Homecards() {

  const cardData = [
    {
      id: 1,
      imgSrc: "https://img.icons8.com/ios/50/178E18/light-on--v1.png",
      title: "Engaging Curriculum",
      description: "Combining academics with hands-on activities and moral teachings."
    },
    {
      id: 2,
      imgSrc: "https://img.icons8.com/ios/50/E63535/star--v1.png",
      title: "Islamic Environment",
      description: "Cultivating values of respect and understanding"
    },
    {
      id: 3,
      imgSrc: "https://img.icons8.com/neon/96/thumb-up.png",
      title: "Montessori Methodology",
      description: " Promoting curiosity, independence, and a love for learning."
    },
    {
      id: 4,
      imgSrc: "https://img.icons8.com/fluency-systems-regular/48/35CCE6/confetti.png",
      title: "Experienced Educators",
      description: "Dedicated to each child's academic, social, and emotional growth."
    }
  ];

  return (
  
        <>
       
         <div className=' min-h-[400px] flex md:flex-row flex-col gap-10 justify-center items-center   flex-wrap p-6'>

      {cardData.map((card,index) =>  (
        <div  key={index} className='bg-white border border-gray-300 rounded-lg w-52 h-64 p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out  group'>
        <img width="48" height="48" src={card.imgSrc} alt={card.title} className='transition-transform duration-500 ease-in-out  group-hover:rotate-180' />
        <h3 className='text-lg font-semibold mb-2 mt-4 font-fredoka'>{card.title}</h3>
        <p className='text-sm text-gray-700 font-league-spartan'>{card.description}</p>
      </div>
      ))}
        </div> 
 
   </>
  )
}

export default Homecards

