import {defineField, defineType} from 'sanity'
// Testimonials *************************
export default defineType({
  name: 'testimonials',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sanity Title',
      description: 'NOT Displayed on webpage',
      type: 'string',
    }),
    defineField({
      name: 'webpageTitle',
      title: 'Webpage Title',
      description: 'Displayed on webpage',
      type: 'string',
    }),
    defineType({
      name: 'testimonialList',
      title: 'Testimonial List',
      type: 'array',
      of: [
        {
          title: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            {
              title: 'Name',
              name: 'name',
              description: '(Optional)',
              type: 'string',
            },
            {
              title: 'Location',
              name: 'location',
              description: 'City, State (Optional)',
              type: 'string',
            },
            {
              title: 'Testimonial',
              name: 'testie',
              type: 'text',
              validation: (Rule) => {
                Rule.max(500), Rule.required()
              },
            },
            {
              name: 'category', // name to find in fetch
              title: 'Category of Testimonial',
              type: 'array',
              description:
                'For filtering purposes on development side. Not shown on website. There can be more then one. ** REQUIRED **',
              validation: (Rule) => Rule.required(),
              of: [
                {
                  title: 'List of Categories',
                  name: 'categoriesList',
                  type: 'string',
                  options: {
                    list: [
                      // dropdown options in Sanity to pick from
                      {value: 'buy', title: 'Buy'},
                      {value: 'sell', title: 'Sell'},
                      {value: 'investment', title: 'Investment'},
                      {value: 'remodel', title: 'Remodel'},
                      {value: 'consulting', title: 'Consulting'},
                      {value: 'property management', title: 'Property Management'},
                    ],
                  },
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
})
