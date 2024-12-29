import { CMSLink } from '@/components/Link'
import { Button } from '@/components/ui/button'
import type { Header as HeaderType } from '@/payload-types'
import { cn } from '@/utilities/cn'
import Link from 'next/link'

export const Nav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const mainMenuClass = 'hover:no-underline cursor-pointer text-xl'

  return (
    <>
      <div className="mx-auto w-full p-4">
        <div className="flex flex-col md:flex-row gap-6 items-start justify-center">
          {navItems.map(({ link, subNavItems }, i) => {
            return (
              <div key={i}>
                {subNavItems && subNavItems.length > 0 ? (
                  <CMSLink
                    {...link}
                    size="lg"
                    appearance="link"
                    className={cn(mainMenuClass, 'mb-4')}
                  />
                ) : (
                  <CMSLink
                    {...link}
                    size="lg"
                    appearance="link"
                    className={cn(mainMenuClass, 'mb-0')}
                  />
                )}
                {subNavItems && (
                  <div className="flex flex-col gap-4 ml-2">
                    {subNavItems.map((subNavItem, a) => (
                      <CMSLink
                        {...subNavItem.link}
                        key={a}
                        size="lg"
                        appearance="link"
                        className="hover:no-underline cursor-pointer text-lg"
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
          {/* <Button asChild className="">
            <Link href="/courses">Kurse</Link>
          </Button> */}
        </div>
      </div>
    </>
  )
}
