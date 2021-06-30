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

const StyledAuthor = styled.span`
    display: block;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.8em;

`;

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
            <StyledH1>Test Article</StyledH1>
            <StyledAuthor>By Shakur Trammel</StyledAuthor>
            <StyledDate>May 24th 2021</StyledDate>
            <TLDR>
                In hac habitasse platea dictumst. Maecenas nec ex ante. Ut pulvinar tincidunt turpis, egestas pellentesque purus bibendum at. Integer ullamcorper blandit nulla, in iaculis leo. Mauris venenatis condimentum luctus. 
            </TLDR>
        </StyledHeader>
    );
}

export default ArticleHeader;