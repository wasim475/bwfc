import React, { useEffect, useState } from 'react'
import Container from '../layouts/Container'
import axios from 'axios';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';


const Navbar = () => {
  let [navData, setNavData]= useState({})
  let [Loading, setLoading]= useState(true)
  useEffect(()=>{
    async function nav(){
      let getData = await axios.get('https://bwfc-api.vercel.app/navbar')
      setNavData(getData.data)
      setLoading(false)
    }
    nav()
  },[])

  if(Loading){
    return <h1>Please Wait...</h1>
  }

  return (
    <Container>
        <div className='flex justify-between items-center'>
          <div className='w-[10%]'><img src={navData.logo}/></div>
          <div className='w-[50%] flex justify-center '>
            <ul className='flex gap-[35px] font-man font-normal text-sm'>
              {navData.navItems.map((nitem)=>(
                <li className='hover:text-primary transition ease-in-out delay-150 group'>
                {nitem.item} {nitem.dropDown && < BsCaretDownFill className='group group-hover:invisible group-hover:absolute'/> } {nitem.dropDown && < BsCaretUpFill className='invisible group-hover:visible'/> }
                {
                  nitem.dropDown && <ul>
                  <ul className='invisible absolute group-hover:visible text-black opacity-0 group-hover:opacity-100 z-10 rounded-lg drop-shadow-lg bg-white p-2'>
                  { nitem.dropDownItem.map((dItem)=>(
                    <li className=''>{dItem.dropItem}</li>
                  ))}
                </ul>
                  </ul>
                }
                
                </li>
              ))}
            </ul>
          </div>
          <div className='w-[40%] flex gap-[10px] justify-end font-man font-semi-bold text-sm'>
            {
                navData.buttonOne.visibility && 
                  <a href='#' className='hover:border hover:border-solid hover:border-primary py-4 px-9 inline-block rounded-lg bg-transparent hover:text-white hover:bg-primary transition ease-in-out delay-150'>{navData.buttonOne.text}</a>
            }
            {
                navData.buttonTwo.visibility && 
                  <a className='border border-solid border-primary py-4 px-9 inline-block rounded-lg hover:bg-transparent hover:text-primary bg-primary text-white transition ease-in-out delay-150' href='#'>{navData.buttonTwo.text}</a>
            }
            {
              navData.buttonThree.visibility && 
                  <a className='border border-solid border-primary py-4 px-9 inline-block rounded-lg hover:bg-transparent hover:text-primary bg-primary text-white transition ease-in-out delay-150' href='#'>{navData.buttonThree.text}</a>
            }
          </div>

        </div>
    </Container>
  )
}

export default Navbar