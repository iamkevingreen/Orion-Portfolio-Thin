
Template.info.helpers({
  services: function () {
    var serv = '';
    // for (var i = 0; i < services.length; i++) {
    //   serv += services[i] + '<br />';
    //   console.log(services[i]);
    // }
    // return serv;
    services = orion.dictionary.get('services');
    for (var i = 0; i < services.length; i++) {
      serv += services[i] + '<br />';
    }
    return serv;
  }
});
