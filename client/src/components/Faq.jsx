import React, { useState } from 'react'
import './faq.css'
const Faq = () => {
    const [open, setOpen] = useState(true)
    const [open1, setOpen1] = useState(true)
    const [open2, setOpen2] = useState(true)
    const [open3, setOpen3] = useState(true)
    const [open4, setOpen4] = useState(true)
    const [open5, setOpen5] = useState(true)
    
  return (
    <>
        <div id="faq">
            <div className="faqtxt">
                <h1><span>FAQ <br /></span>The Most Questions</h1>
                <div className="faqtxtp1">
                    <p>Proin laoreet nisi vitae pharetra mattis. Etiam luctus suscipit velit vitae mixue ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo donec tempus.</p>
                </div>
            </div>
        <div className="flex text-white justify-between w-[65%] mt-5 flex-row">
            <div className='flex flex-col'>
                <div  className={`${open ? 'flex h-12  duration-500 ': ' mt-4 h-full duration-500' } my-2 border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1  className={`${open ? 'flex h-12 ': 'duration-200' }`}>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen(!open) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                <div  className={`${open1 ? 'flex h-12 duration-500 ': ' mt-4 h-full duration-500' }  my-2 border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1  className={`${open1 ? 'flex h-12 ': 'duration-200' }`}>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen1(!open1) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open1 ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                <div  className={`${open2 ? 'flex h-12 duration-500 ': ' mt-4 h-full duration-500' }  my-2 border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1  className={`${open ? 'flex h-12 ': 'duration-200' }`}>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen2(!open2) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open2 ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                </div>
                <div className='flex flex-col'>
                <div  className={`${open3 ? 'flex h-12 ': ' mt-4 h-full duration-200' } my-2 border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1  className={`${open3 ? 'flex h-12 duration-500 ': 'duration-500' }`}>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen3(!open3) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open3 ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                <div  className={`${open4 ? 'flex h-12 duration-500 ': ' mt-4 h-full duration-500' } my-2 border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1  className={`${open4 ? 'flex h-12 ': 'duration-200' }`}>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen4(!open4) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open4 ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                <div  className={`${open5 ? 'flex h-12  duration-500': ' mt-4 h-full duration-500' } border p-4 w-[25.5rem] text-[14px] rounded-lg`}>
                    <h1>How can you help clients reduce their tax liability?</h1>
                    <i onClick={() =>setOpen5(!open5) } className="  ri-arrow-down-s-line"></i>
                    <div className={`${open5 ? 'hidden': 'flex h-28 ' }`}><h2>Nullam vehicula congue sapien. Etiam vel neque ac arcu rutrum mixue ultricies. Maecenas felis lectus, finibus vel dui et, interdum varius lacus. Nulla ed congue aliquet vulputate nec bibendum sapien aliquet ut amatug tempus.</h2></div>
                </div>
                </div>
        </div>
        </div>
    </>
  )
}

export default Faq