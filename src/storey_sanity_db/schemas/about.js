import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sanity Title',
      description: 'NOT Displayed on webpages',
      type: 'string',
    }),
    defineField({
      name: 'webpageTitle',
      title: 'Webpage Title',
      description: 'Displayed on webpage',
      type: 'string',
    }),
    defineType({
      name: 'abouts',
      title: 'Abouts List',
      type: 'array',
      of: [
        {
          title: 'Person',
          name: 'person',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              description: '** REQUIRED **',
              type: 'string',
              validation: (Rule) => {
                Rule.required()
              },
            },
            defineField({
              name: 'mainImage',
              title: 'Main image',
              type: 'image',
              description: '** REQUIRED **',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
            {
              name: 'quickBio',
              title: 'Quick Bio',
              description:
                'Summary of long bio. Displayed under photo on About page. ** MAX 120 CHARACTERS **',
              type: 'text',
              validation: (Rule) => {
                Rule.max(120)
              },
            },
            {
              title: 'Bio',
              name: 'bio',
              type: 'blockContent',
              description: '** REQUIRED ** MAX 1200 CHARACTERS ** ',
              validation: (Rule) => {
                Rule.max(1200), Rule.required()
              },
            },
          ],
        },
      ],
    }),
  ],
})
