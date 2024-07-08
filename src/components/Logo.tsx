import Link from 'next/link'
import React from 'react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href={'/'} prefetch={false}>
      <div className='flex items-center w-16 h-16'>
        <AspectRatio ratio={1/1} className='flex items-center justify-center'>
          <Image src={'/logos/logo.svg'} fill className='dark:filter dark:invert h-full w-full' priority alt='logo' />
        </AspectRatio>
      </div>
    </Link>
  )
}

export default Logo