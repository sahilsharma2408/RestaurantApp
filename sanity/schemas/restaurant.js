export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the restaurant'
    },
    {
      name: 'Lat',
      type: 'number',
      title: 'Latitude of the restaurant'
    },
    {
      name: 'Long',
      type: 'number',
      title: 'Longitude of the restaurant'
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address of the restaurant',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Enter a rating from (1 to 5)',
      validation: (Rule) => 
        Rule.required()
        .min(1)
        .max(5)
        .error('Please enter rating from (1 to 5)')
    },
    {
      name: 'type',
      type: 'reference',
      title: 'Category',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required()
    },
    {
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{ type: 'reference', to: [{ type: 'dish' }] }]
    },
  ],
}
