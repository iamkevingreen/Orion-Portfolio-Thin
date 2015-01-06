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
    masonry: {
      columnWidth: '.grid-sizer'
    }
  });
};

Template.workSingle.helpers({

});

Template.workSingle.rendered = function() {
  $('header').addClass('small');
  $('.content img').wrap( "<div class='content-wrap'></div>");
  $('.content-wrap').prepend("<div class='controls'></div>");
};
