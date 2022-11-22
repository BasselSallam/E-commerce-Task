import axios from 'axios'



const baseURL = 'https://demos-iconcreations.com/schlafmiestrback/api/'



export function slidersAPI() {
    return axios({
        method: 'get',
        url: `${baseURL}sliders`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}


export function _mattersses() {
    return axios({
        method: 'get',
        url: `${baseURL}productTypes`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function pMessage() {
    return axios({
        method: 'get',
        url: `${baseURL}presidentMessage`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function vMessage() {
    return axios({
        method: 'get',
        url: `${baseURL}vicePresident`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function missionVision() {
    return axios({
        method: 'get',
        url: `${baseURL}missionVision`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function _products() {
    return axios({
        method: 'get',
        url: `${baseURL}products`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function featuredProducts() {
    return axios({
        method: 'get',
        url: `${baseURL}featuredProducts`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}

export function OffersApi() {
    return axios({
        method: 'get',
        url: `${baseURL}offer`
    }).then((res) => {
        return res.data
    }).catch((err)=>{
        alert(err)
        window.location.reload();
    })
}


export function NewsApi(e) {
    axios.post(`${baseURL}newsLetter`, { email: e }).then((response) => {
    })

}







