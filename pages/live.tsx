import type { NextPage } from 'next'

const Live: NextPage = () => {
  return (
    <div className='py-10 px-4 '>
      {[1, 2, 3, 4, 5].map((_, index) => {
        return (
          <div key={index}>
            <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
            <h3 className='font-medium text-gray-700 text-lg'>Let's Try Potato</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Live
