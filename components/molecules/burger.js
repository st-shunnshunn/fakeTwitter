import React from "react";
import ReactDOM from "react-dom";
import { scaleRotate as Menu } from 'react-burger-menu'
import './burger.css'

import {FcEngineering, FcConferenceCall, FcMakeDecision} from 'react-icons/fc'

class burger extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu  pageWrapId = {this.props.pageWrapId}  outerContainerId = {this.props.outerContainerId}>
        <div id="login" className="menu-item">
            <FcConferenceCall></FcConferenceCall>
            ログイン
        </div>
        <div id="register" className="menu-item" >
            <FcEngineering></FcEngineering>
            アカウント登録
        </div>
        <div id="update" className="menu-item" >
            <FcMakeDecision></FcMakeDecision>
            登録情報変更
        </div>
        {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
      </Menu>
    );
  }
}

export default burger;