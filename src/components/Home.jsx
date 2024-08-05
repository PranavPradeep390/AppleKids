import React from 'react'
import Classes from './Classes'
import Countup from './Countup'
import Homecards from './Homecards'
import HomeAbout from './HomeAbout'
import { Link } from 'react-router-dom'
import Svg from './Svg'


function Home() {
  return (
    <div className='min-h-[600px] '>
        {/* headeing section */}

        <div className='min-h-[200px] flex flex-col justify-center items-center space-y-4 p-4 mt-4 mx-auto container'>
          <Link to='/contact' >
          <button className='bg-[#379E3B] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-8 w-[150px] font-fredoka'>
   Apple Kids🍎
  </button>
          </Link>
  
  <h1 className='text-2xl sm:text-5xl md:text-4xl font-bold font-fredoka text-center'>
    A day full of discoveries<br />and knowledge!
  </h1>
 
</div>


<Homecards/>
<HomeAbout/>
<Svg/>
<Countup/>
  <Classes/>
  
  

    </div>
  )
}

export default Home