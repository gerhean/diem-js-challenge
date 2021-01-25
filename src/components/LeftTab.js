import React from 'react';
import './LeftTab.scss';

class LeftTab extends React.Component {
  render() {
  	return (
	    <div className="col-12 col-sm-12 col-md-6">
	      <div className="panel bg-light">
	        <div className="panel-body p-3">
	          <form action="#">
	          	{/*Name*/}
	            <div className="form-group">
	              <label className="control-label">
	                Name:
	              </label>
	              <input className="form-control" type="text" id="name" name="name" />
	            </div>
	            {/*Birthday*/}
	            <div className="form-group">
	              <label className="control-label">
	                Birthday:
	              </label>
	              <input className="form-control" id="date" name="date" type="date"/>
	            </div>
	            {/*Choose Theme*/}
	            <div className="form-group">
	              <label className="control-label mr-3">
	                Choose Theme:
	              </label>
	              <div className="form-check form-check-inline">
	                <input className="form-check-input" type="radio" name="modeOptions" id="light" value="Light"/>
	                <label className="form-check-label">Light Mode</label>
	              </div>
	              <div className="form-check form-check-inline">
	                <input className="form-check-input" type="radio" name="modeOptions" id="dark" value="Dark"/>
	                <label className="form-check-label">Dark Mode</label>
	              </div>
	            </div>
	            {/*Skills*/}
	            <div className="form-group">
	              <label className="control-label mr-3">
	                Skills:
	              </label>
	              <button type="button" className="btn btn-success btn-sm" id="html">HTML</button>
	              <button type="button" className="btn btn-success btn-sm" id="css">CSS</button>
	              <button type="button" className="btn btn-success btn-sm" id="javascript">JavaScript</button>
	            </div>
	          </form>
	        </div>
	      </div>
	    </div>
	  );
  }
}

export default LeftTab;
