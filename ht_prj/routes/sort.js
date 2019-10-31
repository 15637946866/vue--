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
            id:2,
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
});

router.get('/brand',function(req,res,next){
    var id=req.query.id;
    console.log(id)
    if(id==1){
    var arr=[
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-895.jpg",
            span:"家用电视"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-896.jpg",
            span:"空调"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-897.jpg",
            span:"洗衣机"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-898.jpg",
            span:"热水器"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1549.jpg",
            span:"冰箱"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1595.jpg",
            span:"电热毯"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1599.jpg",
            span:"电熨斗"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1645.jpg",
            span:"取暖器"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1648.jpg",
            span:"除湿器"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1665.jpg",
            span:"冷藏柜"
        },
        {
            img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-905.jpg",
            span:"其他"
        },
        
    ]}else if(id==2){
        var arr=[
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-895.jpg",
                span:"家用电视"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-896.jpg",
                span:"空调"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-896.jpg",
                span:"洗衣机"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-896.jpg",
                span:"热水器"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1549.jpg",
                span:"冰箱"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1595.jpg",
                span:"电热毯"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1599.jpg",
                span:"电熨斗"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1645.jpg",
                span:"取暖器"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1648.jpg",
                span:"除湿器"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-1665.jpg",
                span:"冷藏柜"
            },
            {
                img:"https://www.taokubuy.com/data/upload/shop/common/category-pic-905.jpg",
                span:"其他"
            },
        ]
    }

    






    res.send(arr);
});

router.get("/title",function(req,res,next){
    var arr=[
        {title:"家用电器"},
        {title:"厨房大电"},
        {title:"中式厨房"},
        {title:"西式厨房"},
        {title:"生活电器"},
        {title:"个户健康"},
    ]
})


module.exports = router;