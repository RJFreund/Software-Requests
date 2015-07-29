var express = require('express');
var router = express.Router();

module.exports = function(io) {
  /*
  router.get('/', function (req, res, next) {
    var softwareRequests = [
      {
        id: 0,
        title: 'Timestamp Notes',
        createDate: new Date('2015-07-28'),
        createdBy: 'R.J. Freund'
      }
    ];

    res.render('index',
        {
          title: 'Software-Requests',
          softwareRequests: softwareRequests
        });
  });
  */

  router.get('/partials/:name', function(req, res){
    var name = req.params.name;
    res.render('partials/' + name);
  });

  router.get('/', function(req, res){
    res.render('layout');
  });

  return router;
};
