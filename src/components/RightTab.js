import React from 'react';

class RightTab extends React.Component {
  render() {
  	return (
	    <div className="col-12 col-sm-12 col-md-6 h-100">
        <div className="panel bg-dark text-white">
          <div className="panel-body p-3">
            <p id="nameOutput"></p>
            <p id="ageOutput"></p>
            <p id="themeOutput"></p>
            <p id="skillsOutput"></p>
          </div>
        </div>
      </div>
	  );
  }
}

export default RightTab;
