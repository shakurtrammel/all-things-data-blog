import styled from 'styled-components'
import SiteHeader from "../app_shell/PublicHeader.js"
import ContactForm from "../forms/ContactForm.js"



const StyledHeader = styled.header`
    margin-bottom: 4em;
`;

const StyledH1 = styled.h1`

`;

const ContactHeader = (props) => {
    return (
        <StyledHeader>
            <StyledH1>Contact</StyledH1>
        </StyledHeader>
    );
}


const StyledMain = styled.main`
    padding: 4em;
`;

const StyledSection = styled.section`

`;

const ContactContent = (props) => {
    return (
        <StyledSection>
            <ContactForm />
        </StyledSection>
    );
}


              
const ContactView = (props) => {
    return (
        <div>
            <SiteHeader />
            <StyledMain>
                <ContactHeader />
                <ContactContent />
            </StyledMain>
        </div>
    );
}


export default ContactView;