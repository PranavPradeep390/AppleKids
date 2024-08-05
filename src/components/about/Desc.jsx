import React from 'react'
import Aboutwave from './Aboutwave'

function Desc() {
  return (
    <>
    <div className='mb-[-2px]'>
    <Aboutwave/>

    </div>
     
    <div className="min-h-[400px] bg-[#FCF2D9] flex flex-col space-y-8 sm:p-4 p-6  justify-center items-center">
  <h1 className="font-fredoka text-2xl sm:text-4xl md:text-5xl font-bold text-center">
    A School Made for Young Children
  </h1>
  <p className="text-base sm:text-lg md:text-xl font-league-spartan w-full max-w-5xl px-4 sm:px-8 md:px-12 lg:px-16">
  Apple Kids Kindergarten is a pioneering educational institution dedicated to providing young learners with an exceptional learning experience through interactive, hands-on activities. 
  The institution embraces a hybrid curriculum that combines Montessori methods with contemporary educational strategies, aiming to foster holistic development in children. At Apple Kids, every child is recognized as a budding star, brimming with potential for learning and action. 
  The experienced educators at Apple Kids are committed to nurturing these young minds, guiding them to become the conscientious and capable citizens of tomorrow's world.
  Great emphasis is given to moral values in children and Apple Kids has integrated the curriculum with Islamic values to prepare the children for their lives here and the hereafter. Apple Kids is affiliated with the Deeniyath Foundation to meet this objective.
  </p>
</div>

    </>
    
  )
}

export default Desc