import axios from './common'

export function getBanner(){
    return axios.get('dang/banner')
}