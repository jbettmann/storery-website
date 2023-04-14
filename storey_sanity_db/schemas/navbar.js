import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'nav',
  title: 'Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Navigation Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Navigation name all lowercase',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'id',
      title: 'Id',
      type: 'number',
      description: 'dictates order from left to right',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
  ],
})
