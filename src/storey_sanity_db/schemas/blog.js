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
      description: 'REQUIRED',
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
      description: 'This help with SEO',
      options: {
        list: [
          // dropdown options in Sanity to pick from
          {value: 'buy', title: 'Buy'},
          {value: 'sell', title: 'Sell'},
          {value: 'investment', title: 'Investment'},
          {value: 'remodel', title: 'Remodel'},
          {value: 'consult', title: 'Consult'},
          {value: 'property management', title: 'Property Management'},
        ],
      },
    },

    {
      // adds tags
      name: 'tags',
      type: 'array',
      description: `Add "tags" for SEO. Use single words or small phrases. 
        ie. Property Management, Investment, Rental, Denver Real Estate, etc.`,
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
