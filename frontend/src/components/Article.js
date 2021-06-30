import styled from 'styled-components';
import ArticleHeader from "./ArticleHeader.js";
import Intro from "./Intro.js";
import MainPoint from "./MainPoint.js";
import Outro from "./Outro.js";
import LikeBTN from "./LikeBTN.js";


const StyledArticle = styled.article`
    width: 800px;
    padding: 3em 2em 2em 2em;
    margin: 0 auto;
`;


const Article = (props) => {
    return (
        <StyledArticle>
            <ArticleHeader />
            <Intro />
            <MainPoint />
            <MainPoint />
            <MainPoint />
            <Outro />
            <LikeBTN />
        </StyledArticle>
    );
}

export default Article;