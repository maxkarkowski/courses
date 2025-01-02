import { CMSLink } from '@/components/Link'
import type { Header as HeaderType } from '@/payload-types'
import { cn } from '@/utilities/cn'

export const Nav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const mainMenuClass = 'hover:no-underline cursor-pointer text-xl'

  return (
    <>
      <div className="mx-auto w-full py-4 ">
        <div className="flex flex-col md:flex-row gap-4 items-start justify-center md:justify-start">
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
                  <div className="flex flex-col gap-4">
                    <ul className="grid w-full gap-3 p-4 md:p-0 grid-cols-2 ">
                      {subNavItems.map(({ link, description }, a) => (
                        <li key={a}>
                          <CMSLink {...link} className="flex" appearance="link" />
                          {description && <p className="text-sm italic">{description}</p>}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
