interface ReplyProps{
  author: string
  createdTime? : string
  text: string
  imagePath?: string
}

export default function Reply({author, createdTime, text, imagePath}: ReplyProps) {
  return (
    <div className='flex items-start space-x-3'>
      <div className='w-8 h-8 bg-slate-200 rounded-full' />
      <div>
        <span className='text-sm block font-medium text-gray-700'>{author}</span>
        <span className='text-xs text-gray-500 block '>{createdTime}</span>
        <p className='text-gray-700 text-sm mt-2'>{text}</p>
      </div>
    </div>
  )
}
