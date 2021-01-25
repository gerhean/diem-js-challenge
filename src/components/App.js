import React from 'react';

import LeftTab from './LeftTab';
import RightTab from './RightTab';


class App extends React.Component {
  render() {
    return (
      <main className="m-3 p-3 d-flex justify-content-center align-items-center h-100">
        <div className="container-fluid">
          <div className="row h-100">
            <LeftTab />
            <RightTab />
          </div>
        </div>
      </main>
    );
  }
}

export default App;
