Router.configure({
  loadingTemplate: 'adminLoading',
  notFoundTemplate: 'notFound',
  fastRender: true,
  waitOn: function() {
    return [orion.subs.subscribe('dictionary'), orion.subs.subscribe('entity', 'works')];
  }
});

Router.map(function() {

  // Site index

  this.route('base', {
    path: '/',
    fastRender: true,
    onAfterAction: function() {
      var dict;
      if (!Meteor.isClient) {
        return;
      }
      dict = orion.dictionary.collection.findOne();
      SEO.set({
        title: dict.seoTitle,
        link: {
          icon: dict.seoFavIcon.link,
        },
        meta: {
          'description': dict.seoDescription,
          'google-site-verfication': 'emtVgpY0f-I3HzlMAVkYLTb4uJsSJWfWRKW9b2QgFTk'
        },
        og: {
          'title': dict.seoTitle,
          'description': dict.seoDescription,
          'image': dict.seoImage.link
        }
      });

    }
  });

  // Work/portfolio routes

  this.route('work', {
    path: '/work',
    fastRender: true,
  });
  this.route('/workSingle', {
    path: '/work/:slug',
    layoutTemplate: 'layout',
    fastRender: true,
    waitOn: function() {
      return [orion.subs.subscribe('entity', 'works', {slug: this.params.slug})];
    },
    data: function() {
      return orion.entities.works.collection.findOne({slug: this.params.slug});
    },
    onAfterAction: function() {
      work = orion.entities.works.collection.findOne({slug: this.params.slug});
      dict = orion.dictionary.collection.findOne();
      title = work.name + ' | ' + dict.seoTitle;
      SEO.set({
        title: title,
      });
    }
  });


  // Contact Form

  this.route('contact', {
    path: '/contact',
    fastRender: true,
    onAfterAction: function() {
      dict = orion.dictionary.collection.findOne();
      contact = 'Contact Us';
      if (dict.contactTitle !== undefined) {
        contact = dict.contactTitle;
      }
      SEO.set({
        title: contact + ' | ' + dict.seoTitle,
      });
    }
  });

  // Info Route

  this.route('info', {
    path: '/info',
    layoutTemplate: 'layout',
    fastRender: true,
    onAfterAction: function() {
      dict = orion.dictionary.collection.findOne();
      SEO.set({
        title: 'Info | ' + dict.seoTitle,
      });
    }
  });

});

// Handle 404s properly

Router.plugin('dataNotFound', {notFoundTemplate: 'notFound'});
