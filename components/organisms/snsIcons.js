import * as React from 'react'
import ReactDOM from "react-dom";
import SnsIconSetMoleculesComponent from "../molecules/snsSet"

import axios from 'axios';

import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";

import LoginComponent from "../molecules/loginModal"

const style = {
    margin:10,
  };

const right = {
  marginLeft: 'auto',
  marginRight: '0',
  display:'inline-block',
}

let defaultStyle={
    textAlign:'center',
    display:'inline-block',
}

let inline={
  textAlign:'center',
  display:'inline-block',
}

class SnsIconsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.clickTwitter = this.clickTwitter.bind(this);
        this.openModal = this.openModal.bind(this);

        this.state = {
            modalIsOpen:false
        };

        this.sns= [
          {
            name:'Twitter',
            nameLogin:'TwitterLogin',
            icon:FaTwitter,
            click:this.clickTwitter,
          },
          // {
          //   name:'FaceBook',
          //   icon:FaFacebook,
          // },
          // {
          //   name:'Instagram',
          //   icon:FaInstagram,
          // },
          // {
          //   name:'Line',
          //   icon:FaLine,
          // },
        ]
    }

    openModal() {
      this.setState({modalIsOpen: true});
    }

    closeModal(){
      this.setState({modalIsOpen: false});
    }

    clickTwitter()
    {
      this.openModal()
      // axios.get('http://localhost:8888/auth/twitter',{
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //   },
      //   withCredentials: true ,
      // })
      // .then(response => {
      //     console.log('status:', response.status); // 200
      //     console.log('body:', response.data);     // response body.
      // }).catch(err => {
      //     console.log('err:', err);
      // });
      //   // /auth/twitter
    }

    render() {
      const itemList = this.sns.map((data) =>
      {
        return(
          <div key={data.name}  style={inline}>
            <SnsIconSetMoleculesComponent style={style} sns={data}>
            </SnsIconSetMoleculesComponent>
            <LoginComponent modalIsOpen={this.state.modalIsOpen} closeModal={() => this.closeModal()}>
            </LoginComponent>
          </div>
        )
      });
        return (
            <div style={right}>
                {itemList}
            </div>
        )
    }
}
export default SnsIconsComponent;
