import Link from 'next/link'
import React from 'react'

interface OrangeCircleBtnProps {
  children?: React.ReactNode
  text?: string
  href?: string
}

export default function OrangeCircleBtn({ children, text, href }: OrangeCircleBtnProps) {
  return (
    <div>
      {href ? (
        <Link href={href} passHref>
          <button className='fixed bottom-24 right-5 hover:bg-orange-500 transition-colors cursor-pointer bg-orange-400 rounded-full p-3 text-white shadow-xl'>
            {children}
          </button>
        </Link>
      ) : (
        <button className='fixed bottom-24 right-5 hover:bg-orange-500 transition-colors cursor-pointer bg-orange-400 rounded-full p-3 text-white shadow-xl'>
          {children}
        </button>
      )}

      {text ? <span className='text-sm mt-2 font-medium text-gray-700'>{text}</span> : null}
    </div>
  )
}
