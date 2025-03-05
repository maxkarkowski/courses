import clsx from 'clsx'
import React from 'react'
import RichText from '@/components/RichText'

import { Card } from '../../components/Card'
import { Course } from '@/payload-types'
import { SerializedEditorState } from '@payloadcms/richtext-lexical/lexical'

export type RelatedCoursesProps = {
  className?: string
  docs?: Course[]
  introContent?: SerializedEditorState
}

export const RelatedCourses: React.FC<RelatedCoursesProps> = (props) => {
  const { className, docs, introContent } = props

  return (
    <div className={clsx('lg:container', className)}>
      {introContent && <RichText data={introContent} enableGutter={false} />}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
        {docs?.map((doc, index) => {
          if (typeof doc === 'string') return null

          return <Card key={index} doc={doc} relationTo="courses" showCategories />
        })}
      </div>
    </div>
  )
}
