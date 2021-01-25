import React from 'react';
import PropTypes from 'prop-types';

class LeftTab extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: -1,
    };
  }

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
	              <input 
	              	className="form-control" 
	              	type="text" 
	              	id="name" 
	              	name="name"
	              	onFocus={this.onFocusName}
	              	onBlur={this.onBlurName}
	              />
	            </div>
	            {/*Birthday*/}
	            <div className="form-group">
	              <label className="control-label">
	                Birthday:
	              </label>
	              <input 
	              	className="form-control"
	              	id="date"
	              	name="date"
	              	type="date"
	              	onFocus={this.onFocusName}
	              	onBlur={this.onBlurName}
	              />
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

  onFocusName = (e) => {
    const name = e.target.value;
    if (name === '') {
    	this.props.updateName('', 1)
    }
  }

  onBlurName = (e) => {
    const name = e.target.value;
    this.props.updateName(name, 2)
  }

  onFocusBirthday = (e) => {
    const birthdayStr = e.target.value;
    if (birthdayStr === '') {
    	this.props.updateAge(-1, 1)
    }
  }

  onBlurBirthday = (e) => {
    const birthDate = new Date(e.target.value);
  //   const now = new Date();
		// const curYear = now.getFullYear();
    console.log(birthDate);
  }
}

LeftTab.propTypes = {
  updateName: PropTypes.func,
  updateAge: PropTypes.func,
  updateMode: PropTypes.func,
  addSkill: PropTypes.func,
  skills: PropTypes.array,
  addedSkills: PropTypes.array,
};

export default LeftTab;
