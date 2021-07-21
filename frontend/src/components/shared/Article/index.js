import styled               from 'styled-components';
import ArticleHeader        from "./ArticleHeader.js";
import Intro                from "./Intro.js";
import Point1               from "./Point1.js";
import Point2               from './Point2.js';
import Point3               from './Point3.js';
import Summary                from "./Summary.js";
import LikeBTN              from "./LikeBTN.js";



const StyledArticle = styled.article`
    width: 800px;
    padding: 3em 2em 2em 2em;
    margin: 0 auto;
`;


const Article = (props) => {
    return (
        <StyledArticle>
            <ArticleHeader article={props.article}/>
            <Intro article={props.article}/>
            <Point1 article={props.article} />
            <Point2 article={props.article} />
            <Point3 article={props.article} />
            <Summary article={props.article}/>
            <LikeBTN />
        </StyledArticle>
    );
}

export default Article;