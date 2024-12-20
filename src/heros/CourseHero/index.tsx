import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Course } from '@/payload-types'

import { Media } from '@/components/Media'

export const CourseHero: React.FC<{
  course: Course
}> = ({ course }) => {
  const { categories, image, start, end, meta: { image: metaImage } = {}, title } = course
  return (
    <div className="relative -mt-[10.4rem] flex items-end">
      {image && typeof image !== 'string' && (
        <>
          <Media
            fill
            priority={false}
            loading="lazy"
            imgClassName="-z-10 object-cover"
            resource={image}
          />
        </>
      )}
      <div className="container z-10 relative lg:grid lg:grid-cols-[1fr_48rem_1fr] text-white pb-8">
        <div className="col-start-1 col-span-1 md:col-start-2 md:col-span-2">
          <div className="uppercase text-sm mb-6">
            {start && <time dateTime={start}>{formatDateTime(start)}</time>}
            {end && (
              <>
                {' - '}
                <time dateTime={end}>{formatDateTime(end)}</time>
              </>
            )}
          </div>
          <div className="uppercase text-sm mb-6">
            {categories?.map((category, index) => {
              if (typeof category === 'object' && category !== null) {
                const { title: categoryTitle } = category

                const titleToUse = categoryTitle || 'Untitled category'

                const isLast = index === categories.length - 1

                return (
                  <React.Fragment key={index}>
                    {titleToUse}
                    {!isLast && <React.Fragment>, &nbsp;</React.Fragment>}
                  </React.Fragment>
                )
              }
              return null
            })}
          </div>

          <div className="">
            <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl">{title}</h1>
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {metaImage && typeof metaImage !== 'string' && (
          <Media
            fill
            priority={false}
            loading="lazy"
            imgClassName="-z-10 object-cover"
            resource={metaImage}
          />
        )}
        <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
      </div>
    </div>
  )
}
