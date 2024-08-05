import React from 'react'
import Navbar from '../components/Navbar'
import Feedback from '../components/Feedback'
import Countup from '../components/Countup'
import Banner from '../components/about/Banner'
import Imagesection from '../components/about/Imagesection'
import Desc from '../components/about/Desc'
import Card from '../components/about/Card'
import Aboutsvg from '../components/about/Aboutsvg'



function About() {
 
 
  return (
      <>
       <Navbar/>
 
      {/* Banner section */}
     <Banner/>
        
        <Imagesection/>

        <Desc/>
        <Card/>

       


<Countup/>

      {/* feedback section */}

     <Feedback/>

   



      </>
       
    
   

  )
}

export default About