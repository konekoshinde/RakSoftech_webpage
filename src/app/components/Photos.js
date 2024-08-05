import React from 'react'

function Photos() {
  return (
    <div className='flex flex-col mb-10 '>
        <div className='flex flex-row ml-20'>
            <img src="img2.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img3.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img4.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
        </div>
        <div className='flex flex-row ml-20 '>
            <img src="img5.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img6.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img7.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>

        </div>
        <div className='flex flex-row ml-20'>
            <img src="img7.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img8.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>
            <img src="img1.jpg" width={600} className='m-12 swing-in-top-fwd hover:scale-125'/>8
        </div>
      
    </div>
  )
}

export default Photos
