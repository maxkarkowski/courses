import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'

import { CourseHero } from '@/heros/CourseHero'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'
import { FormBlock } from '@/blocks/Form/Component'
import { formatDateTime } from '@/utilities/formatDateTime'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const courses = await payload.find({
    collection: 'courses',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = courses.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

export default async function Course({ params: paramsPromise }: Args) {
  const { slug = '' } = await paramsPromise
  const url = '/courses/' + slug
  const course = await queryCourseBySlug({ slug })
  if (!course) return <PayloadRedirects url={url} />

  const subject = `${course.title} am ${formatDateTime(course.start)}`
  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <LivePreviewListener />

      <CourseHero course={course} />

      <div className="flex flex-col items-center gap-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              {course.content && typeof course.content !== 'string' && (
                <>
                  <RichText className="" data={course.content} enableGutter={false} />
                </>
              )}
              {course.categories &&
                typeof course.categories[0] !== 'string' &&
                course.categories[0].description && (
                  <RichText
                    className=""
                    data={course.categories[0].description}
                    enableGutter={false}
                    enableProse={true}
                  />
                )}
            </div>
            <div>
              {course.form && typeof course.form !== 'string' && (
                <div className="max-w-[48rem] mx-auto">
                  <h4 className="text-2xl font-bold text-accent-foreground mb-4">Anfrage</h4>
                  <FormBlock
                    /* @ts-expect-error: handles form */
                    form={course.form}
                    subject={subject}
                    cc={typeof course.organizer !== 'string' ? course.organizer?.mail : undefined}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const course = await queryCourseBySlug({ slug })

  return generateMeta({ doc: course })
}

const queryCourseBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'courses',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
