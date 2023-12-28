import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
        <Button><Link href={'/'}>home</Link></Button>
    </div>

  )
}

export default page