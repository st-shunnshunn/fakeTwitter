import React from 'react';
import SnsIconsComponent from './components/organisms/snsIcons'
import AcordionComponent from './components/organisms/acodion'
import TabComponent from './components/organisms/tab'
import SplitePane from './components/organisms/splitePane'
import TitleComponent from './components/molecules/title'
import HumBurger from './components/molecules/burger'

const head = {
  paddingRight:100,
  paddingLeft:100
}

const center = {
  textAlign: 'center',
}

const style = {
  display:'inline-block',
  width:'50%',
}

const right = {
  textAlign: 'right',
}

function App() {
  return (
    <div id="outer-container" className="App">
      <HumBurger pageWrapId={"page-wrap"} outerContainerId={"outer-container"}></HumBurger>
      <div id="page-wrap">
        <div style={head}>
          <div style={style}>
            <TitleComponent></TitleComponent>
          </div>
          <div style={{...style,...right}}>
            <SnsIconsComponent ></SnsIconsComponent>
          </div>
        </div>
        <div>
          <AcordionComponent></AcordionComponent>
        </div>
          <SplitePane></SplitePane>
      </div>
    </div>
  );
}

export default App;
