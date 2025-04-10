import type { CollectionConfig } from 'payload'

import {
  BlocksFeature,
  FixedToolbarFeature,
  HeadingFeature,
  HorizontalRuleFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Banner } from '../../blocks/Banner/config'
import { Code } from '../../blocks/Code/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidateCourse } from './hooks/revalidateCourses'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { slugField } from '@/fields/slug'
import { isValidURL } from '@/utilities/validUrl'

export const Courses: CollectionConfig<'courses'> = {
  slug: 'courses',
  labels: {
    singular: {
      en: 'Course',
      de: 'Seminar',
    },
    plural: {
      en: 'Courses',
      de: 'Seminare',
    },
  },

  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a course is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'courses'>
  defaultPopulate: {
    title: true,
    slug: true,
    start: true,
    meta: {
      image: true,
      description: true,
    },
    form: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    listSearchableFields: ['title'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'courses',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'courses',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'form',
      type: 'relationship',
      hasMany: false,
      relationTo: 'forms',

      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'start',
      type: 'date',
      required: true,
      defaultValue: () => new Date(),

      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'd.MMMM.yyyy',
          timeFormat: 'HH:mm',
        },
      },
    },
    {
      name: 'end',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'd.MMMM.yyyy HH:mm',
          timeFormat: 'HH:mm',
        },
      },
    },
    {
      name: 'inquiry-url',
      type: 'text',
      label: 'Orga URL',
      required: false,
      admin: {
        position: 'sidebar',
      },
      validate: (value) => {
        if (!value) return true // Allow empty values
        return isValidURL(value) || 'Invalid URL'
      },
    },
    {
      name: 'organizer',
      hasMany: false,
      type: 'relationship',
      relationTo: 'organizers',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      index: true,
      localized: true,
      hasMany: true,
      admin: {
        position: 'sidebar',
      },
    },

    {
      type: 'tabs',
      tabs: [
        {
          fields: [
            {
              name: 'content',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h1', 'h2', 'h3', 'h4'] }),
                    BlocksFeature({ blocks: [Banner, Code, MediaBlock] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    HorizontalRuleFeature(),
                  ]
                },
              }),
              label: false,
              required: false,
            },
          ],
          label: 'Content',
        },

        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
        position: 'sidebar',
      },
      hooks: {
        beforeChange: [
          ({ siblingData, value }) => {
            if (siblingData._status === 'published' && !value) {
              return new Date()
            }
            return value
          },
        ],
      },
    },

    ...slugField(['start', 'title']),
  ],

  hooks: {
    afterChange: [revalidateCourse],
    afterDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
