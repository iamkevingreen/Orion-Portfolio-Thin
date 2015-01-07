Template.base.rendered = function() {
  if (!this.rendered){
    // run my code
    // $('#work').mixItUp();


  }
};
Template.base.events = {
  'click .bomb': function(event) {
    console.log('hi');
  }
}
