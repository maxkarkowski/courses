'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <nav className="flex gap-3 items-center" key="nav">
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            size="lg"
            appearance="link"
            className="hover:no-underline cursor-pointer "
          />
        )
      })}
      <Button asChild>
        <Link href="/courses">Kurse</Link>
      </Button>
    </nav>
  )
}
