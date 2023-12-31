import { useState, useContext } from "react"
import { postComment } from "../../utils/api"
import { UserContext } from "../User/UserContext"


const NewComment =({id, updateComments}) => {
    const [newComment, setNewComment] = useState('')
    const {user, setUser} = useContext(UserContext)
    const [error, setError]= useState(false)
    

    const handleSubmit = (event) => {
        event.preventDefault()

        if(!user){
            window.alert("To add a comment please log in")
            return
        }

        if (!newComment) {
            setError("Comment field is required")
            window.alert('No input to add comment')
            return
        }

        const commentData = {body: newComment, username: user}
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
