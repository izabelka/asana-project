import React, { Component } from 'react';
import './assets/css/reset.css';
import {
  extractFromSearchParams,
} from './assets/functions/functions';
import {
  getProject,
  getTasks,
} from './assets/functions/asanaApi'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      project: '',
    };
  }

  componentWillMount = () => {
    this.setState({
      project: extractFromSearchParams('project'),
    });
  }

  componentDidMount = async () => {
    let project = await getProject(this.state.project);
    let tasks = await getTasks(this.state.project)
    console.log(project)
    console.log(tasks)
  }

  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
