import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'investment',
  title: 'Investment',
  type: 'document',
  fields: [
    // Title *************************
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for this page only. Is NOT displayed on website.',
    }),
    defineField({
      name: 'webpageTitle',
      title: 'Webpage Title',
      type: 'string',
      description:
        'This is the title that will be displayed at the top of Buy/Sell webpage. ** MAX 90 CHARACTERS **',
      validation: (Rule) => Rule.max(90),
    }),
    defineField({
      name: 'slug',
      title: 'Investment Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: '** Slug MUST match the Slug on Investment FAQ page **',
    }),
    // Rental *************************
    defineType({
      name: 'rental',
      title: 'Rental',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Toggle/Button title on webpage ',
        }),

        // Hero *************************
        defineType({
          name: 'hero',
          title: 'Rental - Hero',
          type: 'document',
          fields: [
            defineField({
              name: 'mainImage',
              title: 'Rental Main Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'description',
              title: 'Rental description',
              description:
                'Keep short and "skimable". Appears above "Rental" bullet points. ** MAX 500 CHARACTERS **',
              validation: (Rule) => Rule.max(500),
              type: 'text',
            }),
          ],
        }),

        // Rental Help List *************************
        defineType({
          name: 'rentalHelpList',
          title: 'Rental Help List',
          type: 'document',
          fields: [
            defineType({
              name: 'list',
              title: 'List',
              type: 'array',
              of: [
                {
                  title: 'We Can help with...',
                  name: 'help',
                  type: 'object',
                  fields: [
                    {
                      title: 'Help List Item',
                      name: 'item',
                      type: 'string',
                      description: '** MAX 100 CHARACTERS **',
                      validation: (Rule) => Rule.max(100),
                    },
                  ],
                },
              ],
            }),
          ],
        }),

        // Rental Benefit Cards *************************
        defineType({
          name: 'benefits',
          title: 'Rental Benefits',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'Displayed on webpage ',
            }),
            defineType({
              name: 'cards',
              title: 'Rental Benefit Cards',
              type: 'document',
              fields: [
                // Card 1
                defineType({
                  name: 'card_1',
                  title: 'Card 1',
                  type: 'document',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    // defineField({
                    //   name: 'mainImage',
                    //   title: 'Main image Card 1',
                    //   type: 'image',
                    //   validation: (Rule) => Rule.required(),
                    //   options: {
                    //     hotspot: true,
                    //   },
                    // }),
                    defineField({
                      name: 'description',
                      title: 'Benefit Description for Card 1',
                      description: 'Keep short and "skimable". ** MAX 180 CHARACTERS **',
                      validation: (Rule) => Rule.max(180),
                      type: 'text',
                    }),
                  ],
                }),
                // Card 2
                defineType({
                  name: 'card_2',
                  title: 'Card 2',
                  type: 'document',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),

                    // defineField({
                    //   name: 'mainImage',
                    //   title: 'Main image Card 2',
                    //   type: 'image',
                    //   validation: (Rule) => Rule.required(),

                    //   options: {
                    //     hotspot: true,
                    //   },
                    // }),
                    defineField({
                      name: 'description',
                      title: 'Benefit Description for Card 2',
                      description: 'Keep short and "skimable". ** MAX 180 CHARACTERS **',
                      validation: (Rule) => Rule.max(180),
                      type: 'text',
                    }),
                  ],
                }),
                // Card 3
                defineType({
                  name: 'card_3',
                  title: 'Card 3',
                  type: 'document',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    // defineField({
                    //   name: 'mainImage',
                    //   title: 'Main image Card 3',
                    //   type: 'image',
                    //   validation: (Rule) => Rule.required(),

                    //   options: {
                    //     hotspot: true,
                    //   },
                    // }),
                    defineField({
                      name: 'description',
                      title: 'Benefit Description for Card 3',
                      description: 'Keep short and "skimable". ** MAX 180 CHARACTERS **',
                      validation: (Rule) => Rule.max(180),
                      type: 'text',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),

        // Property Management *************************
        defineType({
          name: 'propertyManagement',
          title: 'Property Management',
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
              title: 'Property Management Main Image',
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
              title: 'Current Rental Listings button text',
              type: 'string',
              description: 'Text that appears on Button',
            }),
          ],
        }),
      ],
    }),

    // Fix & Flip *************************
    defineType({
      name: 'fixFlip',
      title: 'Fix & Flip',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Toggle/Button title on webpage',
        }),
        // Fix & Flip Hero *************************
        defineType({
          name: 'hero',
          title: 'Fix & Flip - Hero',
          type: 'document',
          fields: [
            defineField({
              name: 'mainImage',
              title: 'Fix & Flip Hero Main Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'description',
              title: 'Fix & Flip Heading',
              description:
                'Keep short and "skimable". Appears below Rental/Fix & Flip toggle button. ** MAX 180 CHARACTERS **',
              validation: (Rule) => Rule.max(180),
              type: 'text',
            }),
            defineField({
              name: 'subDescription',
              title: 'Fix & Flip description',
              description:
                'Keep short and "skimable". Appears below Fix & Flip Heading. ** MAX 500 CHARACTERS **',
              validation: (Rule) => Rule.max(500),
              type: 'blockContent',
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
              title: 'Remodeling Consult redirect button',
              type: 'string',
              description: 'Text that appears on Button',
            }),
          ],
        }),
      ],
    }),

    // Investment YouTube Video ************************
    defineType({
      name: 'videoUrl',
      title: 'Investment Video URL',
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
