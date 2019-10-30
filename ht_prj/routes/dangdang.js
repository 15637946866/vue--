var express = require('express');
var router = express.Router();

/* GET users listing. */
//轮播
router.get('/banner', function(req, res, next) {
    var arr = [
        "http://img58.ddimg.cn/218070070610928_y.jpg",
        "http://img55.ddimg.cn/85250076995655_y.jpg",
        "http://img62.ddimg.cn/upload_img/00803/1/1242x366-1571039813.jpg",
        "http://img51.ddimg.cn/198970070650541_y.jpg"
    ]
    res.send(arr);
});

router.get('/cateList',function(req,res,next){
    var arr=[
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'全球优选'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'兴农扶贫'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113407955289.png',
            txt:'兴农扶贫'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113730153863.png',
            txt:'工厂直供'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05567113870067331.png',
            txt:'淘库好店'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05525029655588000.png',
            txt:'发现好货'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05525033900202042.png',
            txt:'限量抢购'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05591315728041790.png',
            txt:'限时秒杀'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05591315064860042.png',
            txt:'红包活动'
        },
        {
            img:'https://www.taokubuy.com/data/upload/shop/adv/05279588135542058.png',
            txt:'签到有奖'
        }
    ]
    res.send(arr);
})



module.exports = router;
