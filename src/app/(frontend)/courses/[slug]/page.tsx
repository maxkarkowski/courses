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
  /* @ts-ignore */
  const cc = course.organizer.mail

  return (
    <article className="pt-16 pb-16">
      <PageClient />

      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <LivePreviewListener />

      <CourseHero course={course} />

      <div className="flex flex-col items-center gap-6 pt-8">
        <div className="container">
          <RichText className="max-w-[48rem] mx-auto" data={course.content} enableGutter={false} />
          {/* @ts-ignore */}
          {course.form && <FormBlock form={course.form} subject={course.title} cc={cc} />}
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
