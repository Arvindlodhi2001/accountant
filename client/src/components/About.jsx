import React from 'react'
import '../components/allcss/about.css'
const About = () => {
  return (
    <>
        <div id="about">
            <div className="aboutcenter">
                <div className="aleft">
                    <img src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/professional-business-team-NNXYFQN.jpg" alt="" />
                    <img id='img2'  src="https://gtkit.rometheme.pro/gaudit/wp-content/uploads/sites/20/2023/03/unity-of-business-team-LSJVEG5.jpg" alt="" />
                    <i className=" absolute text-[#17e8aa] text-6xl md:-mt-[3rem] mt-[35rem] bg-white rounded-full ml-[5rem] md:ml-[20rem] ri-play-circle-fill"></i>
                </div>
                <div className="aright">
                    <h4 className='uppercase  text-[#34ed8d]'>About Company</h4>
                    <h1 className=' font-extrabold tex-2xl'>Your Financial Partner for Success</h1>
                    <p className='text-[gray] text-[15px]'>Proin laoreet nisi vitae pharetra mattis, etiam luctus suscipit velit vitae amatug ultricies. Augue molestie a etiam quis tincidunt est, et efficitur ipsum nunc bibendum ut risus et vehicula proin tempus tellus diam laoreet justo velit ante.</p>
                    <div className="aboutdiv">
                        <div className="list1">
                            <h2 className='text-xl my-3 font-bold'>Our Vision</h2>
                            <ul className='text-[gray] h-full'>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Nulla congue aliquet vulputate</li>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Proin tempus auctor libero</li>
                                <li  className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Sed venenatis purus sed</li>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Etiam lobortis sapien amatug</li>
                            </ul>
                        </div>
                        <div className="list2">
                            <h2 className='text-xl my-3 font-bold'>Our Mission</h2>
                            <ul className='text-[gray]'>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Mauris non euismod odio donec</li>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Tellus velit eleifend ante</li>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Quis efficitur dolor nulla orci</li>
                                <li className='flex text-[15px]'><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="#48f" d="M8.59 16.59L13.17 12L8.59 7.41L10 6l6 6l-6 6l-1.41-1.41z"/></svg>Lacus nec malesuada lacinia velit</li>
                            </ul>
                        </div>
                    </div>
                    <button className=''>
                        More About Us <i className="ri-arrow-right-up-line"></i>
                    </button>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default About