import AllArticles from "./Articles"
import ArticleSearch from './ArticleSearch'

function Home(){
  
    return(
      <div>
        <ArticleSearch />
        <AllArticles />
      </div>
    )
}
export default Home