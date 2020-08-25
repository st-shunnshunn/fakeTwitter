import React from "react";
import ReactDOM from "react-dom";

import "./rowTwitter.css"

class RowTwitter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="f-container">
            <div className="icon f-itemIcon"></div>
            <div className="twitArea f-itemArea">
                <div className="f-itemName">test@user</div>
                <div className="f-itemValue">今日は楽しかった</div>
            </div>
          </div>
        );
    }
}

export default RowTwitter;