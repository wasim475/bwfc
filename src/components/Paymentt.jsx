import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'

const Paymentt = () => {
    let [paymentData, setPaymentData] = useState({})
    let [Loading, setLoading] = useState(true)

    useEffect(()=>{
        async function payment(){
            let getPaymentData = await axios.get('https://bwfc-api.vercel.app/payment')
            setPaymentData(getPaymentData.data)
            setLoading(false)
        }
        payment()
    },[])

    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='flex'>
                <div className='w-3/6'>
                    <Title text={paymentData.subTitle}/>
                    <Heading heading={paymentData.title}/>
                    <Paragraph paragraph={paymentData.paragraph}/>
                </div>
                <div className='w-3/6 '>
                    
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Paymentt