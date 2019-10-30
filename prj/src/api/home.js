import axios from './common'

export function getBanner(){
    return axios.get('dang/banner')
}
export function getCateList(){
    return axios.get('dang/cateList')
}
