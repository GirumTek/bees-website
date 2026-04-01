import { defineField, defineType } from 'sanity'

export const impactType = defineType({
  name: 'impact',
  title: 'Impact Items',
  type: 'document',
  fields: [
    defineField({
      name: 'stat',
      title: '1. Number / Statistic',
      type: 'string',
      description: 'The big green text (e.g., "50+" or "100%")',
    }),
    defineField({
      name: 'title',
      title: '2. Metric / Heading',
      type: 'string',
      description: 'The bold text under the number (e.g., "Active Members")',
    }),
    defineField({
      name: 'description',
      title: '3. Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'The smaller text at the bottom explaining the impact.',
    }),
  ],
})