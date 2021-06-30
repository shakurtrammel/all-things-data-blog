import SiteHeader from "../views/ArticleView.js"
import Article from "../../Article.js"



const ArticlePage = (props) => {
    return (
        <div>
            <SiteHeader />
            <Article />
        </div>
    );
}

export default ArticlePage;
