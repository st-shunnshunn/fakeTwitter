import * as React from 'react'
import ReactDOM from "react-dom";

import "./snsIcon.css"

class SnsIconAtomComponent extends React.Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div className="logo">
                {this.props.children}
            </div>
        )
      }
}

export default SnsIconAtomComponent;
