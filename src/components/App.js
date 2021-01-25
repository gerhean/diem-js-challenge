import React from 'react';

import LeftTab from './LeftTab';
import RightTab from './RightTab';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 0 for untouched, 1 for entering, 2 for entered
      enterNameStage: 0,
      name: '',
      // 0 for untouched, 1 for entering, 2 for valid, 3 for invalid
      enterAgeStage: 0,
      age: -1,
      // -1 for default, 0 for light, 1 for dark
      mode: -1,
      skills: ["HTML", "CSS", "JavaScript"],
      addedSkills: [false, false, false],
    };
  }

  render() {
    return (
      <main className="m-3 p-3 d-flex justify-content-center align-items-center h-100">
        <div className="container-fluid">
          <div className="row h-100">
            <LeftTab 
              updateName={this.updateName}
              updateAge={this.updateAge}
              updateMode={this.updateMode}
              addSkill={this.addSkill}
              skills={this.state.skills}
              addedSkills={this.state.addedSkills}
            />
            <RightTab />
          </div>
        </div>
      </main>
    );
  }

  updateName = (name, stage) => {
    this.setState({
      name: name,
      enterNameStage: stage,
    });
  }

  updateAge = (age, stage) => {
    this.setState({
      age: age,
      enterAgeStage: stage,
    });
  }

  updateMode = (mode) => {
    this.setState({
      mode: mode
    });
  }

  addSkill = (index) => {
    //copy the array
    const newAddedSkills = this.state.addedSkills.slice();
    newAddedSkills[index] = true;
    this.setState({
      addedSkills: newAddedSkills
    });
  }

  removeSkill = (index) => {
    //copy the array
    const newAddedSkills = this.state.addedSkills.slice();
    newAddedSkills[index] = false;
    this.setState({
      addedSkills: newAddedSkills
    });
  }
}

export default App;
