import * as React from 'react'
import ReactDOM from "react-dom";
import SnsIconAtomComponent from "../atoms/snsIcon"

let defaultStyle={
        textAlign:'center',
        display:'inline-block',
}


class SnsIconSetMoleculesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.style = {...defaultStyle, ...this.props.style};
      }
    render() {
        return (
            <div style={this.style}>
                <p>{this.props.sns.name}</p>
                <SnsIconAtomComponent>
                    <this.props.sns.icon onClick={this.props.sns.click}></this.props.sns.icon>
                </SnsIconAtomComponent>
            </div>
        )
      }
}

export default SnsIconSetMoleculesComponent;
