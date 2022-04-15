import type { NextPage } from 'next'
import Layout from '../../components/layout'
import Message from '../../components/message'

const ChatDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='px-4 py-10 space-y-4'>
        
        <Message index={1} text='하하호호' imagePath='abc'></Message>
        <Message index={2} text='호호하하' imagePath='abc'></Message>
        
        <div className='fixed w-full mx-auto max-w-md bottom-3 inset-x-0'>
          <div className='flex relative items-center'>
            <input
              type='text'
              className='shadow-sm rounded-full w-full pr-12 border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500'
            />
            <div className='absolute inset-y-0 flex py-1.5 right-0'>
              <span className='flex focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 items-center bg-orange-500 rounded-full px-3 hover:bg-orange-600 cursor-pointer text-sm text-white mr-1'>
                &rarr;
              </span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ChatDetail
