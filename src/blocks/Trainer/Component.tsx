import type { TrainerBlock as TrainerBlockProps } from '@/payload-types'
import RichText from '@/components/RichText'
import { Media } from '../../components/Media'
import type { StaticImageData } from 'next/image'
import { cn } from '@/utilities/cn'

type Props = TrainerBlockProps & {
  breakout?: boolean
  captionClassName?: string
  imgClassName?: string
  staticImage?: StaticImageData
  disableInnerContainer?: boolean
}
export const TrainerBlock: React.FC<Props> = (props) => {
  const { captionClassName, imgClassName, media, staticImage, disableInnerContainer, richText } =
    props
  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div className="container mx-auto">
      <div className="bg-card rounded border-border border  flex flex-col lg:flex-row justify-between">
        <div className="flex flex-row items-start p-4 justify-start self-start">
          {richText && <RichText className="mb-0" data={richText} enableGutter={false} />}
        </div>
        <div className="flex flex-col gap-2 max-w-[30rem] self-center">
          <Media imgClassName={cn('rounded', imgClassName)} resource={media} src={staticImage} />
          {caption && (
            <div
              className={cn(
                'mt-1',
                {
                  container: !disableInnerContainer,
                },
                captionClassName,
              )}
            >
              <RichText data={caption} enableGutter={false} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
