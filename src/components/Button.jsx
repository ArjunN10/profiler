import React from 'react'

export default function Button({className,value}) {
  return (
    <div>
        <button className={` text-blue-500  hover:text-blue-500  w-[100%] py-1  ${className}`}>
            {value}
        </button>
    </div>
  )
}
