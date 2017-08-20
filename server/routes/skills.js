var express = require('express');
var router = express.Router();

router.get('/',function(req, res, html) {
        res.render('skills')
})


module.exports = router;