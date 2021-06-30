import React from 'react';
import styled from 'styled-components';



const StyledForm = styled.form`
    display: flexbox;
    flex-orientation: column;
    flex-wrap: wrap;
    width: 600px;
`;

const FormElementWrapper = styled.div`
    width: 500px;
    display: flexbox;
    flex-orientation: column;
    flex-wrap: wrap;
    margin-bottom: 2em;
`;

const StyledLabel = styled.label`
    font-size: .75em;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: -.1em;
`;

const StyledEmailInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
`;

const StyledSubmitBTN = styled.input`
    width: 150px;
    height: 50px;
    border: 0;
    background-color: #152B59;
    font-weight: 600;
    font-size: 1em;
    color: white;
`;

const ModalContent = () => {
    return (
        <StyledForm>
            <FormElementWrapper>
                <StyledLabel>
                    Yes, I want to stay on top of digital data trends! Keep me up to date with interesting articles and content.
                </StyledLabel>
                <StyledEmailInput />
            </FormElementWrapper>
            <FormElementWrapper>
                <StyledSubmitBTN>Subscribe</StyledSubmitBTN>
            </FormElementWrapper>
        </StyledForm>
    );
}


const Modal = (props) => {
    const modal = props.showModal ? <section>{ModalContent}</section> : null;
    return ( <section>{modal}</section> );
}


export default Modal;