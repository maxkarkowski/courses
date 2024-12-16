import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: {
    singular: {
      en: 'Category',
      de: 'Kategorie',
    },
    plural: {
      en: 'Categories',
      de: 'Kategorien',
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
    { name: 'relatedCourses', type: 'join', collection: 'courses', on: 'category' },
  ],
}
