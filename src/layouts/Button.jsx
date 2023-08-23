import React from 'react'

const Button = ({children}) => {
  return (
    <button className='w-[162px] bg-primary py-4 px-9 text-white rounded-2xl font-man font-bold text-base hover:bg-transparent hover:text-primary hover:border hover:border-solid hover:border-primary transition delay-150 ease-in-out'>{children}</button>
  )
}

export default Button