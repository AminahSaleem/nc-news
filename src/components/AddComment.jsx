import { useState, useContext } from "react"
import { postComment } from "../utils/api"
import { UserContext } from "./User/UserContext"


const NewComment =({id, updateComments}) => {
    const [newComment, setNewComment] = useState([])
    const {username, setUsername} = useContext(UserContext)
    

    const handleSubmit = (event) => {
        event.preventDefault()

        const commentData = {body: newComment, username}
        postComment(id, commentData)
        .then((comment)=>{
            updateComments(comment)
            setNewComment("")
        })
        .catch((error)=> {

        })
        }
    
        return (
            <form className="CommentAdder" onSubmit={handleSubmit}> 
            <label htmlFor="newComment">Add a comment</label>
            <textarea
            placeholder="Add comment here..."
            id="newComment"
            value={newComment}
            onChange={(event)=>setNewComment(event.target.value)}
            ></textarea>
            <button>Add</button>
            </form>
        )
}

export default NewComment        
