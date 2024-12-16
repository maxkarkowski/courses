import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Organizers: CollectionConfig = {
  slug: 'organizers',
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
    { name: 'relatedCourses', type: 'join', collection: 'courses', on: 'organizer' },
  ],
}
