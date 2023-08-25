import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'

const Client = () => {
    let [clientData, setClientData]= useState({})
    let [Loading, setLoading]= useState(true)

    useEffect(()=>{
        async function client(){
            let getClientData = await axios.get('https://bwfc-api.vercel.app/client')
            setClientData(getClientData.data)
            setLoading(false)
        }
        client()
    },[])
    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='flex'>
                <div className='w-3/5'>
                    <Title text={clientData.subTitle}/>
                    <Heading className={'w-[500px]'} heading={clientData.title}/>
                    {
                        clientData.sliderItem.map((item, index)=>(
                            <img src={item.image}/>
                        ))
                    }
                </div>
                <div className='w-2/5'>Right</div>
            </div>
        </Container>
    </section>
  )
}

export default Client