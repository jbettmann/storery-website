import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'buySell',
  title: 'Buy/Sell',
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
      name: 'buySellTitle',
      title: 'Webpage Title',
      type: 'string',
      description:
        'This is the title that will be displayed at the top of Buy/Sell webpage. ** MAX 90 CHARACTERS **',
      validation: (Rule) => Rule.max(90),
    }),
    // Buy *************************
    defineType({
      name: 'buy',
      title: 'Buy',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Toggle/Button title on webpage ',
        }),
        defineField({
          name: 'slug',
          title: 'Buy Slug',
          type: 'slug',
          validation: (Rule) => Rule.required(),
          description:
            'Buy title but all lowercase. ** Slug MUST match the Slug on Buying FAQ page **',
        }),
        // Hero *************************
        defineType({
          name: 'hero',
          title: 'Buy - Hero',
          type: 'document',
          fields: [
            defineField({
              name: 'description',
              title: 'Buy description',
              description:
                'Keep short and "skimable". Appears above "Why Buy With Storey" checklist. ** MAX 500 CHARACTERS **',
              validation: (Rule) => Rule.max(500),
              type: 'text',
            }),
            defineField({
              name: 'mainImage',
              title: 'Hero Main Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
          ],
        }),

        // Why Buy Checklist *************************
        defineType({
          name: 'whyChecklist',
          title: 'Why Buy with Storey Checklist',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Why Buy Checklist Title',
              type: 'string',
            }),
            defineType({
              name: 'checklist',
              title: 'Why Buy with Storey Checklist',
              type: 'array',
              of: [
                {
                  title: 'Why?',
                  name: 'why',
                  type: 'object',
                  fields: [
                    {
                      title: 'Checklist Item',
                      name: 'item',
                      type: 'string',
                      validation: (Rule) => Rule.max(60),
                    },
                  ],
                },
              ],
            }),
          ],
        }),

        // Lender Referrals *************************
        defineType({
          name: 'lenders',
          title: 'Lender Referrals',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Lender Referral Title',
              description: 'Title of tab/button on Buy/Sell web page',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Lender Slug',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: 'Lender title but all lowercase.',
            }),

            defineType({
              name: 'lendersList',
              title: 'List of referred Lenders',
              type: 'array',
              of: [
                {
                  title: 'Lender',
                  name: 'lender',
                  type: 'object',
                  fields: [
                    {
                      title: 'Full Name',
                      name: 'name',
                      type: 'string',
                    },
                    {
                      title: 'Company Name',
                      name: 'company',
                      type: 'string',
                    },
                    {
                      name: 'mainImage',
                      title: 'Lenders Logo',
                      type: 'image',
                      validation: (Rule) => Rule.required(),
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      title: 'Website Link',
                      name: 'url',
                      type: 'url',
                    },
                    {
                      title: 'Email',
                      name: 'email',
                      type: 'email',
                    },
                    {
                      title: 'Phone',
                      name: 'phone',
                      type: 'string',
                    },
                    {
                      title: 'Persons Position/Title',
                      name: 'position',
                      type: 'string',
                      description: '** MAX 40 CHARACTERS **',
                      validation: (Rule) => Rule.max(40),
                    },
                  ],
                },
              ],
            }),
          ],
        }),

        // School Districts *************************
        defineType({
          name: 'schoolDistricts',
          title: 'School Districts',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'School Districts Title',
              description: 'Title of tab/button on Buy/Sell web page',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'School Districts Slug',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: 'School District title but all lowercase.',
            }),
            defineField({
              name: 'sub',
              title: 'Sub Title',
              type: 'string',
              description: '** MAX 60 CHARACTERS **',
              validation: (Rule) => Rule.max(60),
            }),
            defineType({
              name: 'districtsList',
              title: 'List of School Districts',
              type: 'array',
              of: [
                {
                  title: 'List of Districts',
                  name: 'districts',
                  type: 'object',
                  fields: [
                    {
                      title: 'District',
                      name: 'name',
                      type: 'string',
                    },
                    {
                      name: 'mainImage',
                      title: 'School District Image',
                      type: 'image',
                      description: 'Simple square screenshot works. ** Required **',
                      validation: (Rule) => Rule.required(),
                      options: {
                        hotspot: true,
                      },
                    },
                    {
                      title: 'School District Link',
                      name: 'url',
                      type: 'url',
                    },
                  ],
                },
              ],
            }),
          ],
        }),
        // Buy YouTube Video ************************
        defineType({
          name: 'videoUrl',
          title: 'Buy Video URL',
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
        // Mortgage Calculator *************************
        defineType({
          name: 'mortgageCalculators',
          title: 'Mortgage Calculator',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Mortgage Calculator Title',
              description: 'Title of tab/button on Buy/Sell web page',
              type: 'string',
            }),
            defineField({
              name: 'slug',
              title: 'Mortgage Calculator Slug',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: 'Mortgage Calculator title but all lowercase.',
            }),
          ],
        }),
      ],
    }),

    // Sell *************************
    defineType({
      name: 'sell',
      title: 'Sell',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          description: 'Toggle/Button title on webpage',
        }),
        defineField({
          name: 'slug',
          title: 'Sell Slug',
          type: 'slug',
          validation: (Rule) => Rule.required(),
          description:
            'Sell title but all lowercase. ** Slug MUST match the Slug on Selling FAQ page **',
        }),

        // Hero *************************
        defineType({
          name: 'hero',
          title: 'Sell - Hero',
          type: 'document',
          fields: [
            defineField({
              name: 'description',
              title: 'Sell description',
              description:
                'Keep short and "skimable". Appears above "Why Sell With Storey" checklist. ** MAX 500 CHARACTERS **',
              validation: (Rule) => Rule.max(500),
              type: 'text',
            }),
            defineField({
              name: 'mainImage',
              title: 'Sell Hero Main Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            }),
          ],
        }),

        // Why Sell Checklist *************************
        defineType({
          name: 'whyChecklist',
          title: 'Why Sell with Storey Checklist',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineType({
              name: 'checklist',
              title: 'Why Sell with Storey Checklist',
              type: 'array',
              of: [
                {
                  title: 'Why?',
                  name: 'why',
                  type: 'object',
                  fields: [
                    {
                      title: 'Checklist Item',
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

        // Quick Selling Tip *************************
        defineType({
          name: 'quickSellTip',
          title: 'Quick Selling Tip',
          type: 'document',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              description: 'Displayed on webpage',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'blockContent',
              description: '** MAX 500 CHARACTERS **',
              validation: (Rule) => Rule.max(500),
            }),
            {
              name: 'mainImage',
              title: 'Quick Tip Image',
              type: 'image',
              validation: (Rule) => Rule.required(),
              options: {
                hotspot: true,
              },
            },
          ],
        }),
        // Sell YouTube Video ************************
        defineType({
          name: 'videoUrl',
          title: 'Sell Video URL',
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
    }),
  ],
})
