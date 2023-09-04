import React from 'react'
import Container from '../layouts/Container'
import Title from '../layouts/Title'
import Heading from '../layouts/Heading'
import Paragraph from '../layouts/Paragraph'
import Button from '../layouts/Button'

const Track = () => {
  return (
    <section>
        <Container>
            <div className='flex bg-primary p p-20'>
                <div className='w-[53%]'>
                    <Title className={`text-white`} text={'Why Choose Us'}/>
                    <Heading className={`text-white`} heading={'Track your crytpo portfolio on the best way possible'}/>
                    <Paragraph className={`text-white`} paragraph={'End-to-end payments and financial management in a single solution. Meet the right platform to help realize.'}/>
                </div>
                <div className='w-[47%] pl-16 mt-10 ml-[180px]'>
                    <input placeholder='E-mail' type='email' className=' w-72 font-man font mr-0 text-base bg-bg-i text-white text-justify text-center p-[18px]'  />
                    <input type='password' placeholder='Password' className=' w-72 font-man font mr-0 text-base bg-bg-i text-white text-justify text-center p-[18px] mt-6'/>
                    <button className='w-72 p-[18px] bg-btnC mt-6 rounded-md border-solid border border-btnC hover:bg-transparent hover:text-btnC'>Get Started</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Track