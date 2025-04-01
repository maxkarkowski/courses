'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { Nav } from './Nav/nav'

interface HeaderClientProps {
  data: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])
  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  const [isOpen, setIsOpen] = useState(true)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className=" relative z-20 dark:bg-emerald-800 dark:text-white bg-emerald-400 text-black      ">
      <div className="container py-8 flex justify-between">
        <Link href="/" className="cursor-pointer">
          <Logo loading="eager" priority="high" className="invert-0 dark:invert-0" />
        </Link>
        {/* <HeaderNav data={data} /> */}
        <Button onClick={toggleMenu} variant="default" className={`flex md:hidden gap-3  `}>
          Menü
          <SelectPrimitive.Icon asChild>
            <Menu className="h-6 w-6 " />
          </SelectPrimitive.Icon>
        </Button>
      </div>
      <div
        className={`${isOpen ? 'h-auto' : 'h-0'} md:h-auto bg-accent-foreground dark:bg-accent w-full transition-all overflow-hidden flex `}
      >
        <div className="container text-white">
          <Nav data={data} />
        </div>
      </div>
    </header>
  )
}
