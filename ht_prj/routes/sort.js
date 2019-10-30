var express = require('express');
var router = express.Router();

/* GET users listing. */
// 分类滑动列表开始
router.get('/sort',function(req,res,next){
    var arr =[
        {
            id:1,
            title:"品牌推荐"
        },
        {
            id:1,
            title:"家用电器"
        },
        {
            id:1,
            title:"手机数码"
        },
        {
            id:1,
            title:"电脑办公"
        },
        {
            id:1,
            title:"美妆护肤"
        },
        {
            id:1,
            title:"女装/内衣"
        },
        {
            id:1,
            title:"男装/户外"
        },
        {
            id:1,
            title:"箱包皮具"
        },
        {
            id:1,
            title:"珠宝首饰"
        },
        {
            id:1,
            title:"母婴玩具"
        },
        {
            id:1,
            title:"食品生鲜"
        },
        {
            id:1,
            title:"医药保健"
        },
        {
            id:1,
            title:"家居用品"
        },
        {
            id:1,
            title:"家居建材"
        },
        {
            id:1,
            title:"汽车/汽车"
        },
        {
            id:1,
            title:"进口商品"
        },
        {
            id:1,
            title:"超市便利"
        },
    ]
    res.send(arr)
})



module.exports = router;