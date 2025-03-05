import { cn } from '@/utilities/cn'
import RichText from '@/components/RichText'
import type { TeaserBlock as TeaserBlockProps } from '@/payload-types'
import { ImageMedia } from '@/components/Media/ImageMedia'
import Link from 'next/link'

export const TeaserBlock: React.FC<TeaserBlockProps> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
  }

  return (
    <div className="container my-16">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { link, richText, size, headline, media } = col

            const href =
              link.type === 'reference' &&
              typeof link.reference?.value === 'object' &&
              link.reference.value.slug
                ? `${link.reference?.relationTo !== 'pages' ? `/${link.reference?.relationTo}` : ''}/${
                    link.reference.value.slug
                  }`
                : link.url

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]} rounded border `, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                <Link href={href || link.url || ''} target={link.newTab ? '_blank' : '_self'}>
                  {media && <ImageMedia resource={media} imgClassName="rounded" />}

                  {headline && <h2 className="font-mono font-bold text-xl">{headline}</h2>}
                  {richText && <RichText data={richText} enableGutter={false} />}
                </Link>
              </div>
            )
          })}
      </div>
    </div>
  )
}
