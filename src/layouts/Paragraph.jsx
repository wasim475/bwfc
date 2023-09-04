import React from 'react'

const Paragraph = ({className, paragraph}) => {
  return (
    <p className={`text-textColor font-man font-normal text-lg tracking-[-2%] leading-[26px] text-left  mt-[22px]`}>{paragraph}</p>
  )
}

export default Paragraph