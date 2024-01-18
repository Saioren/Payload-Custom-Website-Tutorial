import { Block } from 'payload/types';

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'backgroundColor',
      type: 'radio',
      label: 'Background Color',
      defaultValue: 'none',
      admin: {
        layout: 'horizontal',
      },
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'Red',
          value: 'red',
        },
        {
          label: 'Blue',
          value: 'blue',
        },
        {
          label: 'Green',
          value: 'green',
        },
      ]
    },
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'width',
              label: 'Column Width',
              type: 'select',
              defaultValue: 'full',
              options: [
                {
                  label: 'One Third',
                value: 'third',
                },
                {
                  label: 'Half',
                value: 'half',
                },
                {
                  label: 'Two Third',
                value: 'twoThirds',
                },
                {
                  label: 'Full Width',
                value: 'full',
                },
              ],
            },
            {
              name: 'alignment',
              label: 'Alignment',
              type: 'select',
              required: true,
              options: [
                {
                  label: 'Left',
                  value: 'left',
                },
                {
                  label: 'Center',
                  value: 'center',
                },
                {
                  label: 'Right',
                  value: 'right',
                },
              ],
                admin: {
                  width: '50%',
                },
            },
          ],
        },
        {
          name: 'content',
          type: 'richText',
          required: true,
        },
        {
          type: 'row',
          fields: [
            {
              name: 'paddingTop',
              label: 'Padding Top',
              type: 'select',
              defaultValue: 'medium',
              options: [
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ],
              admin: {
                width: '50%',
              },
            },
            {
              name: 'paddingBottom',
              label: 'Padding Bottom',
              type: 'select',
              defaultValue: 'medium',
              options: [
                {
                  label: 'Small',
                  value: 'small',
                },
                {
                  label: 'Medium',
                  value: 'medium',
                },
                {
                  label: 'Large',
                  value: 'large',
                },
              ],
              admin: {
                width: '50%',
              },
            },
          ]
        },
      ],
    },
  ],
};


export default Content;
