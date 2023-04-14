import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faqs',
  title: 'FAQs',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'Id',
      description: 'DO NOT CHANGE! For order of display on Resource page.',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: 'Title but all lowercase. ** Slug MUST match the Slug on respected webpage **',
    }),
    defineType({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          title: 'FAQ',
          name: 'FAQ',
          type: 'object',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'text',
            },
          ],
        },
      ],
    }),
  ],
})
