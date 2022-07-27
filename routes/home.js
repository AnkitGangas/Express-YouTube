const express = require('express');
const router = express.Router();
const root = require('../util/path.js')

router.get('/',(req,res)=>{
    res.render('main',{page:'YouTube '});
    
});
    module.exports = router;
     