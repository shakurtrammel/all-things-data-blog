import SiteHeader from "../views/ArticleView.js"
import Article from "../../shared/Article"



const ArticlePage = (props) => {
    return (
        <div>
            <SiteHeader />
            <Article />
        </div>
    );
}

export default ArticlePage;
