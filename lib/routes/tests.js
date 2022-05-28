var express = require('express'),
    router = express.Router();

var automatedRoutes = require('./testRoutes/automated');

router
    .get('/',  (req, res) => {res.json({message: 'test route'});})
    .get('/r2',  (req, res) => {res.json({message: 'test route2'});})

    // Import my automated routes into the path '/tests/automated'
    // This works because we're already within the '/tests' route 
    // so we're simply appending more routes to the '/tests' endpoint
    .use('/automated', automatedRoutes);
 

    
module.exports = router;