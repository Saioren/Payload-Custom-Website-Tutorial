import slug from '../Fields/slug'
import meta from '../Fields/meta';
import { CollectionConfig } from 'payload/types'

const Study: CollectionConfig = {
    slug: 'studies',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'featuredImage',
            label: 'Featured Image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'client',
            label: 'Client',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'location',
            label: 'Location',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'categories',
            label: 'Categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
          },
        slug,
        meta,
    ],
}

export default Study;