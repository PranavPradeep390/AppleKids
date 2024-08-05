import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import lines from '../assets/images/lines.svg'
import group from '../assets/images/group-2.jpg'
import bg from '../assets/images/svg-element-7.svg'
import api from '../api/api'

// const galleryItems = [
//   {
//     id: 1,
//     image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
//     alt: 'Gallery Image 1',
//     category: 'office'
//   },
//   {
//     id: 2,
//     image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
//     alt: 'Gallery Image 2',
//     category: 'playing'
//   },
//   {
//     id: 3,
//     image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
//     alt: 'Gallery Image 3',
//     category: 'sitting'
//   },
//   {
//     id: 4,
//     image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
//     alt: 'Gallery Image 4',
//     category: 'office'
//   },
//   {
//       id: 5,
//       image: 'https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 3',
//       category: 'playing'
//     },
//     {
//       id: 6,
//       image: 'https://images.pexels.com/photos/8363769/pexels-photo-8363769.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 4',
//       category: 'office'
//     },
//     {
//       id: 7,
//       image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 1',
//       category: 'office'
//     },
//     {
//       id: 8,
//       image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 2',
//       category: 'playing'
//     },
//     {
//       id: 9,
//       image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 3',
//       category: 'sitting'
//     },
//     {
//       id: 10,
//       image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 4',
//       category: 'office'
//     },
//     {
//         id: 11,
//         image: 'https://images.pexels.com/photos/3087286/pexels-photo-3087286.jpeg?auto=compress&cs=tinysrgb&w=600',
//         alt: 'Gallery Image 3',
//         category: 'playing'
//       },
//       {
//         id: 12,
//         image: 'https://images.pexels.com/photos/8363769/pexels-photo-8363769.jpeg?auto=compress&cs=tinysrgb&w=600',
//         alt: 'Gallery Image 4',
//         category: 'office'
//       },
//   // Add more gallery items as needed
// ];

function Gallery() {
  const[data,setData]=useState([])

  useEffect(()=>{
    const fetchGallery=async()=>{
      
      try {
        const response=await api.get('/gallery')
        console.log(response)
        setData(response.data.photos)
      } catch (error) {
        console.log(error)
      }
 }
 fetchGallery()
 
  },[])



  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

 
   const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
   const totalPages = Math.ceil(data.length / itemsPerPage);
  return (
    <>
    <Navbar/>

   {/* top section */}
    <div className='min-h-[400px]  grid sm:grid-cols-2  bg-[#FCF2D9] ' >
    <div className='flex flex-col justify-center   items-center gap-6 sm:p-4 p-6  '>
      <div className='flex gap-5'>
        <img src={lines} alt='line' className='w-[60px] h-[60px] ' />
      <h1 className='text-2xl sm:text-4xl md:text-5xl font-bold  font-fredoka  '>Gallery</h1>
      </div>
           
                <p className='text-base sm:text-lg md:text-xl font-league-spartan sm:w-[350px] w-[300px]  '>
                Welcome to our gallery! Here, you'll find a delightful collection of moments captured during our daily activities, special events, and celebrations. From creative arts and crafts to exciting outdoor adventures, our gallery showcases the joy and learning experiences of our little ones.
              </p>
            </div>


        <div className='flex justify-center items-center bg-no-repeat bg-right p-4' style={{backgroundImage:`url(${bg})`,
      backgroundSize:'200px 200px'}}>
        <img
            src={group}
            alt='kids pic'
            className=' sm:w-2/3  sm:h-80 w-64  rounded-tl-3xl rounded-br-3xl'
        />
         </div>
    </div>
    <div className='mt-[-10px]'>
    <svg
      id="wave"
      className="transform rotate-180 transition duration-300"
      viewBox="0 0 1440 190"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="#FCF2D9" offset="0%"></stop>
          <stop stopColor="#FCF2D9" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,76L60,85.5C120,95,240,114,360,114C480,114,600,95,720,91.8C840,89,960,101,1080,107.7C1200,114,1320,114,1440,95C1560,76,1680,38,1800,41.2C1920,44,2040,89,2160,88.7C2280,89,2400,44,2520,38C2640,32,2760,63,2880,82.3C3000,101,3120,108,3240,101.3C3360,95,3480,76,3600,76C3720,76,3840,95,3960,88.7C4080,82,4200,51,4320,50.7C4440,51,4560,82,4680,82.3C4800,82,4920,51,5040,57C5160,63,5280,108,5400,114C5520,120,5640,89,5760,69.7C5880,51,6000,44,6120,38C6240,32,6360,25,6480,47.5C6600,70,6720,120,6840,129.8C6960,139,7080,108,7200,107.7C7320,108,7440,139,7560,145.7C7680,152,7800,133,7920,117.2C8040,101,8160,89,8280,69.7C8400,51,8520,25,8580,12.7L8640,0L8640,190L8580,190C8520,190,8400,190,8280,190C8160,190,8040,190,7920,190C7800,190,7680,190,7560,190C7440,190,7320,190,7200,190C7080,190,6960,190,6840,190C6720,190,6600,190,6480,190C6360,190,6240,190,6120,190C6000,190,5880,190,5760,190C5640,190,5520,190,5400,190C5280,190,5160,190,5040,190C4920,190,4800,190,4680,190C4560,190,4440,190,4320,190C4200,190,4080,190,3960,190C3840,190,3720,190,3600,190C3480,190,3360,190,3240,190C3120,190,3000,190,2880,190C2760,190,2640,190,2520,190C2400,190,2280,190,2160,190C2040,190,1920,190,1800,190C1680,190,1560,190,1440,190C1320,190,1200,190,1080,190C960,190,840,190,720,190C600,190,480,190,360,190C240,190,120,190,60,190L0,190Z"
      ></path>
    </svg>
    </div>

   {/* image section */}

   {/* <div className='flex justify-center items-center min-h-[100px] '>
      <div className=' bg-[#F06D4F] h-12 px-6 rounded-md flex justify-center items-center'>
        <ul className='flex flex-row space-x-6 gap-4' >
        <li
              className={`text-white font-fredoka text-xl  cursor-pointer ${filter === 'all' ? 'text-black' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </li>
            <li
              className={`text-white font-fredoka text-xl  cursor-pointer ${filter === 'office' ? 'text-black' : ''}`}
              onClick={() => setFilter('office')}
            >
              Office
            </li>
            <li
              className={`text-white font-fredoka  text-xl  cursor-pointer ${filter === 'playing' ? 'text-black' : ''}`}
              onClick={() => setFilter('playing')}
            >
              Playing
            </li>
            <li
              className={`text-white font-fredoka  text-xl  cursor-pointer ${filter === 'sitting' ? 'text-black' : ''}`}
              onClick={() => setFilter('sitting')}
            >
              Sitting
            </li>
         </ul>
      </div>
    </div> */}

   <div className='min-h-[400px] bg-no-repeat ' style={{backgroundImage:"url(https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg)",
     backgroundPosition: 'right',
     backgroundSize:'200px 200px'
   }}>
   <div className=" py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={`https://admin.applekidskindergarten.com/uploads/gallary/${item.name}`}
                alt={item.id}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className='flex justify-center items-center p-4'>
    <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="mx-1 px-3 py-2 bg-[#E21D26] text-white font-fredoka rounded disabled:opacity-50 disabled:cursor-not-allowed  disabled:bg-gray-200 disabled:text-black"
            >
              Previous
            </button>
    <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="mx-1 px-3 py-2 bg-[#E21D26] text-white rounded font-fredoka disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-black"
            >
              Next
            </button>
    </div>
    
   </div>


  
    </>
  )
}

export default Gallery