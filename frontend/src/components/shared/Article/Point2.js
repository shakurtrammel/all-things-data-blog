import styled from 'styled-components';



const MPWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    margin: 2em auto;
`;

const StyledH2 = styled.h2`
    font-family: 'Newsreader', serif;
    font-size: 1.3em;
    font-weight: 800;
`;

const StyledP = styled.p`
    overflow: hidden;
    max-width: 70ch;
    margin-top: 0.5em;
`;


const Point2 = (props) => {
    return (
        <section>
            <MPWrapper>
                <StyledH2>{props.article.p2_heading}</StyledH2>
                <StyledP>{props.article.p2}</StyledP>
            </MPWrapper>
        </section>
    );
}


export default Point2;
