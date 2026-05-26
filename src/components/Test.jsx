import React, { Component } from "react";
import Modal from "./common/Modal";

export default class Test extends Component {
  state = {
    showModal: false,
  };
  
  hideModal = () => {
    this.setState({
      showModal: false,
    });
  };

  showModal = () => {
    this.setState({
      showModal: true,
    });
  };

  render() {
    return (
      <div>
        123
        <Modal showModal={this.state.showModal} close={this.hideModal}>
          <div style={{ background: "#fff", padding: "20px" }}>
            <h1>123123123</h1>
            <button onClick={this.hideModal}>close</button>
          </div>
        </Modal>
        <button onClick={this.showModal}>open</button>
      </div>
    );
  }
}
