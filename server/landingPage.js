var express = require('express');
var router = express.Router();

router.get('/',function(req, res, html) {
        res.render('landingPage')
})
router.get('/terms',function(req,res){
        res.render('terms')

})
router.get('/privacy', function(req,res){
        res.render('policy')
})

module.exports = router;