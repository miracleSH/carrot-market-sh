import { useForm } from 'react-hook-form'

export default function Forms() {
  const { register, handleSubmit } = useForm()
  const onValid = () => {
    console.log('im valid')
  }
  return (
    <form onSubmit={handleSubmit(onValid)}>
      <input
        {...register('userName', {
          required: true,
        })}
        type={'text'}
        placeholder='UserName'
      />
      <input
        {...register('email', {
          required: true,
        })}
        type={'email'}
        placeholder='UserEmail'
      />
      <input
        {...register('password', {
          required: true,
        })}
        type={'password'}
        placeholder='Password'
      />
      <button>createAccount</button>
    </form>
  )
}
