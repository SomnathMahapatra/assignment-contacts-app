var express = require('express');
var router = express.Router();


var Controller = require('./controller');




//version 0.0.0
/* user ops -- /users */
router.route('/')

    .get(Controller.list)


    .post(Controller.create)

    
   


module.exports = router;
