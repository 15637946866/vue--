var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/jiu', function(req, res, next) {
    var id=req.query.id
    console.log(req.query)
    var arr=[]
    if(id=='酒'){
        arr = [
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
            { 
                img:'https://www.taokubuy.com/data/upload/shop/store/goods/78/78_06190905841563488_360.jpg',
                h4:'佳洁士(Crest) 健康专家漱口水500ml(长效保护牙龈 防出血 无酒精) 抗牙龈红肿出血 厦门',
                span:"￥32.80",
                p:'销量114',
                addr:'皇家龙船红酒专卖店'
            },
        ]
    }else if(id=='衣服'){
        arr = [
            { 
                span:'0-2岁书榜'
            },
        ]
    }
    res.send(arr);
});


module.exports = router;