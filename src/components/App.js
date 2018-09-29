import React, { Component } from 'react';
import '../assets/css/reset.css';
import styled from 'styled-components';
import {
  extractFromSearchParams,
  getAsanaProject,
  getAsanaTasks,
} from '../assets/functions/functions';
import Navbar from './Navbar';

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
        <Navbar/>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export default App;
