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
        return response.data.comments
    })
    .catch((error) => {

    })
}

export async function articleVotes(id, typeOfVote) {
    return Api.post(`/api/articles/${id}/vote`, {typeOfVote})
    .then((response) => {
        return response.data.comments.votes
    })
    .catch((error) =>{

    })
}

export async function increaseVote(id) {
    return articleVotes(id, 'upvote')
}

export async function decreaseVote(id) {
    return articleVotes(id, 'downvote')
}

