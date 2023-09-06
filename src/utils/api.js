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


export function updateVote(id, inc_votes) {
    return Api.patch(`/api/articles/${id}`, {
      inc_votes: inc_votes === 'upvote' ? 1 : -1
    })
      .then((response) => {
        return response.data.articles.votes; 
      })
      .catch((error) => {
      })
  }

