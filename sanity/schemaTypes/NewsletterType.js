import {
  Mail
} from "lucide-react"
import { defineField, defineType } from 'sanity';

export const newsletterType = defineType({
  name: 'Newsletter',
  title: 'Newsletter',
  type: 'document',
  icon: Mail,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The headline for the newsletter section',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description displayed under the title',
    }),
    defineField({
      name: 'placeholder',
      title: 'Email Input Placeholder',
      type: 'string',
      description: 'The placeholder text for the email input field',
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'The text displayed on the subscribe button',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle: subtitle ? subtitle.slice(0, 50) + '...' : 'No description',
        media: Mail,
      };
    },
  },
});
