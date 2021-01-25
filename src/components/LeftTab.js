import React from 'react';
import PropTypes from 'prop-types';
import SkillButton from './SkillButton';


function emptySubmit(e) {
  e.preventDefault();
}

class LeftTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: -1,
    };
  }

  render() {
    const skillButtons = this.props.skills.map((name, index) => {
        return !this.props.addedSkills[index] ?
          <SkillButton 
            key={name}
            index={index}
            name={name}
            toggleButton={this.props.addSkill}
            isInRightTab={false}
          />
        :
          null
      }
    );
    return (
      <div className="col-12 col-sm-12 col-md-6">
        <div className="panel bg-light">
          <div className="panel-body p-3">
            <form action="#" onSubmit={emptySubmit}>
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
                  onFocus={this.onFocusBirthday}
                  onBlur={this.onBlurBirthday}
                />
              </div>
              {/*Choose Theme*/}
              <div className="form-group">
                <label className="control-label mr-3">
                  Choose Theme:
                </label>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input" 
                    type="radio" 
                    name="modeOptions"
                    id="light"
                    value="light"
                    onClick={this.onClickModeOptions}
                  />
                  <label className="form-check-label">Light Mode</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    className="form-check-input"
                    type="radio"
                    name="modeOptions"
                    id="dark"
                    value="dark"
                    onClick={this.onClickModeOptions}
                    />
                  <label className="form-check-label">Dark Mode</label>
                </div>
              </div>
              {/*Skills*/}
              <div className="form-group">
                <label className="control-label mr-3">
                  Skills:
                </label>
                {skillButtons}
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
    if (isNaN(birthDate)) {
      this.props.updateAge(-1, 3);
      return;
    }
    const now = new Date();
    const age = now.getTime() - birthDate.getTime();
    if (age > 0) {
      this.props.updateAge(now.getFullYear() - birthDate.getFullYear(), 2);
      return;
    }
    this.props.updateAge(-1, 2);
  }

  onClickModeOptions = (e) => {
    this.props.updateMode(e.target.value);
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
