import React, { Component } from 'react';
import './assets/css/reset.css';
import styled from 'styled-components';
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
      <Wrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export default App;
