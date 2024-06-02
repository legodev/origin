/* eslint-disable jsx-quotes */
'use client'
import { useState } from 'react'
import Link from 'next/link'
import { links } from '../scripts/links'
import './header.css'
import icon from '../assets/principal-icon.png'
import Image from 'next/image'

export default function Header () {
  const [menu, setMenu] = useState('hidden')

  const open = () => {
    if (menu === 'hidden') {
      setMenu('show')
    } else {
      setMenu('hidden')
    }
  }
  return (
    <header className="header">
      <div className="div__section-1">
        <nav className="nav container" role="navigation">
          <Link href="./" className="nav__logo link" role="button-logo">
            <Image src={icon} alt="icon" priority width={45} />
          </Link>
          <ul className="nav__list-desktop">
            {links.map((link) => (
              <li className="nav__item" key={link.name}>
                <Link href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={`nav__list ${menu}`}>
            {links.map((link) => (
              <li className="nav__item" key={link.name}>
                <Link onClick={open} href={link.href}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <svg
            onClick={open}
            className="nav__menu"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
            />
          </svg>
        </nav>
      </div>
    </header>
  )
}
