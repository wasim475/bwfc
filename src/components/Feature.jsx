import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'
import Button from '../layouts/Button'

const Feature = () => {
  let [featureData, setFeatureData] = useState({})
  let [Loading, setLoading]= useState(true)

  useEffect(()=>{
    async function feature(){
      let getFeatureData = await axios.get('https://bwfc-api.vercel.app/feature')
      setFeatureData(getFeatureData.data)
      setLoading(false)
    }
    feature()
  },[])
  
  
  if(Loading){
    return;
  }
 
  return (
    <section>
      <Container>
        <div className='flex' style={{backgroundImage: `url ${featureData.featureShape}`}}>
          <div className='w-[50%]'><img src={featureData.featureImage}/></div>
          <div className='w-[50%]'>
            <Title text= {featureData.subTitle} />
            <Heading heading={featureData.title}/>
            <Paragraph className={`mt-11`} paragraph={featureData.paragraph}/>
            <div className='mt-5'>
            <Button>Get Start</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Feature