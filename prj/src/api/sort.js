import axios from './common'


// 获取左侧列表
export function getsort(){
    return axios.get('sortlist/sort')
}
// 获取品牌
export function getbrand(id){
    return axios.get('sortlist/brand?id='+id)
}
// //右边标题
export function gettitle(){
    return axios.get('sortlist/title')
}

