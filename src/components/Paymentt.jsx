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
            <div className='flex p-2' style={{background: '#F3F7FA'}}>
                <div className='w-3/6'>
                    <Title text={paymentData.subTitle}/>
                    <Heading heading={paymentData.title}/>
                    <Paragraph paragraph={paymentData.paragraph}/>
                </div>
                <div className='w-3/6 relative'>
                    <img className='absolute right-0 -top-6' src={paymentData.paymentShape}/>
                    <h1 className='text-primary font-man font-bold text-2xl leading-[30px] mt-10'>Get Started for Free</h1>
                    <input className='block px-[110px] mt-5 py-[15px]' type='email' placeholder='Email address'/>
                    <input className='block px-[110px] mt-5 py-[15px]' type='password' placeholder='password'/>
                    <button className='px-[155px] py-[15px] bg-[#FF7F5C] rounded inline-block text-white mt-5 border border-solid border-[#FF7F5C] hover:bg-transparent hover:text-[#FF7F5C] transition ease-in-out delay-150'>GET STARTED</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Paymentt