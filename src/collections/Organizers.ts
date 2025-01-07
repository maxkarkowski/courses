import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'
import { isValidURL } from '@/utilities/validUrl'

export const Organizers: CollectionConfig = {
  slug: 'organizers',
  labels: {
    singular: {
      en: 'Organizer',
      de: 'Organisator',
    },
    plural: {
      en: 'Organizers',
      de: 'Organisatoren',
    },
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: anyone,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'mail',
      type: 'email',
      required: true,
    },
    {
      name: 'url',
      type: 'text',
      required: false,
      validate: (value) => {
        if (!value) return true // Allow empty values
        return isValidURL(value) || 'Invalid URL'
      },
    },
    { name: 'relatedCourses', type: 'join', collection: 'courses', on: 'organizer' },
  ],
}
