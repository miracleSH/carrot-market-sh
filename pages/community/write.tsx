import FlatBtn from '@components/flatbtn'
import Layout from '@components/layout'
import type { NextPage } from 'next'


const Write: NextPage = () => {
  return (
    <Layout canGoBack>
      <form className='px-4 py-10'>
        <textarea
          className='mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 '
          rows={4}
          placeholder='Ask a question!'
        />
        <FlatBtn text='Summit'></FlatBtn>
      </form>
    </Layout>
  )
}

export default Write
