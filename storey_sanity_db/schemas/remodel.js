import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'remodel',
  title: 'Remodel Consultation',
  type: 'document',
  fields: [
    // Title *************************
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Remodel Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: '** Slug MUST match the Slug on Remodel FAQ page **',
    }),
    // Hero *************************
    defineType({
      name: 'hero',
      title: 'Hero',
      type: 'document',
      fields: [
        defineField({
          name: 'webpageTitle',
          title: 'Webpage Title',
          type: 'string',
          description:
            'This is the title that will be displayed at the top of Buy/Sell webpage. ** MAX 90 CHARACTERS **',
          validation: (Rule) => Rule.max(90),
        }),
        defineField({
          name: 'mainImage',
          title: 'Hero Main image',
          type: 'image',
          validation: (Rule) => Rule.required(),

          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'buttonText',
          title: 'Plan remodel consult button text',
          type: 'string',
          description: 'Text that appears on Button',
        }),
      ],
    }),

    // Plan A Remodel *************************
    defineType({
      name: 'remodelPlan',
      title: 'Plan A Remodel',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          description: 'Displayed on webpage',
          type: 'string',
        }),
        defineField({
          name: 'mainImage',
          title: 'Remodel Image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'blockContent',
          description: '** MAX 500 CHARACTERS **',
          validation: (Rule) => Rule.max(500),
        }),
        defineField({
          name: 'buttonText',
          title: 'Remodeling Consult FAQ button text',
          type: 'string',
          description: 'Text that appears on Button',
        }),
      ],
    }),

    // Before & After
    defineType({
      name: 'remodelImg',
      title: 'Remodel/Before & After Images',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'imagePairs',
          title: 'Before & After Image Pairs',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'beforeImage',
                  title: 'Before Remodeling',
                  type: 'image',
                  options: {
                    hotspot: true, // Enables the hotspot functionality if desired
                  },
                  description: 'Upload the image of the space before remodeling.',
                },
                {
                  name: 'afterImage',
                  title: 'After Remodeling',
                  type: 'image',
                  options: {
                    hotspot: true, // Enables the hotspot functionality if desired
                  },
                  description: 'Upload the image of the space after remodeling.',
                },
              ],
              preview: {
                select: {
                  before: 'beforeImage',
                  after: 'afterImage',
                },
                prepare(selection) {
                  return {
                    title: 'Before & After',
                    media: selection.before, // This is to show just the "before" image in the preview. You can customize this.
                  }
                },
              },
            },
          ],
          description: 'Add pairs of before and after images.',
        }),
      ],
    }),

    // Remodel YouTube Video ************************
    defineType({
      name: 'videoUrl',
      title: 'Remodel Video URL',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Video Title',
          description: 'Title on webpage ** MAX 40 CHARACTERS',
          validation: (Rule) => Rule.max(40),
          type: 'string',
        }),
        defineField({
          name: 'url',
          title: 'Video URL',
          type: 'url',
          description:
            'Needs to be in https://www.youtube.com/watch?v=ViDeOID1234 or https://youtu.be/ViDeoId1234 format!',
          options: {
            hotspot: true,
          },
        }),
      ],
    }),
  ],
})
