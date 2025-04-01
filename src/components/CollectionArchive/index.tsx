import { cn } from 'src/utilities/cn'
import React from 'react'

import { Card, CardCourseData } from '@/components/Card'

export type Props = {
  courses: CardCourseData[]
}

export const CollectionArchive: React.FC<Props> = (props) => {
  const { courses } = props
  return (
    <div className={cn('container mx-auto')}>
      <div>
        <div className="flex gap-8 flex-col">
          {courses?.map((result, index) => {
            if (typeof result === 'object' && result !== null) {
              return (
                <div className="col-span-3" key={index}>
                  <Card className="h-full" doc={result} relationTo="courses" showCategories />
                </div>
              )
            }

            return null
          })}
        </div>
      </div>
    </div>
  )
}
