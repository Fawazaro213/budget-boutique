import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'budget-boutique',

  projectId: 'p3dxqnnz',
  dataset: 'budget-boutique',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})