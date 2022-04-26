import Link from 'next/link'
import React from 'react'

interface OrangeCircleBtnProps {
  children?: React.ReactNode
  text?: string
  href?: string
  fixed?: boolean
}

export default function OrangeCircleBtn({ children, text, href, fixed }: OrangeCircleBtnProps) {

  const fixedClassName = fixed? ' fixed bottom-24 right-5' : ''
  return (
    <div className='flex flex-col items-center justify-center'>
      {href ? (
        <Link href={href} passHref>
          <button className={'hover:bg-orange-500 transition-colors cursor-pointer bg-orange-400 rounded-full p-3 text-white shadow-xl' + fixedClassName}>
            {children}
          </button>
        </Link>
      ) : (
        <button className={'hover:bg-orange-500 transition-colors cursor-pointer bg-orange-400 rounded-full p-3 text-white shadow-xl' + fixedClassName}>
          {children}
        </button>
      )}
      {text ? <span className='text-sm mt-2 font-medium text-gray-700'>{text}</span> : null}
    </div>
  )
}
