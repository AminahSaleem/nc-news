import axios from 'axios'

const Api = axios.create({ baseURL: "https://aminahs-api.onrender.com"})

export const getAllArticles = (topic, sort_by = '' , order = 'desc') => {
  const validSortOptions = ['created_at', 'votes', 'comment_count']

  if (!validSortOptions.includes(sort_by)) {
    throw new Error('Invalid sort_by option')
  }
  const params = { topic, sort_by, order }
  return Api.get(`api/articles`, { params })
    .then((response) => {
      return response.data.articles
    })
    .catch((error) => {
      throw error
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

export const postComment = (id, comment, username) => {
  return Api.post(`/api/articles/${id}/comments`, comment)
  .then((response)=> {
    return response.data.comment
  })
  .catch((error)=>{

  })
}

export const getUsers = () => {
  return Api.get(`/api/users`)
  .then((response) => {
    return response.data.users
  })
  .catch((error) => {

  })
}

export const signIn = (username) => {
  return Api.post(`/api/login`,{username})
  .then((response) => {
    return response.data.users
  })
  .catch((error)=>{
  })
}

export const deleteComment = (id) => {
  return Api.delete(`/api/comments/${id}`)
  .then((response)=>{
    console.log('deleted', response.data)
  })
}
