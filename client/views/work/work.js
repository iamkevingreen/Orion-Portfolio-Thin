Template.work.helpers({
    works: function () {
      return orion.entities.works.collection.find().fetch();
    }
});

Template.workBlock.rendered = function() {
  // console.log(this.data);
  var $container = $('#work').imagesLoaded(function() {
    $container.isotope({
      itemSelector: '.item',
      layoutMode: 'masonry',
      resizable: false, // disable normal resizing
      transitionDuration: '0.1s',
      resizesContainer: true
      // masonry: {
      //   columnWidth: 200
      // }
    });
  });
  $('#work').isotope('layout');
  $(window).resize(function(){
    $('#work').isotope('layout');
  });
};

Template.workSingle.rendered = function() {
  $('header').addClass('small');
  $('.content img').wrap( "<div class='content-wrap'></div>");
  $('.content-wrap').prepend("<div class='controls'></div>");

  _.each($('.animated'), function() {
    $(this).addClass('show');
    console.log(this)
  });
};
