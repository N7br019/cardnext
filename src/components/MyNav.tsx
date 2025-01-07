import React from 'react'
import stylenav from '@/components/MyNav.module.scss'
import Link from 'next/link'

const MyNav = () => {
  return (
        <nav id={stylenav.menuContainer}>
            <ul>
                <li><Link href="/enemies">Black Alien Scum</Link></li>
                <li>to</li>
                <li>tre</li>
            </ul>
        </nav>
  )
}

export default MyNav;