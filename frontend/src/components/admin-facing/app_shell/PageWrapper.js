import styled           from 'styled-components'



const PageWrapper = styled.div`
    display: grid;
    grid-template-columns: [line1] 200px [line2] auto [line3];
    grid-template-rows: [line1] 75px [line2] auto [line3];
`;


export default PageWrapper