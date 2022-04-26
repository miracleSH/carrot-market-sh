import Layout from '@components/layout'
import Reply from '@components/reply'
import type { NextPage } from 'next'
import Link from 'next/link'


const Chats: NextPage = () => {
  return (
    <Layout title='채팅' hasTapBar>
      <div className='divide-y-[1px]'>
        {[1, 2, 3, 4, 5, 6].map(key => {
          return (
            <Link key={key} href={`/chats/${key}`} passHref>
              <div  className='flex px-4 cursor-pointer py-3 items-center space-x-3'>
                <Reply author='Steve Jebs' text='See you tommorow'></Reply>
              </div>
            </Link>
          )
        })}
      </div>
    </Layout>
  )
}

export default Chats
