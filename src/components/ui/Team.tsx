import React from 'react'
import Image from 'next/image'

const Team = () => {
  return (
    <div><div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <Image className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="/kamran.jpg" height={100} width={100} alt="kamran's Face" />
    <div className="text-center space-y-2 sm:text-left">
      <div className="space-y-0.5">
        <p className="text-lg text-black font-semibold">
          Muhammad Kamran
        </p>
        <p className="text-slate-500 font-medium">
          Product Engineer
        </p>
      </div>
      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
  </div></div>
  )
}

export default Team