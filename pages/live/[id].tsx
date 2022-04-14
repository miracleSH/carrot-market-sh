import type { NextPage } from 'next'
import Layout from '../../components/layout'

const StreamDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div className='px-4 space-y-4'>
        <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
        <h3 className='font-semibold text-center text-gray-800 text-2xl'>Let's Try Potato</h3>
        <div className='mt-4 pb-16 h-[50vh] overflow-y-scroll space-y-4'>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
          <div className='flex items-start space-x-2'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>Hi how much are you selling them for?</p>
            </div>
          </div>
          <div className='flex flex-row-reverse items-start space-x-2 space-x-reverse'>
            <div className='w-8 h-8 rounded-full bg-slate-300' />
            <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
              <p>I want ￦20,000</p>
            </div>
          </div>
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
      </div>
    </Layout>
  )
}

export default StreamDetail
