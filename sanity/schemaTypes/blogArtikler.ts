import {defineField, defineType} from 'sanity'

export const blogArtikler = defineType({
  name: 'blogartikler',
  title: 'Blog Artikler',
  type: 'document',
  fields: [
    defineField({
      name: 'Tittel',
      type: 'string',
      title: 'Tittel på Bloggen'
    }),
    defineField({
      name: 'introduksjon',
      type: 'string',
      title: 'introduksjon'
    }),
    defineField({
      name: 'introduksjonsbilde',
      type: 'image',
      title: 'Bilde til introduksjonen'
    }),
    defineField({
      name: 'tekst1',
      type: 'string',
      title: 'Tekst 1'
    }),
    defineField({
      name: 'bilde1',
      type: 'image',
      title: 'Bilde 1'
    }),
    defineField({
        name: 'tekst2',
        type: 'string',
        title: 'Tekst 2'
    }),
    defineField({
        name: 'bilde2',
        type: 'image',
        title: 'Bilde 2'
    }),
    defineField({
        name: 'tekst3',
        type: 'string',
        title: 'Tekst 3'
    }),
    defineField({
        name: 'bilde3',
        type: 'image',
        title: 'Bilde 3'
    }),
    defineField({
        name: 'tekst4',
        type: 'string',
        title: 'Tekst 4'
    }),
    defineField({
        name: 'bilde4',
        type: 'image',
        title: 'Bilde 4'
    }),
    defineField({
        name: 'tekst5',
        type: 'string',
        title: 'Tekst 5'
    }),
    defineField({
        name: 'bilde5',
        type: 'image',
        title: 'Bilde 5'
    }),


  ],
})