import React            from 'react'
import styled           from 'styled-components';
import { NavLink }      from 'react-router-dom';



const ModalContainer = styled.div`
    display: none;
`;

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
`;

const ModalContents = styled.div`
    position: fixed;
    top: 3em;
    bottom: 3em;
    right: 20%;
    left: 20%;
    padding: 2em 3em;
    background-color: white;
    overflow: auto;
`;

const CloseBTN = styled.button`
    padding: 0.5em 0.7em;
    border: 1px solid darkgrey;
    background-color: white;
    font-size: 1em;
`;

const StyledLink = styled(NavLink)`
    display: block;
    padding: .5em 1.5em;
    background-color: #eee;
    color: #369;
    text-decoration: none;
    border-top: 1px solid #999;
    &:hover {
        background-color: #fff;
    }
`;



class DeleteArticleLink extends React.Component {
    constructor(props) {
        super()
        this.state = {
            isOpen: false
        }
        this.modalRef = React.createRef()
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        //console.log(this.state)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(this.state)
    }

    openModal() {
        this.setState( prevState => ({isOpen: !prevState.isOpen }));
        this.modalRef.current.style.display = 'block'
    }

    closeModal(e) {
        e.preventDefault()
        this.setState( prevState => ({isOpen: !prevState.isOpen }));
        this.modalRef.current.style.display = 'none'
    }

    render() {
        return (
            <>
                <StyledLink to='#' onClick={this.openModal}>Delete Article</StyledLink>
                <ModalContainer ref={this.modalRef}>
                    <ModalBackdrop />
                    <ModalContents>
                        <h3>Delete Article</h3>
                        <p>Select article to delete.</p>
                        <form>
                            <label>Enter article number:</label>
                            <input type='text'></input>
                            <input type='submit'></input>
                        </form>
                        <CloseBTN id='close-modal' onClick={this.closeModal}>Close</CloseBTN>
                    </ModalContents>
                </ModalContainer>
            </>
        )
    }
}

export default DeleteArticleLink
