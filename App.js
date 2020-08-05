import React from 'react';
import SnsIconsComponent from './components/organisms/snsIcons'
import AcordionComponent from './components/organisms/acodion'

const right = {
  textAlign: 'right',
  paddingRight:60
}

function App() {
  return (
    <div className="App">
      <div style={right}>
        <SnsIconsComponent ></SnsIconsComponent>
      </div>
      <div>
        <AcordionComponent></AcordionComponent>
      </div>
    </div>
  );
}

export default App;
