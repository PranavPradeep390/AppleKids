
import homeMainImage from '../assets/images/home-main-3.png'
import '../App.css'
import kinder from '../assets/images/KINDER.svg'
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import kid from '../assets/images/KID.svg'
import pen from '../assets/images/PEN.svg'


function Header() {
  
  return (
   <div className='min-h-[600px]  w-auto overflow-hidden'>
      {/* navsection */}
      <Navbar/>



      {/* subHeaderSection */}
      <div className='w-auto min-h-[700px] bg-[#FCF2D9] grid sm:grid-cols-2'>


 <div className=' relative  z-10 overflow-hidden  '>
          <div>
            <img 
               decoding="async"
               src={kid}
               className=' w-[600px] h-[600px] absolute left-[-180px] bottom-[200px]'
               alt="Illustration"
            />
          </div>
          
          <div>
          <img
            decoding="async"
            src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg"
            className='w-72 h-72 absolute top-[250px] '
            alt="Illustration"
          />
          </div>
          <div>
            <img 
                 decoding="async"
                 src={kinder}
                 className='w-60 h-60 absolute bottom-[-50px] left-[60px]'
                 alt="Illustration"
            />
            
          </div>
          
        </div> 
        
        <div className='flex flex-col sm:justify-center sm:items-start   items-center justify-start space-y-6 p-4 bg-no-repeat animate-bg relative  '  style={{backgroundImage:`url(${homeMainImage})` ,
          backgroundPosition:  ' right bottom',  
          
          }}>
            <img 
            decoding="async"
            src={pen}
            className=' w-[100px] h-[100px] absolute right-0 sm:top-0  sm:block hidden'
            alt="Illustration"
             />
             <div className=' flex flex-col sm:pb-10 pb-[100px] space-y-5 justify-center sm:items-start items-center '>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold font-fredoka '>
            Little Minds <br /> Grow Here !!
          </h1>
          <p className='text-base sm:text-lg md:text-xl text-center font-league-spartan '>
           Where every day is an adventure in learning!
          </p>
          <div className='flex space-x-4'>
            <Link to='/about'>
            <button className='bg-[#E21D26] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg font-fredoka'>
              About US
            </button>
            </Link>
           <Link to='/contact'>
           <button className='  bg-white font-bold py-2 px-4 rounded-lg font-fredoka'>
              Contact US
            </button>
           </Link>
           </div>
            
            
          </div>
         
        </div>
      

      </div>

     
      
    </div>
  )
}

export default Header