import React from 'react';

class LeftTab extends React.Component {
  render() {
  	return (
	    <div class="col-12 col-sm-12 col-md-6">
	      <div class="panel bg-light">
	        <div class="panel-body p-3">
	          <form action="#">
	          	{/*Name*/}
	            <div class="form-group">
	              <label class="control-label" for="name">
	                Name:
	              </label>
	              <input class="form-control" type="text" id="name" name="name" />
	            </div>
	            {/*Birthday*/}
	            <div class="form-group">
	              <label class="control-label" for="birthday">
	                Birthday:
	              </label>
	              <input class="form-control" id="date" name="date" type="date"/>
	            </div>
	            {/*Choose Theme*/}
	            <div class="form-group">
	              <label class="control-label mr-3">
	                Choose Theme:
	              </label>
	              <div class="form-check form-check-inline">
	                <input class="form-check-input" type="radio" name="modeOptions" id="light" value="Light"/>
	                <label class="form-check-label" for="light">Light Mode</label>
	              </div>
	              <div class="form-check form-check-inline">
	                <input class="form-check-input" type="radio" name="modeOptions" id="dark" value="Dark"/>
	                <label class="form-check-label" for="dark">Dark Mode</label>
	              </div>
	            </div>
	            {/*Skills*/}
	            <div class="form-group">
	              <label class="control-label mr-3">
	                Skills:
	              </label>
	              <button type="button" class="btn btn-success btn-sm" id="html">HTML</button>
	              <button type="button" class="btn btn-success btn-sm" id="css">CSS</button>
	              <button type="button" class="btn btn-success btn-sm" id="javascript">JavaScript</button>
	            </div>

	          </form>
	        </div>
	      </div>
	    </div>
	  );
  }
}

export default LeftTab;
