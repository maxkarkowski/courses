'use client'

import React, { useState } from 'react'

import type { Header as HeaderType, Page } from '@/payload-types'
import * as SelectPrimitive from '@radix-ui/react-select'

import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  return (
    <>
      <NavigationMenu className="hidden md:flex">
        <div className="flex gap-3 items-center" key="nav">
          <NavigationMenuList>
            {navItems.map(({ link, subNavItems }, i) => {
              return (
                <NavigationMenuItem key={i}>
                  {subNavItems && subNavItems.length > 0 ? (
                    <NavigationMenuTrigger>
                      <CMSLink
                        {...link}
                        size="lg"
                        appearance="link"
                        className="hover:no-underline text-cyan-900 cursor-pointer "
                      />
                    </NavigationMenuTrigger>
                  ) : (
                    <CMSLink
                      {...link}
                      size="lg"
                      appearance="link"
                      className="hover:no-underline cursor-pointer "
                    />
                  )}
                  {subNavItems && (
                    <NavigationMenuContent className="p-4 flex flex-col">
                      <ul className="grid gap-3 p-4 md:w-[500px] md:grid-cols-2  ">
                        {subNavItems.map(({ link, description }, a) => (
                          <li key={a}>
                            <CMSLink {...link} className="flex" />
                            {description && <p className="text-sm italic">{description}</p>}
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
          {/* <Button asChild>
            <Link href="/courses">Kurse</Link>
          </Button> */}
        </div>
      </NavigationMenu>
    </>
  )
}
