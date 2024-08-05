import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';

function Homemid() {
  const tabs = [
    { title: 'Innovative Learning', description:"This approach to learning focuses on using new and creative methods to enhance the learning experience. It often involves the use of technology, interactive tools, and unconventional teaching methodsr." },
    { title: 'Experienced Educators', description:"  Experienced educators are teachers or instructors who have a significant amount of teaching experience. They have spent years honing their craft and have a deep understanding of the subjects they teach. ."},
    { title: 'Interactive Learning', description: " Interactive learning is a teaching method that actively involves students in the learning process. It encourages students to participate, ask questions, and engage with the material in a meaningful way. ." },
    { title: 'Cultural Diversity', description:" Cultural diversity refers to the presence of a variety of cultural groups within a society or organization. It encompasses differences in race, ethnicity, language, religion, and other cultural factors. " },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);


  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
   
   <div className='min-h-[450px] grid lg:grid-cols-2   lg:p-4 overflow-x-hidden '>

  {/* 2nd div */}
  <div className='flex justify-center lg:items-end items-center   flex-col gap-6  p-4'>
      <button className='bg-[#38AD3D] text-white flex justify-center items-center  text-[26px] font-bold py-4 px-6  h-[50px] w-[300px] font-fredoka text-center rounded-tl-[20px] rounded-br-[20px] lg:mr-10 '>
                  why choose us?
                </button>  
    {tabs.map((tab, index) => (
      <div   key={index} className={`flex border gap-6  rounded-full p-1  items-center space-x-8 sm:w-96 w-80 cursor-pointer  ${selectedTab.title === tab.title ? 'bg-[#efe8d6] ' : ''}`} >
        <div className='flex pl-4 w-2/3'>
      <p
      
        className={`text-lg `}
        onClick={() => handleTabClick(tab)}
      >
        {tab.title}
      </p>
      </div>
      <div >
      <i className='fas fa-plus   text-white bg-[#F06D4F] p-1 rounded-md ' />
      </div>
      </div>
    ))}
  </div>








  {/* 3rd div */}
  <div className='flex lg:justify-start justify-center  items-center mt-4 ml-4  lg:mb-0 mb-6 p-4 '>
    <div className='flex justify-center items-center border border-r-4 border-b-4 border-[#F06D4F] shadow-md hover:shadow-lg transition-shadow duration-300 p-4 h-[350px] w-[300px] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[20px] rounded-bl-[20px]'>
    <p className='   text-center   '>
      {selectedTab.description}
    </p>
    </div>
   
  </div>

</div>

    </>
  )
}

export default Homemid





















{/* <svg className="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
	c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
	c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
</svg> */}
