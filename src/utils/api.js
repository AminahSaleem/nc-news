import axios from 'axios'

const Api = axios.create({ baseURL: "https://aminahs-api.onrender.com"})

export async function getAllArticles() {
    return Api.get('/api/articles')
    .then((response) => {
        return response.data.articles
    })
    .catch((error) => {

    })
}

export async function singleArticle(id) {
    return Api.get(`/api/articles/${id}`)
    .then((response) => {
        return response.data.article
    })
    .catch((error) => {
    })
}

export async function getCommentsByArticle(id){
    return Api.get(`/api/articles/${id}/comments`)
    .then((response) => {
        console.log(response)
        return response.data.comments
    })
    .catch((error) => {

    })
}

