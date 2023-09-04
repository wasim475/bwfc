import React from 'react'

const List = ({className, title, text}) => {
  return (
   <div className={`flex bg-white drop-shadow-md ${className}`}>
     <div className={`w-[30%] ${className}`}>
        <div className={`w-14 h-14 bg-red-500 rounded-full ${className}`}></div>
     </div>
     <div className={`w-[70%] mr-[32px]`}>
        <h3 className={`font-man font-extrabold text-2xl ${className}`}>{title}</h3>
        <p className={`font-man font-normal text-lg tracking-[-2%] text-[#757095] ${className}`}>{text}</p>
     </div>
   </div>
  )
}

export default List