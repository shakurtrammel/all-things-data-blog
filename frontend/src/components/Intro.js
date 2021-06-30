import styled from 'styled-components';


const StyledP = styled.p`
    overflow: hidden;
    max-width: 70ch;
    margin: 2em auto;
`;

const Intro = (props) => {
    return (
        <StyledP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu lorem id nisi maximus pharetra. Curabitur turpis nunc, eleifend ut neque sed, commodo euismod risus. Pellentesque non elit mollis, sodales tellus ut, luctus purus. Nullam varius laoreet tellus, eget eleifend odio porta ut. Integer massa augue, sagittis a commodo ac, lobortis eget purus. Vestibulum quis turpis at turpis fermentum vulputate eu sit amet magna. In malesuada, nulla volutpat fermentum dapibus, massa dolor blandit libero, non ornare odio massa ut lacus. Maecenas ornare vel erat nec pharetra. Cras non velit viverra, tincidunt augue vitae, sollicitudin neque. Praesent pretium ligula orci, vitae sodales magna mollis at. Nunc laoreet lacus ex, sed tincidunt urna vestibulum fringilla. In molestie, neque et vestibulum consequat, ipsum est gravida massa, eleifend consequat erat diam at leo. Quisque urna mi, congue eget condimentum nec, venenatis id dui. Aenean metus felis, rutrum nec ante id, iaculis dignissim lectus.
        </StyledP>
    );
}



export default Intro;