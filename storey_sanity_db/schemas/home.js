import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
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
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      description: 'Home title but all lowercase. ** REQUIRED ** ',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    // Logo *************************
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      validation: (Rule) => Rule.required(),
      description: '** REQUIRED ** ',
      options: {
        hotspot: true,
      },
    }),
    // Hero *************************
    defineType({
      name: 'hero',
      title: 'Hero',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Hero Title',
          type: 'text',
        }),
        defineField({
          name: 'slug',
          title: 'Hero Slug',
          type: 'slug',
          validation: (Rule) => Rule.required(),
          description: 'Hero title but all lowercase. ** REQUIRED **',
        }),
        defineField({
          name: 'mainImage',
          title: 'Hero Main image',
          type: 'image',
          validation: (Rule) => Rule.required(),
          description: '** REQUIRED ** ',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'body',
          title: 'Hero Body',
          type: 'blockContent',
        }),
        defineField({
          name: 'heroButton',
          type: 'string',
          title: 'Hero Button text to direct user to Contact page ** REQUIRED **',
          validation: (Rule) => Rule.required(),
        }),
      ],
    }),

    // Specialty Cards *************************
    defineType({
      name: 'cards',
      title: 'Cards',
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
            defineField({
              name: 'slug',
              title: 'Slug Card 1',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED ** MUST BE EXACT SAME AS NAVIGATION SLUG **',
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 1',
              type: 'image',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED ** ',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 1',
              type: 'text',
              validation: (Rule) => Rule.max(180),
              description: '** MAX 180 CHARACTERS ** ',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 1',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'This text will be shown on card button ** REQUIRED **',
              options: {
                source: 'title',
                maxLength: 20,
              },
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
            defineField({
              name: 'slug',
              title: 'Slug Card 2',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED ** MUST BE EXACT SAME AS NAVIGATION SLUG **',
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 2',
              type: 'image',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED **',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 2',
              type: 'text',
              validation: (Rule) => Rule.max(180),
              description: '** MAX 180 CHARACTERS ** ',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 2',
              type: 'string',
              validation: (Rule) => Rule.required(),
              description: 'This text will be shown on card button ** REQUIRED **',
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
            defineField({
              name: 'slug',
              title: 'Slug Card 3',
              type: 'slug',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED ** MUST BE EXACT SAME AS NAVIGATION SLUG **',
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 3',
              type: 'image',
              validation: (Rule) => Rule.required(),
              description: '** REQUIRED **',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 3',
              type: 'text',
              validation: (Rule) => Rule.max(180),
              description: '** MAX 180 CHARACTERS ** ',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 3',
              type: 'string',
              validation: (Rule) => Rule.required(),

              description: 'This text will be shown on card button ** REQUIRED **',
            }),
          ],
        }),
      ],
    }),

    // About section on Homepage *************************
    defineType({
      name: 'homeAbout',
      title: 'About Section on Homepage',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          validation: (Rule) => Rule.required(),
          description: 'About title but all lowercase.',
        }),
        defineField({
          name: 'videoUrl',
          title: 'About Video URL',
          type: 'url',
          description:
            'Needs to be in https://www.youtube.com/watch?v=ViDeOID1234 or https://youtu.be/ViDeoId1234 format!',
          options: {
            hotspot: true,
          },
        }),
        defineField({
          name: 'body',
          title: 'About body on Hompage',
          type: 'text',
          description: '** MAX 300 CHARACTERS **',
          validation: (Rule) => Rule.max(300),
        }),
        defineField({
          name: 'button',
          title: 'Button Text for About Homepage',
          type: 'string',
          validation: (Rule) => Rule.required(),

          description: 'This text will be shown on button ** REQUIRED **',
        }),
      ],
    }),

    // Se habla español *************************
    defineType({
      name: 'language',
      title: 'Se Habla Español',
      type: 'document',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
        }),
        defineField({
          name: 'slug',
          title: 'Slug',
          type: 'slug',
          validation: (Rule) => Rule.required(),
          description: 'Si Habla title but all lowercase. ** REQUIRED **',
          options: {
            source: 'title',
            maxLength: 96,
          },
        }),
        defineField({
          name: 'body',
          title: 'Si Habla body on Hompage',
          type: 'text',
        }),
      ],
    }),
  ],
})
