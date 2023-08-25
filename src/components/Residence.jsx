import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import Paragraph from '../layouts/Paragraph'
import Button from '../layouts/Button'

const Residence = () => {
    let [residenceData, setResidenceData] = useState({})
    let [Loading, setLoading]= useState(true)
    useEffect(()=>{
        async function residence(){
            let getResidenceData = await axios.get('https://bwfc-api.vercel.app/residence')
            setResidenceData(getResidenceData.data)
            setLoading(false)
        }
        residence()
    },[])
    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='flex item-center relative py-[36px] px-[20px]'>
                <div className='w-[70%]'>
                    <Paragraph paragraph={residenceData.text}/>
                </div>
                <div className='w-[30%] absolute -right-20'>
                    <Button >{residenceData.button.text}</Button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Residence