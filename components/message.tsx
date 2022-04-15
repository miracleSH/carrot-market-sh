import React from "react"
import { cls } from "../libs/utils"

interface MessageProps {
  text: string
  imagePath?: string
  children?: React.ReactNode
  index : number
  author?: string
}

export default function Message({text, imagePath, children, index, author}:MessageProps) {
  return (
    <div className={cls('flex items-start space-x-2', index % 2 === 0? 'flex-row-reverse space-x-reverse': '')}>
      <div className='w-8 h-8 rounded-full bg-slate-300' />
      <div className='w-1/2 text-sm text-gray-700 p-2 border border-gray-400 rounded-md'>
        <p>{text}</p>
      </div>
    </div>
  )
}
