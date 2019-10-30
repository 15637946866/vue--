import axios from './common'

export function getjiu(con){
    return axios.get('search/jiu?id='+con)
}

