import React from 'react'

const Heading = ({className, heading}) => {
  return (
    <h1 className={`font-man font-bold text-5xl leading-myChoice tracking-[-3%] text-left mt-[25px] ${className}`}>{heading}</h1>
  )
}

export default Heading