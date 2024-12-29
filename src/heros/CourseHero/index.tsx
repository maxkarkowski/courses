import { formatDateTime } from 'src/utilities/formatDateTime'
import React from 'react'

import type { Course } from '@/payload-types'

import { Media } from '@/components/Media'

export const CourseHero: React.FC<{
  course: Course
}> = ({ course }) => {
  const { categories, image, start, end, meta: { image: metaImage } = {}, title } = course
  return (
    <div className="relative flex items-start">
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
      <div className="container ">
        <div className="">
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
      {metaImage && typeof metaImage !== 'string' && (
        <div className="min-h-[80vh] select-none">
          <Media
            fill
            priority={false}
            loading="lazy"
            imgClassName="-z-10 object-cover"
            resource={metaImage}
          />
        </div>
      )}
    </div>
  )
}
