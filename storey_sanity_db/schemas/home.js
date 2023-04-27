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
      description: 'Home title but all lowercase. Click "Generate" button --->',
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

          description: 'Hero title but all lowercase. Click "Generate" button --->',
          options: {
            source: 'title',
            maxLength: 96,
          },
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
          name: 'body',
          title: 'Hero Body',
          type: 'text',
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
              description: '** MUST BE EXACT SAME AS NAVIGATION SLUG **',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 1',
              type: 'image',
              validation: (Rule) => Rule.required(),

              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 1',
              type: 'text',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 1',
              type: 'string',
              validation: (Rule) => Rule.required(),

              description: 'This text will be shown on card button',
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

              description: 'Card title but all lowercase. Click "Generate" button --->',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 2',
              type: 'image',
              validation: (Rule) => Rule.required(),

              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 2',
              type: 'text',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 2',
              type: 'string',
              validation: (Rule) => Rule.required(),

              description: 'This text will be shown on card button',
              options: {
                source: 'title',
                maxLength: 20,
              },
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

              description: 'Card title but all lowercase. Click "Generate" button --->',
              options: {
                source: 'title',
                maxLength: 96,
              },
            }),
            defineField({
              name: 'mainImage',
              title: 'Main image Card 3',
              type: 'image',
              validation: (Rule) => Rule.required(),

              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'sub',
              title: 'Body Card 3',
              type: 'text',
            }),
            defineField({
              name: 'button',
              title: 'Button Text Card 3',
              type: 'string',
              validation: (Rule) => Rule.required(),

              description: 'This text will be shown on card button',
              options: {
                source: 'title',
                maxLength: 20,
              },
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

          description: 'About title but all lowercase. Click "Generate" button --->',
          options: {
            source: 'title',
            maxLength: 96,
          },
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
        }),
        defineField({
          name: 'button',
          title: 'Button Text for About Homepage',
          type: 'string',
          validation: (Rule) => Rule.required(),

          description: 'This text will be shown on button',
          options: {
            source: 'title',
            maxLength: 20,
          },
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

          description: 'Si Habla title but all lowercase. Click "Generate" button --->',
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
