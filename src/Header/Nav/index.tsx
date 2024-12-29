'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center" key="nav">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={link._key || i}
            {...link}
            appearance="link"
            className="hover:no-underline cursor-pointer "
          />
        )
      })}
      {/* <Link href="/search">
        <span className="sr-only">Search</span>
        <SearchIcon className="w-5 text-primary" />
      </Link> */}
    </nav>
  )
}
