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
        console.log(response.data)
        return response.data.article
    })
    .catch((error) => {
    })
}