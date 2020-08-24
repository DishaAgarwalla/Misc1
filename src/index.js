import React from 'react';
import ReactDOM from 'react-dom';
import Stylesheets from './components/Stylesheets';
import Inline from './components/Inline';

const back = {
  backgroundColor: 'black'
}

const App = () => {
  return (
    <div style={back}>
      <Stylesheets primary={true} />
      <Inline />
    </div>
  )
}



ReactDOM.render(<App />,
  document.getElementById('root')
);

