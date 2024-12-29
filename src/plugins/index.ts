import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
import { redirectsPlugin } from '@payloadcms/plugin-redirects'
import { uploadthingStorage } from '@payloadcms/storage-uploadthing'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { Plugin } from 'payload'
import { revalidateRedirects } from '@/hooks/revalidateRedirects'
import { GenerateTitle, GenerateURL } from '@payloadcms/plugin-seo/types'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
import { s3Storage } from '@payloadcms/storage-s3'

import { Course, Page } from '@/payload-types'
import { getServerSideURL } from '@/utilities/getURL'

const generateTitle: GenerateTitle<Course | Page> = ({ doc }) => {
  return doc?.title ? `${doc.title} | Mensch Hund Systeme` : 'Mensch Hund Systeme'
}

const generateURL: GenerateURL<Course | Page> = ({ doc }) => {
  const url = getServerSideURL()

  return doc?.slug ? `${url}/${doc.slug}` : url
}

export const plugins: Plugin[] = [
  redirectsPlugin({
    collections: ['pages', 'courses'],
    overrides: {
      // @ts-expect-error
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'from') {
            return {
              ...field,
              admin: {
                description: 'You will need to rebuild the website when changing this field.',
              },
            }
          }
          return field
        })
      },
      hooks: {
        afterChange: [revalidateRedirects],
      },
    },
  }),
  nestedDocsPlugin({
    collections: ['categories', 'pages'],
  }),
  seoPlugin({
    generateTitle,
    generateURL,
  }),

  formBuilderPlugin({
    fields: {
      payment: false,
    },
    beforeEmail: (emailsToSend, beforeChangeParams) => {
      const { data } = beforeChangeParams

      const subjectField = data.submissionData.find((field) => field.field === 'subject')
      const ccField = data.submissionData.find((field) => field.field === 'cc')

      emailsToSend.forEach((email) => {
        email.cc = ccField ? ccField.value : ''
        email.subject = subjectField ? subjectField.value : 'Kontakt'
      })

      return emailsToSend
    },
    formOverrides: {
      fields: ({ defaultFields }) => {
        return defaultFields.map((field) => {
          if ('name' in field && field.name === 'confirmationMessage') {
            return {
              ...field,
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    FixedToolbarFeature(),
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                  ]
                },
              }),
            }
          }
          return field
        })
      },
    },
  }),

  payloadCloudPlugin(),
  uploadthingStorage({
    collections: {
      media: true,
    },
    options: {
      token: process.env.UPLOADTHING_TOKEN,
      acl: 'public-read',
    },
  }),
  // s3Storage({
  //   collections: {
  //     media: {
  //       prefix: 'media',
  //     },
  //   },
  //   bucket: process.env.S3_BUCKET || '',
  //   config: {
  //     credentials: {
  //       accessKeyId: process.env.S3_ACCESS_KEY_ID || '',
  //       secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || '',
  //     },
  //     region: process.env.S3_REGION,
  //     endpoint: process.env.S3_ENDPOINT,
  //     forcePathStyle: true,
  //     // ... Other S3 configuration
  //   },
  // }),
]
