import React from 'react'

const Paragraph = ({className, paragraph}) => {
  return (
    <p className={`font-man font-normal text-lg tracking-[-2%] leading-[26px] text-left text-textColor mt-[36px]`}>{paragraph}</p>
  )
}

export default Paragraph