import Link from 'next/link'

interface BasicProfileProps {
  name: string
  id?: number
  imagePath?: string
}

export default function BasicProfile({ name, id, imagePath }: BasicProfileProps) {
  return (
    <div className='flex mb-3 px-4 cursor-pointer pb-3  border-b items-center space-x-3'>
      <div className='w-10 h-10 rounded-full bg-slate-300' />
      <div>
        <p className='text-sm font-medium text-gray-700'>{name}</p>
        <Link href={`/profile`}>
          <a>
            <p className='text-xs font-medium text-gray-500'>View profile &rarr;</p>
          </a>
        </Link>
      </div>
    </div>
  )
}
