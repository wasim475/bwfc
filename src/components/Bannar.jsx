import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios'
import Button from '../layouts/Button'
import { BsFillPlayCircleFill } from 'react-icons/bs';


const Bannar = () => {
  let [bannarData, setBannarData]= useState({})
  let [Loading, setLoading]= useState(true)

  useEffect(()=>{
    async function banner(){
      let getBannarData= await axios.get('https://bwfc-api.vercel.app/banner')
      setBannarData(getBannarData.data)
      setLoading(false)
    }
    banner()
  },[])

if(Loading){
  return;
}
  return (
    <section>
      <Container>
        <div className='flex' style={{ backgroundImage: `url(${bannarData.bannerbgshape})` }}>
        
          <div className='w-[52%]'>
            <h1 className='font-man font-extrabold text-6xl leading-[80px] tracking-[-3%]'> 
              {bannarData.bannerheading}
            </h1>
            <p className='font-man font-normal text-xl leading-[30px] tracking-[-2%] text-left'>{bannarData.bannerparagraph}</p>
            <div className='flex mt-8 gap-10'>
             <Button>Get Start</Button>
             <a 
             className='inline-block'
             href={bannarData.video.link}
             target='blank'
             
             ><span><BsFillPlayCircleFill className='inline-block mr-4 w-[60px] h-[60px]'/></span>{bannarData.video.text}</a>

            </div>
          </div>
          <div className='w-[48%]'><img src={bannarData.bannerrightimg}/></div>

        </div>
      </Container>
    </section>
  )
}

export default Bannar