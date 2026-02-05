import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { execType } from './execType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, execType], // 👈 Add it to the array
}