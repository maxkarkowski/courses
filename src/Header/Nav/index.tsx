'use client'

import React from 'react'

import type { Header as HeaderType } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  console.log('navItems', navItems)
  return (
    <nav className="flex gap-3 items-center" key="nav">
      {navItems.map(({ link, subNavItems }, i) => {
        console.log('link', subNavItems)
        return (
          <div key={i}>
            <CMSLink
              {...link}
              size="lg"
              appearance="link"
              className="hover:no-underline cursor-pointer "
            />
            {subNavItems && (
              <div className="flex gap-3">
                {subNavItems.map((subNavItem, a) => (
                  <CMSLink
                    key={a}
                    {...subNavItem.link}
                    size="lg"
                    appearance="link"
                    className="hover:no-underline cursor-pointer "
                  />
                ))}
              </div>
            )}
          </div>
        )
      })}
      <Button asChild>
        <Link href="/courses">Kurse</Link>
      </Button>
    </nav>
  )
}
