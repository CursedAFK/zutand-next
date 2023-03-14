'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()

  return (
    <header
      style={{
        backgroundColor: 'rgba(0,0,0,.2)',
        padding: '.5vw',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <h3>Next 13</h3>

      <nav>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '3vw'
          }}
        >
          <Link
            href='/'
            style={{
              color: 'unset',
              textDecoration: pathname === '/' ? 'underline' : 'none',
              opacity: pathname === '/' ? 1 : 0.75
            }}
          >
            <li>Page 1</li>
          </Link>
          <Link
            href='/page-2'
            style={{
              color: 'unset',
              textDecoration: pathname === '/page-2' ? 'underline' : 'none',
              opacity: pathname === '/page-2' ? 1 : 0.75
            }}
          >
            <li>Page 2</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}

export default Header
