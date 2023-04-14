import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    // Footer *************************
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Footer title all lowercase',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [
        {
          title: 'Social Links',
          type: 'object',
          fields: [
            {
              title: 'Social Network',
              name: 'socialNetwork',
              type: 'string',
            },
            {
              title: 'Link',
              name: 'url',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'name',
      title: 'Contact Name',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'realtorLogo',
      title: 'Realtor Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
