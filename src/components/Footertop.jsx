import React from 'react'
import aama from '../assets/images/svg-element-12.svg'

function Footertop() {
  return (
    <div>

    {/* first portion */}
        <div className="min-h-[300px] flex flex-col justify-start items-center p-4  ">
          <a href='https://www.instagram.com/apple_kids24?utm_source=qr&igsh=MXc3OHVsNzl6aHF3Zw=='>
          <h1 className="font-fredoka sm:text-4xl text-md font-black w-full h-16 flex justify-center items-center tracking-wider ">
      Instagram&nbsp;<span className="text-[#F06D4F]">@Apple Kids🍏</span>
    </h1>
          </a>
        
          <p className="font-league-spartan text-sm text-center tracking-wider">
            We're always up to something good. Follow along and don't miss a minute.
          </p>
          <img  className=' w-52 h-56' src={aama} alt='aama'/>
         
         
          {/* <div class="elementor-widget-container" style="transform: rotate(5.15065deg);">
            <img loading="lazy" decoding="async" width="167" height="206" src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png" class="attachment-full size-full wp-image-27721 cmsmasters_img cmsmasters-lazyload ls-is-cached lazyloaded" alt="" data-sizes="(max-width: 167px) 100vw, 167px" data-src="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png" data-srcset="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png 167w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-30x37.png 30w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-8x10.png 8w" srcset="https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34.png 167w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-30x37.png 30w, https://los-ninos.cmsmasters.net/los-ninos/wp-content/uploads/sites/4/2022/08/home-main-34-8x10.png 8w" sizes="(max-width: 167px) 100vw, 167px"/>												
        </div> */}
    
    
    
        </div>
    
        </div>
    
  )
}

export default Footertop