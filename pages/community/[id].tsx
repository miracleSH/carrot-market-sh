import BasicProfile from '@components/basicProfile'
import CommunityBoard from '@components/communityBoard'
import FlatBtn from '@components/flatbtn'
import Layout from '@components/layout'
import Reply from '@components/reply'
import type { NextPage } from 'next'


const CommunityPostDetail: NextPage = () => {
  return (
    <Layout canGoBack>
      <div>
        <span className='inline-flex my-3 ml-4 items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>동네질문</span>
        <BasicProfile name='이승헌'></BasicProfile>
        <div className='mt-2 px-4'>
          <CommunityBoard question='what??' author='이승헌' curiosityNum={1} answerNum={1} id={1}></CommunityBoard>
        </div>
        <div className='px-4 my-5 space-y-5'>
          {[1, 2, 3].map((_, i) => {
            return <Reply key={i} author={`이승헌` + i} text='하하하호호'></Reply>
          })}
        </div>
        <div className='px-4'>
          <textarea
            className='mt-1 shadow-sm w-full focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500 '
            rows={4}
            placeholder='Answer this question!'
          />
          <FlatBtn text='Reply'></FlatBtn>
        </div>
      </div>
    </Layout>
  )
}

export default CommunityPostDetail
