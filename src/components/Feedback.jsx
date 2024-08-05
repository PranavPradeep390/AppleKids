import React, { useEffect, useState } from 'react'
import {  A11y,Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import api from '../api/api';



// const testimonials = [
//   {
//     id: 1,
//     name: 'John Doe',
//     title: 'CEO, Company Inc.',
//     feedback: 'This service is fantastic! It really helped our business grow.',
//     image: 'https://randomuser.me/api/portraits/men/1.jpg'
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     title: 'CTO, TechCorp',
//     feedback: 'A game changer for our company. Highly recommend it to anyone.',
//     image: 'https://randomuser.me/api/portraits/women/1.jpg'
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     title: 'Marketing Head, Marketify',
//     feedback: 'Outstanding experience, very professional and prompt.',
//     image: 'https://randomuser.me/api/portraits/women/2.jpg'
//   },
//   {
//     id: 4,
//     name: 'Bob Brown',
//     title: 'Developer, DevWorks',
//     feedback: 'Incredibly useful tool for developers. Made my work easier.',
//     image: 'https://randomuser.me/api/portraits/men/2.jpg'
//   },
//   {
//     id: 5,
//     name: 'Sara Wilson',
//     title: 'Designer, Creatify',
//     feedback: 'The best design tool I have ever used. It’s a game-changer.',
//     image: 'https://randomuser.me/api/portraits/women/3.jpg'
//   },
//   // Add more testimonials as needed
// ];

function Feedback() {
  const[testimonials,setTestimonials]=useState([])

  useEffect(()=>{
    const fetchTestimonial=async()=>{
         const response=await api.get('/testmonials')
         setTestimonials(response.data.partners)
         console.log(response.data.partners)
    }
    fetchTestimonial()
  },[])
   
  return (
    <div className='min-h-[400px]'>
  <div className=" py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center  mb-8 font-fredoka">what parents say</h2>
      <Swiper
        modules={[ A11y,Autoplay]}
        autoplay={{delay: 2000}}
        spaceBetween={50}
        slidesPerView={3}
       
        breakpoints={{
          1024: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          360: { slidesPerView: 1 },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-white p-6 rounded-lg border-2 gap-2  shadow-lg flex flex-col justify-between hover:shadow-lg transform hover:-translate-y-1 transition duration-300 min-h-[250px]">
              <div className="flex items-center mb-4">
                <img
                  src={`https://admin.applekidskindergarten.com/uploads/testmonial/${testimonial.image}`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.designation}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">{testimonial.description
              }</p>
              <div>
              <p className='text-gray-700 italic'>{testimonial.date}</p>
              </div>
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
</div>
  )
}

export default Feedback