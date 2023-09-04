import React from 'react'
import Container from '../layouts/Container'
import Title from '../layouts/Title'
import Paragraph from '../layouts/Paragraph'
import Lists from '../layouts/Lists'


const Footer = () => {
  return (
    <section className='bg-black pt-1 ps-8'>
        <Container className= {`mt-0`}>
            <div className='flex'>
                <div className='w-6/12 px-[60px] py-[70px]'>
                    <Title className={`text-white`} text={'BWFC'}/>
                    <Paragraph paragraph={'Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.'}/>
                </div>
                <div className='w-6/12 flex justify-between'>
                  <div className='w-4/12 text-white'>
                    <ul>
                      <Title className={`text-white`} text={'Company'}/>
                      <Lists list={'About Us'}/>
                      <Lists list={'Careers'}/>
                      <Lists list={'Blog'}/>
                      <Lists list={'Pricing'}/>
                    </ul>
                  </div>
                  <div className='w-4/12 text-white'>
                    <ul>
                        <Title className={`text-white`} text={'Product'}/>
                        <Lists list={'Invoicing Platform'}/>
                        <Lists list={'Accounting Plateform'}/>
                        <Lists list={'Create Proposal'}/>
                        <Lists list={'Contracts'}/>
                      </ul>
                  </div>
                  <div className='w-4/12 text-white'>
                    <ul>
                        <Title className={`text-white`} text={'Resources'}/>
                        <Lists list={'Proposal Template'}/>
                        <Lists list={'Invoice Template'}/>
                        <Lists list={'Tuturoial'}/>
                        <Lists list={'CoHow to write a contractntracts'}/>
                      </ul>
                  </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Footer