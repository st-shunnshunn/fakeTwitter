import React from 'react';
import Modal from 'react-modal'
 
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };  

Modal.setAppElement('#root')
class LoginComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
          <div>
            <Modal
              isOpen={this.props.modalIsOpen}
              onRequestClose={()=>{this.props.closeModal()}}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2>Mebee</h2>
              <iframe src={"/auth/twitter"}/>
              {/* <a href="/auth/twitter">Sign in with Twitter</a> */}
              <button  onClick={()=>{this.props.closeModal()}}>close</button>
              <div>テキストテキスト</div>
            </Modal>
          </div>
      );
  }
}
export default LoginComponent;