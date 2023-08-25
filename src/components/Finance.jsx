import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'
import Button from '../layouts/Button'

const Finance = () => {
    let [financeData, setFinanceData] = useState({})
    let [Loading, setLoading]= useState(true)
    useEffect(()=>{
        async function finance(){
            let getFinanceData = await axios.get('https://bwfc-api.vercel.app/finance')
            setFinanceData(getFinanceData.data)
            setLoading(false)
        }
        finance()
    },[])
    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='flex'>
                <div className='w-[45%]'>
                    <Title text={financeData.sunbTitle}/>
                    <Heading heading={financeData.heading}/>
                    <Paragraph paragraph={financeData.paragraph}/>
                    <Button>{financeData.button.text}</Button>
                </div>
                <div className='w-[55%]'>
                    <img src={financeData.image}/>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Finance