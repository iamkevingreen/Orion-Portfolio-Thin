orion.addEntity('works', {
  image: orion.attribute('file', {
    label: "Featured Image or specify a color fallback",
    optional: true
  }),
  name: {
    type: String,
    label: "Project Name"
  },
  year: {
    type: String,
    label: "Year",
    optional: true,
  },
  role: {
    type: String,
    label: "Role",
    optional: true
  },
  client: {
    type: String,
    label: "Client Name",
  },
  slug: {
    type: String,
    label: "Slug",
    optional: true
  },
  description: {
    type: String,
    label: "Short Description"
  },
  images: {
    type: Array,
    optional: true,
    minCount: 0,
  },
  "images.$": {
    type: Object
  },
  "images.$.name": {
    type: String
  },
  "images.$.toggle": {
    type: String,
    label: "Full-width toggle",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  },
  "images.$.image": orion.attribute('file', {
    label: 'Image',
  }),
}, {
  sidebarName: 'Works',
  pluralName: 'Works',
  singularName: 'Work',
  tableColumns: [{
    data: 'name',
    title: 'Name'
  }, ]
});
