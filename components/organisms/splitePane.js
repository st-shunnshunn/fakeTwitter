import React from "react";
import ReactDOM from "react-dom";
import SplitPane, { Pane } from "react-split-pane";
import RowTwitter from "../molecules/rowTwitter"
import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";
import "./splitePane.css"

const style = {
    marginLeft:100,
    marginRight:100,
  };

  const border = {
    border:'solid',
    borderWidth:1,
  }

  const center = {
    textAlign: 'center',
  };

  const height = {
    height: 300,
  };

class SplitePane extends React.Component {
    render() {
        return(
            <div style={{...style,...border}} >
                <SplitPane split="vertical" defaultSize={200}>
                    <div style={{...center,...border}}>
                        <div style={{background:'#e6e6fa'}}>
                            <FaTwitter></FaTwitter>
                        </div>
                        <div style={height}>
                            <RowTwitter></RowTwitter>
                        </div>
                    </div>
                    {/* <div style={{...center,...border}}>
                        <div style={{background:'#e6e6fa'}}>
                            <FaFacebook></FaFacebook>
                        </div>
                        <div style={height}></div>
                    </div>
                    <div style={{...center,...border}}>
                        <div style={{background:'#e6e6fa'}}>
                            <FaLine></FaLine>
                        </div>
                        <div style={height}></div>
                    </div>
                    <div style={{...center,...border}}>
                        <div style={{background:'#e6e6fa'}}>
                            <FaInstagram></FaInstagram>
                        </div>
                        <div style={height}></div>
                    </div> */}
                </SplitPane>
            </div>
        )
    };
}

export default SplitePane;