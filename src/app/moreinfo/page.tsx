"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

const Page = () => {

    const searchParams = useSearchParams();

    const id = searchParams.get('id');

  return (
    <>moreinfo  {id}</>
  )
}

export default Page;