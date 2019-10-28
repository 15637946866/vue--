var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/jiu', function(req, res, next) {
    var arr = [
        "http://img58.ddimg.cn/218070070610928_y.jpg",
        "http://img55.ddimg.cn/85250076995655_y.jpg",
        "http://img62.ddimg.cn/upload_img/00803/1/1242x366-1571039813.jpg",
        "http://img51.ddimg.cn/198970070650541_y.jpg"
    ]
    res.send(arr);
});


module.exports = router;