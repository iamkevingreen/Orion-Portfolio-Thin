Template.work.helpers({
    works: function () {
      return orion.entities.works.collection.find().fetch();
    }
});

Template.workBlock.rendered = function() {
  // console.log(this.data);
  var $container = $('#work').isotope({
    itemSelector: '.item',
    layoutMode: 'masonry',
    resizable: false, // disable normal resizing
    transitionDuration: '0.1s'
    // masonry: {
    //   columnWidth: 200
    // }
  });
};

Template.workSingle.helpers({

});

Template.workSingle.rendered = function() {
  $('header').addClass('small');
  $('.content img').wrap( "<div class='content-wrap'></div>");
  $('.content-wrap').prepend("<div class='controls'></div>");
};
