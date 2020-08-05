import * as React from 'react'
import ReactDOM from "react-dom";
import anime from 'animejs'

const style1 = {
    color:'#000080',
    display:'inline-block',
    fontSize:40,
    fontWeight:'bold',
  };

  const style = {
    display:'inline-block',
    marginBottom:-20,
  }

class TitleComponent extends React.Component {
    constructor(props) {
        super(props);
        this.Ref1 = React.createRef();
        this.Ref2 = React.createRef();
        this.Ref3 = React.createRef();
        this.Ref4 = React.createRef();
        this.Ref5 = React.createRef();
        this.Ref6 = React.createRef();
        this.Ref7 = React.createRef();
        this.Ref8 = React.createRef();
    }
    componentDidMount(){
        const animeTimeline = anime.timeline({
            easing: 'easeOutBounce',
            duration: 750,
            loop:true,
            direction:"alternate",
          });

          const trans = 10;
          animeTimeline
            .add({
                targets: this.Ref1.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref2.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref3.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref4.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref5.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref6.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref7.current,
                translateY: trans,
            })
            .add({
                targets: this.Ref8.current,
                translateY: trans,
            })
      }
      render() {
        return (
          <div style={style}>
            <p 
                ref={this.Ref1}
                style={style1}
            >S</p>
            <p ref={this.Ref2} style={style1}>E</p>
            <p ref={this.Ref3} style={style1}>が</p>
            <p ref={this.Ref4} style={style1}>や</p>
            <p ref={this.Ref5} style={style1}>っ</p>
            <p ref={this.Ref6} style={style1}>て</p>
            <p ref={this.Ref7} style={style1}>み</p>
            <p ref={this.Ref8} style={style1}>た</p>
          </div>
        )
      }
    }
export default TitleComponent;

