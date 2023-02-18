import React from 'react'
import './page.css'
import Logo from '../images/logo.png'
import Paramount from '../images/paramount.png'
import George from '../images/George.jpeg'
import { BiMoviePlay } from 'react-icons/bi';

const Head = () => {
  return (
    <div>
      {/* NAVBAR */}
        <div className='flex items-center justify-between navbar pb-3 pt-5 px-4 md:px-12 lg:px-[100px] lg:mb-[400px] shadow-md'>
            <img className='w-[150px] md:w-[250px] lg:w-[300px]' src={Logo} alt="logo" />
              <div className='flex items-center justify-between'>
                 <button
                 className='button bg-[#262a33] text-[#fff] border-2 text-xs md:text-sm lg:text-base mx-2 md:mx-4 px-2 py-1.5 md:px-4 md:py3 rounded'
                 >
                  <a href="https://form.jotform.com/230065006821343" target="_blank">Enquire</a>
                   </button>
              </div>
        </div>
      {/* INTRO */}
         <div className='intro flex items-center justify-center mt-28' id='Top'>
              <div className='opacity-70 bg-[#fff9f5] py-[10px] lg:py-[50px] md:py-[90px]'>
                <div>
                 <img className='float-right w-36 h-48 mx-3 rounded-md' src={George} alt="" />
                </div>
                   <p className='text-justify intro-text mt-[0px] text-base font-medium text-center leading-8 pb-7 px-5 mb-7 z-50
                   md:text-lg md:leading-10 md:mt-[130px] lg:text-3xl lg:mt-[150px] lg:mx-[100px] lg:rounded lg:leading-[3.5rem]'>
                    Get 50% SEIS income tax relief on two of the most eagerly awaited cinematic releases
                    in the coming months. The George Best Story and the recently Paramount Pictures backed
                    true story of Angelina The Queen of Coffee.
                   </p>
               </div>
         </div>

         <div className='head-intro flex-column items-center justify-center'>

              <div className='intro-1 flex items-center justify-center mt-6 lg:mb-[-45px]'>
                <img className='w-[300px] md:w-[400px]' src={Paramount} alt="paramount pictures" />
              </div>

              <div className='intro-2 mx-7 mt-7 lg:mt-[75px] md:mt-[75px] text-[10px] md:text-base md:leading-10 leading-7'>
                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1'>HMRC Advance Assured</span></p>

                <p className='flex md:ml-[-5px] lg:ml-[-12px]'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3 md:w-12' />
                <span className='px-3 pt-1'>50% of investment rebated in 2022/23 or 2023/24 tax return</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1'>No Capital Gains Tax on growth</span></p>

                <p className='flex'><BiMoviePlay className='text-xl md:text-2xl mt-1.5 md:mt-3' />
                <span className='px-3 pt-1'>CGT Reliefs on investing</span></p>
              </div>

         </div>
            
         <div className='flex items-center justify-center mt-12 lg:justify-start lg:ml-[305px]'>
            <button className='button bg-[#262a33] md:text-lg text-white py-2 px-4 rounded'><a href="https://form.jotform.com/230065006821343" target="_blank">Click Here To See If You Qualify</a></button>
         </div>

    </div>
  )
}

export default Head
