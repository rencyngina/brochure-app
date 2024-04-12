import React from 'react'
import Image from 'next/image';

const FloatingObject = () => {
  return (
    <div className='flex justify-center items-center h-[24vh] '>
    <div className='flex gap-4 bg-slate-500 shadow-lg py-6 px-8 rounded-lg'>

    <div>
    <Image src="/images/finance.jpg" alt="logo" width={150} height={80} />
    <p>erick is tall</p>
    </div>
    <div>
    <Image src="/images/finance.jpg" alt="logo" width={150} height={80} />
    <p>one piece</p>
    </div>
    <div>
    <Image src="/images/finance.jpg" alt="logo" width={150} height={80} />
    <p>naaaahhhaa</p>
    </div>
    <div>
    <Image src="/images/finance.jpg" alt="logo" width={150} height={80} />
    <p>am coding</p>
    </div>

    </div>
    </div>
  )
}

export default FloatingObject;