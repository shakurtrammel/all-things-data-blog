import styled from 'styled-components';



const StyledHeader = styled.header`
    margin-bottom: 3em;
    text-align: center;
`;

const StyledH1 = styled.h1`
    font-family: 'Newsreader', serif;
    font-weight: 800;
    font-size: 2.2em;
`;

/*
const StyledAuthor = styled.span`
    display: block;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.8em;
`;
*/

const StyledDate = styled.span`
    display: block;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.7em;
    font-style: italic;
`;

const TLDR = styled.p`
    overflow: hidden;
    max-width: 70ch;
    margin: 2em auto;
    text-align: left;
    font-weight: 500;
    font-style: italic;
`;

const ArticleHeader = (props) => {
    return (
        <StyledHeader>
            <StyledH1>{props.article.title}</StyledH1>
            <StyledDate>{props.article.updated_at}</StyledDate>
            <TLDR>{props.article.tldr}</TLDR>
        </StyledHeader>
    );
}

export default ArticleHeader;