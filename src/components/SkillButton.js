import React from 'react';
import PropTypes from 'prop-types';

class SkillButton extends React.Component {
  render() {
    return (
      <button 
        type="button" 
        className={`btn btn-sm ${this.props.isInRightTab ? "right-button" : "btn-success"}`} 
        onClick={this.onClick}
      >
        {this.props.name}
      </button>
    );
  }

  onClick = (e) => {
    this.props.toggleButton(this.props.index)
  }
}

SkillButton.propTypes = {
  index: PropTypes.number,
  name: PropTypes.string,
  toggleButton: PropTypes.func,
  isInRightTab: PropTypes.bool,
};

export default SkillButton;
