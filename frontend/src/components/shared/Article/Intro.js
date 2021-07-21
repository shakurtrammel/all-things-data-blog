import styled from 'styled-components';



const MPWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 2em auto;
`;

const StyledH3 = styled.h3`
    font-family: 'Newsreader', serif;
    font-size: 1.3em;
    font-weight: 800;
`;

const StyledP = styled.p`
    overflow: hidden;
    max-width: 70ch;
    margin: 2em auto;
`;



const Intro = (props) => {
    return (
        <MPWrapper>
            <StyledH3>Introduction</StyledH3>
            <StyledP>{props.article.intro}</StyledP>
        </MPWrapper>
    );
}


export default Intro;