import React from 'react';
import PropTypes from 'prop-types';
import SkillButton from './SkillButton';

const NAME_ON_FOCUS = "Hello there! What's your name?";
const NAME_INVALID = "Can't you tell me your name? Please?";

const AGE_ON_FOCUS = "Lemme guess, your age is...";
const AGE_NEGATIVE = "Are you a time traveller? Cause you seem to be born in the future!";
const AGE_INVALID = "Can't you tell me your age? Please?";

class RightTab extends React.Component {
  render() {
    // Name
    let nameString = "";
    if (this.props.enterNameStage === 1) {
      nameString = NAME_ON_FOCUS;
    } else if (this.props.enterNameStage === 2) {
      nameString = 
        this.props.name === "" ? 
          NAME_INVALID 
        : 
          `Hi, ${this.props.name}!`
        ;
    }

    // Age
    let ageString = "";
    if (this.props.enterAgeStage === 1) {
      ageString = AGE_ON_FOCUS;
    } else if (this.props.enterAgeStage === 2) {
      ageString = 
        this.props.age < 0 ? 
          AGE_NEGATIVE 
        : 
          `Your age is ${this.props.age} years old!`;
        ;
    } else if (this.props.enterAgeStage === 3) {
      ageString = AGE_INVALID;
    }

    // Choose Theme
    let themeString = "";
    if (this.props.mode === "light") {
      themeString = `You chose Light mode!`;
    } else if (this.props.mode === "dark") {
      themeString = `You chose Dark mode!`;
    }
    const themeClass = this.props.mode === "dark" ? "bg-dark text-white" : "bg-light text-dark";

    // Skills
    const skillButtons = this.props.addedSkillsOrder.map((skillIndex) => 
      <SkillButton 
        key={skillIndex}
        index={skillIndex}
        name={this.props.skills[skillIndex]}
        toggleButton={this.props.removeSkill}
        isInRightTab={true}
      />
    );

    return (
      <div className="col-12 col-sm-12 col-md-6 h-100">
        <div 
          className={`panel ${themeClass}`}
        >
          <div className="panel-body p-3">
            <p id="nameOutput">
              {nameString}
            </p>
            <p id="ageOutput">
              {ageString}
            </p>
            <p id="themeOutput">
              {themeString}
            </p>
            <p id="skillsOutput">
              {skillButtons}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

RightTab.propTypes = {
  removeSkill: PropTypes.func,
  enterNameStage: PropTypes.number,
  name: PropTypes.string,
  enterAgeStage: PropTypes.number,
  age: PropTypes.number,
  mode: PropTypes.string,
  skills: PropTypes.array,
  addedSkillsOrder: PropTypes.array,
};

export default RightTab;
