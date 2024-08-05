import React, { useState } from 'react'
import api from '../../api/api'
import contact from '../../assets/images/contact.jpg'

function Contactform() {

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
      });

      const[errorMsg,setErrorMsg]=useState('')


      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };

      
      const handleSubmit=async(e)=>{
          e.preventDefault();

          if(!formData.name || !formData.phone || ! formData.email || !formData.message){
            setErrorMsg('All fields are required *')
          }

          const response=await api.post('/create',formData)
          console.log(response)
      }



  return (
    <div className='min-h-[600px] bg-[#FCF2D9]'>
        <div className='grid md:grid-cols-2 p-10 space-x-20 '>
            <div className='flex flex-col justify-center md:items-start items-center gap-4 p-4 md:ml-[150px] '>
                  <div className='space-y-4'>
                  <button className='bg-[#379E3B] hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg h-8 w-[150px] font-fredoka text-sm mt-6'>
                        ASK A QUESTION
                        </button>
                        <h1 className='text-2xl sm:text-5xl md:text-4xl font-bold font-fredoka text-center'>
                        Get in touch!
                       </h1>
                  </div>


            
                   <div className='2xl:w-[520px] w-full '>
                    <div className='space-y-2 '>
                    <label className='font-fredoka'> Name</label>
                   <input 
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='w-full px-3 py-2 rounded-lg shadow-sm border-none focus:ring-0 ' 
                        />
                    </div>
                    {/* <div className='space-y-2'>
                    <label  className='font-fredoka'>last Name</label>
                    <input 
                            type='text'
                            className='w-full px-3 py-2 rounded-lg shadow-sm border-none focus:ring-0   ' 
                        />
                    </div> */}
                        
                   </div>
                   <div className='flex gap-6'>
                    <div className='space-y-2'>
                    <label  className='font-fredoka'>Phone</label>
                    <input 
                           type='number'
                           name='phone'
                           value={formData.phone}
                           onChange={handleChange}
                            className='w-full px-3 py-2 rounded-lg shadow-sm border-none focus:ring-0 ' 
                        />
                    </div>
                    <div className='space-y-2'>
                    <label  className='font-fredoka'>Email</label>
                    <input 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='w-full px-3 py-2 rounded-lg shadow-sm border-none focus:ring-0 ' 
                        />
                    </div>
                        
                   </div>



                   <div className='2xl:w-[520px] w-full '>
                    <div className='space-y-2'>
                        <label className='font-fredoka'>How can we help you?</label>
                    <textarea 
                            type='text'
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                            className='w-full px-3 py-2 border-none rounded-lg shadow-sm h-32 focus:ring-0 ' 
                        />
                    </div>
                    <div className='mt-2'>
                    {setErrorMsg && <p className='text-red-600 '>{errorMsg}</p>}
                    </div>
                    
                    <div className=' flex mt-4 md:justify-start justify-center  '>
                    <button onClick={handleSubmit} className='bg-[#E21D26] hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg font-fredoka'>
                        Send Message
                        </button>
                    </div>

                    
                   
                   </div>

          


            </div>




            <div className='md:flex items-center md:justify-start  hidden p-6 bg-no-repeat' style={{backgroundImage:'URL("https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/09/svg-element-1.svg")',
               backgroundPosition:  ' right bottom',
               backgroundSize:'400px 400px' 
            }}>
                <img
                //  src='https://images.pexels.com/photos/5088188/pexels-photo-5088188.jpeg?auto=compress&cs=tinysrgb&w=600'
                src={contact}
                  alt='contact' className='h-[490px] rounded-br-[100px] rounded-bl-[20px] rounded-tl-[20px] rounded-tr-[20px]'/>
            </div>
           

        </div>

    </div>
  )
}

export default Contactform