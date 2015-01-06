Template.base.rendered = function() {
  if (!this.rendered){
    // run my code
    // $('#work').mixItUp();
    $('#work').isotope({
      // options...
      itemSelector: '.item',
      masonry: {
        columnWidth: 200
      }
    });

  }
};
