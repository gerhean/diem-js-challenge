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
      // '' for default, "light", "dark"
      mode: '',
      skills: ["HTML", "CSS", "JavaScript"],
      addedSkills: [false, false, false],
      addedSkillsOrder: [],
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
            <RightTab 
              removeSkill={this.removeSkill}
              enterNameStage={this.state.enterNameStage}
              name={this.state.name}
              enterAgeStage={this.state.enterAgeStage}
              age={this.state.age}
              mode={this.state.mode}
              skills={this.state.skills}
              addedSkillsOrder={this.state.addedSkillsOrder}
            />
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
    const newAddedSkillsOrder = this.state.addedSkillsOrder.slice();
    newAddedSkillsOrder.push(index);
    this.setState({
      addedSkills: newAddedSkills,
      addedSkillsOrder: newAddedSkillsOrder,
    });
  }

  removeSkill = (index) => {
    //copy the array
    const newAddedSkills = this.state.addedSkills.slice();
    newAddedSkills[index] = false;
    const newAddedSkillsOrder = this.state.addedSkillsOrder.filter(e => e !== index)
    this.setState({
      addedSkills: newAddedSkills,
      addedSkillsOrder: newAddedSkillsOrder,
    });
  }
}

export default App;
