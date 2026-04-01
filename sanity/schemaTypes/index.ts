import { type SchemaTypeDefinition } from 'sanity'
import { eventType } from './eventType'
import { execType } from './execType'
import { heroSlideType } from './heroSlideType'
import { impactType } from './impactType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, execType, heroSlideType,impactType],
}
