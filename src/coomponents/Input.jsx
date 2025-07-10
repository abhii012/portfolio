import React from 'react'
import {useController} from 'react-hook-form'

const Input = ({name,control,className,label,...props}) => {


    const {field, fieldState:{error} }= useController({name,control});

  return (
    <div className='mb-4'>
      <label className={`block  text-md`}>{label}</label>
      <input {...field} {...props}  className={`${className} bg-gray-400 p-2 w-full text-black`} />
      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  )
}

export default Input
