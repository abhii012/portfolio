import React from 'react'
import { useForm } from 'react-hook-form'
import Input from './Input';
import { Element } from 'react-scroll';
import emailjs from 'emailjs-com';

function Form() {

    const {handleSubmit,control,register, formState: { errors }} =useForm({
  defaultValues: {
    name: '',
    email: '',
    mobile:'',
    message: ''
  }
});

  const onSubmit = (data) => {
  emailjs.send(
    'service_hgk982p',
    'template_wa5kxdl',
    data,
    'D7uOJ6lA3i5bN3o5z'
  )
  .then((result) => {
    console.log('Email sent successfully!', result.text);
  }, (error) => {
    console.error('Failed to send email.', error);
  });
};

  return (
    <Element name='contact'>
    <form onSubmit={handleSubmit(onSubmit) } className='max-w-xs sm:max-w-md mx-auto mt-8 min-h-screen pt-30 sm:pt-20 '>
      <h1 className='text-center text-xl sm:text-4xl text-slate-200 mb-10'>Connect With ME</h1>
      <div  className=' form-box bg-[#18181899] backdrop-blur-2xl rounded-lg min-h-[70vh] sm:min-h-[70vh] p-2 sm:p-5 text-white  scale-90 sm:scale-100  border-0.5 border-cyan-400 shadow-[0_0_20px_0px_rgba(6,182,212,0.75)]'>
        <div className='form-field scale-90 sm:scale-100'>
      <Input name="name" control={control} className="mt-3 rounded-xl w-full" label="Name"/>
      <Input name="email" control={control} className="mt-3 rounded-xl w-full" label="Email"/>
      <Input name="mobile" control={control} className="mt-3 rounded-xl w-full" label="Mobile No."/>
      <textarea {...register("message", { required: true })}  className="mt-3 rounded-xl w-full h-32 p-2 bg-gray-400 resize-none text-black " placeholder="Type your message..." label="Message"/>
      <button type='submit' className='hover:cursor-pointer rounded-xl bg-red-500/70 py-1 w-full mt-2'>submit</button>
      </div>
      </div>
    </form>
    </Element>
  )
}

export default Form
