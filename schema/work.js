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
	// detailImages: {
	// 	type: [orion.attributes.image],
	// 	label: "Detail Images"
	// },
	projectType: {
    type: String,
		label: "Multiple projects or one?",
    optional: true,
    autoform: {
      afFieldInput: {
        type: "boolean-checkbox"
      }
    }
  },
	projects: {
      type: Array,
      optional: true,
      minCount: 0,
   },
   "projects.$": {
      type: Object
   },
   "projects.$.name": {
      type: String
   },
   "projects.$.image": orion.attribute('file', {
			label: 'Image',
	}),
}, {
	sidebarName: 'Works',
	pluralName: 'Works',
	singularName: 'Work',
	defaultIndexTableFields: [
		{key:'projectName', label: 'Project'},
	]
});
