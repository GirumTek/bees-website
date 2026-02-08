import { defineField, defineType } from 'sanity'

export const execType = defineType({
  name: 'executive',
  title: 'Executive Board',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
  
    defineField({
      name: 'orderRank',
      title: 'Order Rank',
      type: 'number',
      description: '1 for CEO, 2 for Vice CEO, etc.',
    }),
    
    defineField({
      name: 'image',
      title: 'Headshot',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})