import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'
import Button from '../layouts/Button'

const Account = () => {
    let [accData, setAccData]= useState({})
    let [Loading, setLoading]= useState(true)

    useEffect(()=>{
        async function account(){
            let getAccData = await axios.get('https://bwfc-api.vercel.app/account')
            setAccData(getAccData.data)
            setLoading(false)
        }
        account()
    },[])
    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='flex'>
                <div className='w-[45%]'>
                    <Title text={accData.subTitle}/>
                    <Heading heading={accData.title}/>
                    <Paragraph paragraph={accData.paragraph}/>
                    <Button>Get Start</Button>
                </div>
                <div className='w-[55%]'>
                    <img src={accData.accountImage}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Account