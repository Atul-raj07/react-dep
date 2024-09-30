import React from 'react'
import {useForm} from 'react-hook-form'
const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (e) => {
    console.log(e)
  }
if(errors.username){

  console.log(errors.username.message);
}

  

  return (
    <>
    <form onSubmit = {handleSubmit(onSubmit)}>
      <input {...register("username",{required : "username is reuired"})} className='text-black'  type="text" />
      <br />
      {errors.username && <p className='text-red-700' role='alert'>{errors.username.message}</p>}
      <br />
      <input className='px-4 py-2 bg-blue-700 text-white' type="submit" value="submit" />
    </form>
    </>
  )
}

export default App