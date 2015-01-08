orion.dictionary.addDefinition('infoImage', 'info',
  orion.attribute('file', {
    label: "Image",
    optional: true,
  })
);

orion.dictionary.addDefinition('approach', 'info', {
  type: String,
  label: "Short blurp about the approach",
  optional: true,
});

orion.dictionary.addDefinition('about', 'info', {
  type: String,
  label: "About",
  optional: true,
  autoform: {
    rows: 5
  }
});

// Social

orion.dictionary.addDefinition('twitter', 'info', {
  type: String,
  label: "Twitter URL",
  optional: true,
});
orion.dictionary.addDefinition('instagram', 'info', {
  type: String,
  label: "Instagram URL",
  optional: true,
});
orion.dictionary.addDefinition('dribbble', 'info', {
  type: String,
  label: "Dribbble URL",
  optional: true,
});
orion.dictionary.addDefinition('tumblr', 'info', {
  type: String,
  label: "Tumblr URL",
  optional: true,
});

// Services

orion.dictionary.addDefinition('services', 'info', {
		type: [String],
		autoform: {
			type: "select-checkbox",
			options: function () {
				return [
					{label: "Graphic Design", value: 'Graphic Design'},
					{label: "Brand Identity", value: 'Brand Identity'},
					{label: "Type Design", value: 'Type Design'},
					{label: "Lettering", value: 'Lettering'},
				];
			}
		}
});

// Info Blocks

orion.dictionary.addDefinition('dreamProjects', 'info',
    orion.attribute('summernote', {
        label: 'Dream Projects',
        optional: true
    })
);
