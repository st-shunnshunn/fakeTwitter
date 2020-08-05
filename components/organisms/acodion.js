import * as React from 'react'
import ReactDOM from "react-dom";
import Carousel from "../molecules/carousel"
import { IoIosArrowDropupCircle,IoIosArrowDropdownCircle} from "react-icons/io";
import anime from 'animejs'

const iconButton = {
    background:'transparent',
    border:0,
    cursor:'pointer',
    outline:'none'
}

class AcordionComponent extends React.Component {

    constructor(props) {
        super(props);
        this.refCarousel = React.createRef();
        this.state={
            show: true,
        };
        this.selectIcon = IoIosArrowDropupCircle;
    }

    handleClick(e) {
        this.setState({show: !this.state.show});
        this.selectIcon =this.state.show ? IoIosArrowDropdownCircle : IoIosArrowDropupCircle;
    }

    render() {
        return (
            <div ref={this.refCarousel}>
                <Carousel style={{display: this.state.show ? 'block' :'none'}}>
                </Carousel>
                <div style={{textAlign:'center'}}>
                    <button style={iconButton} onClick={(e)=>{this.handleClick(e)}}>
                        <this.selectIcon style={{fontSize:'25px'}}></this.selectIcon>
                    </button>
                </div>
            </div>
        )
      }
}

export default AcordionComponent;
