import React from 'react'

interface LiveProps {
  imagePath?: string
  title: string
  children?: React.ReactNode
}

export default function LiveChanel({ imagePath, title, children }: LiveProps) {
  return (
    <div className='pt-4 px-4'>
      <div className='w-full rounded-md shadow-sm bg-slate-300 aspect-video' />
      <h3 className='font-medium text-gray-700 text-lg mt-2'>{title}</h3>
    </div>
  )
}
