import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios'

const Sponsor = () => {
    let [sponsorData, setSponsorData]= useState({})
    let [Loading, setLoading]= useState(true)

    useEffect(()=>{
        async function sponsor(){
            let getSponsorData = await axios.get('https://bwfc-api.vercel.app/sponsor')
            setSponsorData(getSponsorData.data)
            setLoading(false)
        }
        sponsor()
    }, [])

    if(Loading){
        return;
    }
  return (
    <section className='my-40'>
        <Container>
            <h4 className='text-center font-man font text-xl font-normal'>{sponsorData.title}</h4>
            <div className='flex justify-between mt-[36px] mx-14'>
                {
                    sponsorData.logos.map((item, index)=>(
                    <img src={item.src}/>
                ))
                }
            </div>
        </Container>
    </section>
  )
}

export default Sponsor