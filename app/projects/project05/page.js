'use client'


import Projects from '@/components/main/projects'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Project05() {
    return(
        <Projects>
        <motion.main
    initial={{opacity:0}}
    animate={{opacity:1}} 
    transition={{ delay: 2,duration: 0.5 }}
    className='grow m-2  rounded-xl flex flex-col bg-slate-500 bg-opacity-5'>
      
      <Image
                src="/images/corner1.png"
                width={100}
                height={100}
                alt="spin"
                />
      <div className='sm:px-8 px-4 grow'>
         <div className='text-white font-bold text-3xl ml-6 mt-2'>
          Weather App
         </div>

         <div className='text-white ml-6 mt-8 text-base '>
          <div className='flex gap-2'>
            <div className='font-semibold'>Title</div>
            <div className='font-semibold ml-4'>-</div>
            <div className='font-semibold'>Sky Stats</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Type</div>
            <div className='font-semibold ml-3'>-</div>
            <div>Mobile Application</div>
          </div>
          <div className='flex gap-2'>
            <div className='font-semibold'>Status</div>
            <div className='font-semibold'>-</div>
            <div>Completed</div>
          </div>
          <div className='my-4'>
          <div className='text-red-600 font-bold'>Description</div>
          <div className='font-semibold sm:text-base text-sm'>A weather app for weather information of users current location and any other location searched by the user.</div>
          </div>
          <div className='text-red-600 font-bold'>Images</div>
          <div className='sm:ml-6 mt-4 sm:flex space-y-2 sm:space-y-0 gap-12'>
          <Image
                src="/images/sky_02.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
            
            <Image
                src="/images/sky_01.jpg"
                width={200}
                height={200}
                className='border-4 border-sky-300 rounded-lg'
                alt="spin"
                />
          </div>
          
          <table>
      
          <tbody>
            <tr>
            <td className='font-semibold text-base pb-6'>Features</td>
          <td className='px-2 pb-6'>-</td>
          <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6 break-words '>
                  <ul className='list-disc'>
                  <li>Show Temperture, humidity and wind Speed</li>
                  <li>Search location</li>
                  <li>current location</li>
                
                </ul>
              </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base pb-6 pt-6'>Tools used</td>
            <td className='px-2 pb-6 pt-6'>-</td>
            <td className='font-semibold text-white  sm:text-base text-sm pl-6 pt-6'>
            <ul className='list-disc'>
              <li>Flutter</li>
              <li>Weather Api</li>
            
            </ul>
            </td>
            </tr>
            <tr>
            <td className='font-bold text-white  text-base pt-4'>Source code</td>
            <td className='px-2 pt-4'>-</td>
              <td className='font-semibold text-red-600  sm:text-base text-sm pl-3 pt-4 break-all'>
              <Link href={'https://github.com/Ejaz0000/Sky_stats.git'}>
              https://github.com/Ejaz0000/Sky_stats.git
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
         </div>
        </div>

        <div className='flex flex-row justify-end'>
        <Image
                src="/images/corner2.png"
                width={100}
                height={100}
                alt="spin"
                />
      </div>
        
    </motion.main>

    </Projects>
    );
    
};
