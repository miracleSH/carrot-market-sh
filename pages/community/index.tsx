import CommunityBoard from '@components/communityBoard'
import Layout from '@components/layout'
import OrangeCircleBtn from '@components/orangeCircleBtn'
import type { NextPage } from 'next'



const Community: NextPage = () => {
  return (
    <Layout title='동네생활' hasTapBar>
      <div className='px-4 space-y-8'>
        <CommunityBoard id={1} author='Lee' question='what??' answerNum={1} createdTime={Date.now().toString()} curiosityNum={1}></CommunityBoard>
        <OrangeCircleBtn fixed href='/community/write'>
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
            ></path>
          </svg>
        </OrangeCircleBtn>
      </div>
    </Layout>
  )
}
export default Community
