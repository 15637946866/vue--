import axios from './common'

export function getsort(){
    return axios.get('sortlist/sort')
}