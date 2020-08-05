import * as React from 'react'
import ReactDOM from "react-dom";
import SnsIconSetMoleculesComponent from "../molecules/snsSet"

import { FaTwitter,FaFacebook, FaLine, FaInstagram  } from "react-icons/fa";


const style = {
    margin:10,
  };

  const right = {
    marginLeft: 'auto',
    marginRight: '0',
    display:'inline-block',
  }

class SnsIconsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.sns= [
          {
            name:'Twitter',
            icon:FaTwitter,
          },
          {
            name:'FaceBook',
            icon:FaFacebook,
          },
          {
            name:'Instagram',
            icon:FaInstagram,
          },
          {
            name:'Line',
            icon:FaLine,
          },
        ]
        this.itemList = this.sns.map((data) =>
        <SnsIconSetMoleculesComponent key={data.name} style={style} sns={data}>
        </SnsIconSetMoleculesComponent>
      );
    }
    render() {
        return (
            <div style={right}>
                {this.itemList}
            </div>
        )
      }
}
export default SnsIconsComponent;
