export default {
  name: 'dish',
  title: 'Dish',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the dish',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'price',
      type: 'number',
      title: 'price of the dish'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image of the dish'
    },
  ]
}
