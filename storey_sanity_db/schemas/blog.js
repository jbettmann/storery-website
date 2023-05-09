import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'title but all lowercase. Click "Generate" button --->',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      description: 'Author of blog',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: '** REQUIRED **',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    {
      name: 'projectType', // name to find in fetch
      title: 'Project type', // options that shows on Sanity studio
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Allows for searching by user ** REQUIRED **',
      options: {
        list: [
          // dropdown options in Sanity to pick from
          {value: 'Buy', title: 'Buy'},
          {value: 'Sell', title: 'Sell'},
          {value: 'Investment', title: 'Investment'},
          {value: 'Remodel', title: 'Remodel'},
          {value: 'Consult', title: 'Consult'},
          {value: 'Property Management', title: 'Property Management'},
        ],
      },
    },

    {
      // adds tags
      name: 'tags',
      type: 'array',
      description: `Shown at bottom of blog post. Helps with searching. Use single words or small phrases. ie. Property Management, Investment, Rental, Denver Real Estate, etc. `,
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
