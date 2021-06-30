import styled from 'styled-components';


const StyledHeader = styled.header`

`;

const StyledH1 = styled.h1`

`;

const PageHeader = (props) => {
    return (
        <StyledHeader>
            <StyledH1>About</StyledH1>
        </StyledHeader>
    );
}

export default PageHeader;