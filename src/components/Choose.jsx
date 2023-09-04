import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import List from '../layouts/List'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'


const Choose = () => {
    let [chooseData, setChooseData] = useState({})
    let [Loading, setLoading] = useState(true)
    useEffect(()=>{
        async function choose(){
            let getChooseData = await axios.get('https://bwfc-api.vercel.app/choose')
            setChooseData(getChooseData.data)
            setLoading(false)
        }
        choose()
    },[])
    if(Loading){
        return;
    }
  return (
    <section>
        <Container>
            <div className='bg-bg-c'>
                <div className='p-[39px]'>
                    <div>
                       
                        <Title className={`text-center`} text={chooseData.subTitle}/>
                        <Heading className={`text-center text-primary`} heading={chooseData.title}/>
                    </div>
                    <div >
                        <div className='flex mt-16 flex-wrap gap-[20px]'>
                            {
                                chooseData.items.map((cItem)=> cItem.visibility &&(
                                    <div className='w-[484px] h-[241px] rounded-lg border items-center justify-center bg-white flex relative'>
                                        <div className='w-6/12'>
                                            <Title className={`mt-[22px]`} text={cItem.title}/>
                                            <Paragraph className={``} paragraph={cItem.details}/>
                                        </div>
                                        <div className=' w-[58px] h-[58px] border rounded-full absolute top-[59px] left-[30px]' style={{backgroundColor: cItem.circleColor}}>
                                            
                                        </div>
                                    </div>
                                )
                                    
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Choose