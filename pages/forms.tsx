import { useState } from 'react'
import { FieldErrors, useForm } from 'react-hook-form'

interface LoginForm {
  userName: string
  email: string
  password: string
  errors? : string
}

export default function Forms() {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginForm>({
    mode : "onChange"
  })
  const onValid = (data: LoginForm) => {
    
    console.log(data)
    setError("errors", {message : "backend is offline sorry."})
  }

  const onInvalid = (errors: FieldErrors) => {
    console.log(errors)
  }
  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('userName', {
          required: 'userName is required',
        })}
        type={'text'}
        placeholder='UserName'
      />
      <input
        {...register('email', {
          required: true,
          validate: {
            notGmail: value => !value.includes('gmail.com') || 'gmail is not allowed',
          },
        })}
        type={'email'}
        placeholder='UserEmail'
      />
      {errors.email?.message}
      <input
        {...register('password', {
          required: true,
        })}
        type={'password'}
        placeholder='Password'
      />
      <button>createAccount</button>
      {errors.errors?.message}
    </form>
  )
}
