import styled from 'styled-components'
import SiteHeader from "../app_shell/PublicHeader.js"



const StyledMain = styled.main`
    padding: 4em;
`;

const StyledSection = styled.section`

`;

const StyledH2 = styled.h2`
    font-family: 'Newsreader', serif;
    font-size: 1.2em;
    font-weight: 700;
`;

const StyledP = styled.p`
    overflow: hidden;
    max-width: 70ch;
    margin-top: 0.5em;
`;


const AboutContent = (props) => {
    return (
        <StyledSection>
            <StyledH2>
                The world's digital data is growing exponentially. We'll need clarity to manage it.
            </StyledH2>
            <StyledP>
                The Clean Data Blog provides information and insights into the world of digital data. We help people learn more about digital data by providing articles and curated content from around the web. Articles are posted weekly and you can subscribe to be notified of new uploads. We're blogging from San Francisco.
            </StyledP>
        </StyledSection>
    );
}


const AboutView = (props) => {
    return (
        <div>
            <SiteHeader />
            <StyledMain>
                <AboutContent />
            </StyledMain>
        </div>
    );
}


export default AboutView;