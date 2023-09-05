import {useState} from "react"
import AllArticles from "./Articles"
import ArticleSearch from './ArticleSearch'

function Home(){
    const [search, setSearch]= useState('')
    const [topics, setTopics]=useState('')

    return(
      <div>
        <ArticleSearch />
        <AllArticles />
      </div>
    )
}
export default Home