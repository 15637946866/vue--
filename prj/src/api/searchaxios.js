import axios from 'axios'
//1获取banner图
axios.defaults.baseURL='http://localhost:3000/search/'


axios.interceptors.response.use(function(response){
    return response.data;
},function(err){
    return Promise.reject(err)
});

export function getjiu(){
    return axios.get('jiu')
}

