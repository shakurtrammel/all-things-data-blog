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

const StyledTextInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
`;

const StyledEmailInput = styled.input`
    width: 100%;
    border: none;
    border-bottom: 1px solid #ddd;
`;

const StyledTextArea = styled.textarea`
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


class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <FormElementWrapper>
                    <StyledLabel>Name</StyledLabel>
                    <StyledTextInput name='user-name' type='text' value={this.state.value} onChange={this.handleChange} />
                </FormElementWrapper>
                <FormElementWrapper>
                    <StyledLabel>Email</StyledLabel>
                    <StyledEmailInput name='email' type='email' value={this.state.value} onChange={this.handleChange} />
                </FormElementWrapper>
                <FormElementWrapper>
                    <StyledLabel>Message</StyledLabel>
                    <StyledTextArea
                        name='message'
                        rows='10'
                        cols='50'
                        value={this.state.value} 
                        onChange={this.handleChange}
                    />
                </FormElementWrapper>
                <FormElementWrapper>
                    <StyledSubmitBTN type='submit' value='Send' />
                </FormElementWrapper>
            </StyledForm>
        );
    }
}


export default ContactForm;