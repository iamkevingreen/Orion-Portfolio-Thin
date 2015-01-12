orion.dictionary.addDefinition('siteName', 'site', {
  type: String,
  label: "Site Name",
  optional: true,
});

orion.dictionary.addDefinition('siteDescription', 'site', {
  type: String,
  label: "Short Blurp about the site",
  optional: true,
});

orion.dictionary.addDefinition('logo', 'site',
  orion.attribute('file', {
    label: "Logo",
    optional: true,
  })
);
