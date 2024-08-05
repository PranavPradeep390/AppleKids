import React from 'react'

function Aboutwave() {
  return (
    <>
        <svg
      id="wave"
      style={{ transform: 'rotate(0deg)', transition: '0.3s' }}
      viewBox="0 0 1440 150"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto "
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stopColor="#FCF2D9" offset="0%" />
          <stop stopColor="#FCF2D9" offset="100%" />
        </linearGradient>
      </defs>
      <path
        style={{ transform: 'translate(0, 0px)', opacity: 1 }}
        fill="url(#sw-gradient-0)"
        d="M0,15L60,60L120,105L180,30L240,135L300,105L360,75L420,105L480,15L540,105L600,60L660,30L720,15L780,135L840,15L900,120L960,30L1020,120L1080,30L1140,90L1200,90L1260,60L1320,0L1380,15L1440,90L1440,150L1380,150L1320,150L1260,150L1200,150L1140,150L1080,150L1020,150L960,150L900,150L840,150L780,150L720,150L660,150L600,150L540,150L480,150L420,150L360,150L300,150L240,150L180,150L120,150L60,150L0,150Z"
      ></path>
    </svg>
    </>
    
  )
}

export default Aboutwave