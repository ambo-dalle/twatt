var express = require('express')
const router = express.Router();
var twitterControl = require('../controllers/apitwitter_controller')


router.post('/search' , twitterControl.twitterSearch )
router.post('/timeline' , twitterControl.twitterTimeline )
router.post('/newtweet' , twitterControl.newStatusTwitter )


module.exports = router
