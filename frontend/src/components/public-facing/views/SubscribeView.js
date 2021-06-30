import SiteHeader from "../app_shell/PublicHeader.js"
import Modal from '../../Modal.js'
import React from "react"



class SubscribeView extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    showModal = (event) => {
        this.setState({showModal: true});
        console.log(this.state.showModal);
    }

    hideModal = (event) => {
        this.setState({showModal: false});
    }

    render() {
        return (
            <div>
                <SiteHeader />
                <button onClick = {this.showModal}>Toggle Modal</button>
                <Modal showModal={this.state.showModal} hideModal={this.hideModal} />
            </div>
        );
    }
    
}

export default SubscribeView;