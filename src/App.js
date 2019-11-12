import React, { Fragment } from 'react';
import './App.less';

const App = function (props) {
  return (
    <Fragment>
      {props.children}
    </Fragment>
  )
}

export default App;