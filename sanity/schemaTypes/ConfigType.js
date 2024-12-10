import { defineField, defineType } from 'sanity';
import { CogIcon } from '@sanity/icons';

export const ConfigType = defineType({
  name: 'Config',
  title: 'Config',
  type: 'document',
  icon: CogIcon, // Icono para el tipo de documento
  fields: [
    defineField({
      name: 'CompanyTitle',
      title: 'Company Name', // Nombre de la empresa
      type: 'string',
      validation: Rule => Rule.required().error('Company name is required'),
    }),
    defineField({
      name: 'LogoImage',
      title: 'Logo Image', // Imagen del logo
      type: 'image',
      options: {
        hotspot: true, // Permite recortar y enfocar la imagen
      },
      validation: Rule => Rule.required().error('Logo image is required'),
      fields: [
        defineField({
          name: 'altText',
          title: 'Alt Text for Logo', // Texto alternativo del logo
          type: 'string',
          validation: Rule => Rule.max(200).warning('Alt text should be under 200 characters'),
        }),
      ],
    }),
    defineField({
      name: 'IconImage',
      title: 'Meta Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required().error('Icon image is required'),
      fields: [
        defineField({
          name: 'altText',
          title: 'Alt Text for Icon', // Texto alternativo del ícono
          type: 'string',
          validation: Rule => Rule.max(200).warning('Alt text should be under 200 characters'),
        }),
      ],
    }),
    defineField({
      name: 'MetaTitle',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required().error('Meta title is required'),
    }),
    defineField({
      name: 'MetaDescription',
      title: 'Meta Description',
      type: 'string',
      validation: Rule => Rule.required().error('Meta description is required'),
    }),
  ],
});
