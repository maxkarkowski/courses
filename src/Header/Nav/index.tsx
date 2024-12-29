'use client'

import React, { useState } from 'react'

import type { Header as HeaderType } from '@/payload-types'
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
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { Menu } from 'lucide-react'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div>
        <Button onClick={toggleMenu} variant="outline" className="flex gap-3 text-white">
          Menu n1
          <SelectPrimitive.Icon asChild>
            <Menu className="h-6 w-6 " />
          </SelectPrimitive.Icon>
        </Button>
      </div>
      <div className="flex gap-3 items-center hidden">
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="outline" className="flex gap-3 text-white">
              Menu{' '}
              <SelectPrimitive.Icon asChild>
                <Menu className="h-6 w-6 " />
              </SelectPrimitive.Icon>
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="mx-auto w-full">
              <DrawerHeader>
                <DrawerTitle>Menu</DrawerTitle>
              </DrawerHeader>
              <div className="p-4 pt-0">
                <div className="flex flex-col gap-4">
                  {navItems.map(({ link, subNavItems }, i) => {
                    return (
                      <div key={i}>
                        {subNavItems && subNavItems.length > 0 ? (
                          <CMSLink
                            {...link}
                            size="lg"
                            appearance="link"
                            className="hover:no-underline cursor-pointer mb-4 "
                          />
                        ) : (
                          <CMSLink
                            {...link}
                            size="lg"
                            appearance="link"
                            className="hover:no-underline cursor-pointer "
                          />
                        )}
                        {subNavItems && (
                          <div className="flex flex-col gap-6 ml-2">
                            {subNavItems.map((subNavItem, a) => (
                              <CMSLink
                                {...subNavItem.link}
                                key={a}
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
                </div>
                <Button asChild className="mt-5">
                  <Link href="/courses">Kurse</Link>
                </Button>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <NavigationMenu className="hidden">
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
                    <NavigationMenuContent>
                      {subNavItems.map((subNavItem, a) => (
                        <Link
                          /* @ts-ignore */
                          href={subNavItem.link.reference?.value.slug}
                          legacyBehavior
                          passHref
                          key={a}
                        >
                          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            {subNavItem.link.label}
                          </NavigationMenuLink>
                        </Link>
                      ))}
                    </NavigationMenuContent>
                  )}
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
          <Button asChild>
            <Link href="/courses">Kurse</Link>
          </Button>
        </div>
      </NavigationMenu>
    </>
  )
}
