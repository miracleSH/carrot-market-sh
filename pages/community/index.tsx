import type { NextPage } from 'next'
import Chat from '../../components/chat'
import Layout from '../../components/layout'

const Community: NextPage = () => {
  return (
    <Layout title='동네생활' hasTapBar>
      <div className='px-4 space-y-8'>
        <Chat author='Lee' question='what??' answerNum={1} createdTime={Date.now().toString()} curiosityNum={1}></Chat>
        <button className='fixed bottom-24 right-5 hover:bg-orange-500 transition-colors cursor-pointer bg-orange-400 rounded-full p-3 text-white shadow-xl'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            ></path>
          </svg>
        </button>
      </div>
    </Layout>
  )
}
export default Community
