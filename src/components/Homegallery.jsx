import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import aj22 from '../assets/images/aj22.png'
import api from '../api/api'

// const galleryItems = [
//     {
//       id: 1,
//       image: 'https://images.pexels.com/photos/296302/pexels-photo-296302.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 1',
//       category: 'office'
//     },
//     {
//       id: 2,
//       image: 'https://images.pexels.com/photos/273062/pexels-photo-273062.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 2',
//       category: 'playing'
//     },
//     {
//       id: 3,
//       image: 'https://images.pexels.com/photos/2406271/pexels-photo-2406271.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 3',
//       category: 'sitting'
//     },
//     {
//       id: 4,
//       image: 'https://images.pexels.com/photos/1154180/pexels-photo-1154180.jpeg?auto=compress&cs=tinysrgb&w=600',
//       alt: 'Gallery Image 4',
//       category: 'office'
//     },
// ]

function Homegallery() {
  const[data,setData]=useState([])

  useEffect(()=>{
     const fetchImage=async()=>{

         try {
           const response=await api.get('/gallery')
           console.log(response.data.photos)
           setData(response.data.photos.slice(0,4))
         } catch (error) {
          console.log(error)
         }
     }
     fetchImage()
  },[])
  return (
    <>
    <div className='min-h-[700px] p-4 bg-no-repeat bg-cover  ' style={{backgroundImage:`url(${aj22})`}}>

    <div className='flex justify-center items-center p-6 flex-col gap-4 '>
         <h1 className='text-2xl sm:text-3xl md:text-4xl  font-bold font-fredoka md:p-6 pt-24'>
           Explore Our Gallery
          </h1>
        
         </div>
       
    <div className=' ' >
   <div className=" py-12">
      <div className="container mx-auto px-4">
       
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-4">
          {data.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg  transform transition-transform duration-300 hover:scale-105">
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
    </div>
    <div className='flex justify-center items-center '>
        <Link to='/gallery'>
        <button className='px-6 py-2 mt-4 text-white bg-[#E21D26] hover:bg-red-700 rounded-lg shadow-lg  focus:outline-none focus:ring-2 '>
    See more 
  </button>
        </Link>
 
</div>
    </div>
    </>
  )
}

export default Homegallery