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
    margin-top: 0.5em;
`;


const Point1 = (props) => {
    return (
        <section>
            <MPWrapper>
                <StyledH3>{props.article.p1_heading}</StyledH3>
                <StyledP>{props.article.p1}</StyledP>
            </MPWrapper>
        </section>
    );
}


export default Point1;
