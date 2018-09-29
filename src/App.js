import React, { Component } from 'react';
import './assets/css/reset.css';
import {
  extractFromSearchParams,
  getAsanaProject,
  getAsanaTasks,
} from './assets/functions/functions';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectName: '',
      tasks: [],
    };
  }

  componentDidMount = async () => {
    let projectId = extractFromSearchParams('project');
    let projectName = await getAsanaProject(projectId);
    let tasks = await getAsanaTasks(projectId);

    this.setState({
      projectName,
      tasks,
    })
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
