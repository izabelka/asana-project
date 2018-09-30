import React, { Component } from 'react';
import '../assets/css/reset.css';
import '../assets/css/styles.css';
import styled from 'styled-components';
import {
  extractFromSearchParams,
  getAsanaProject,
  getAsanaTasks,
} from '../assets/functions/functions';
import Navbar from './Navbar';
import Task from './Task';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projectId: '',
      projectName: '',
      tasks: [],
      appState: 'loading',
    };
  }

  componentWillMount = () => {
    this.setState({
      projectId: extractFromSearchParams('project'),
    })
  }

  componentDidMount = async () => {
    let projectName = await getAsanaProject(this.state.projectId);
    let tasks = await getAsanaTasks(this.state.projectId);
    this.setState({
      projectName,
      tasks,
      appState: 'ready',
    });
  }

  renderTasks = () => {
    if (this.state.tasks.length > 0) {
      return this.state.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ));
    }

    return (
      <Info>
        {'There are no tasks for this project'}
      </Info>
    );
  }

  render() {
    return (
      <Wrapper>
        <Navbar/>
        {this.state.appState === 'loading' &&
          <Loading>
            {'loading'}
          </Loading>
        }
        {this.state.appState === 'ready' &&
          <ProjectWrapper>
            <ProjectName>
              {this.state.projectName}
            </ProjectName>
            <TasksWrapper>
              {this.renderTasks()}
            </TasksWrapper>
          </ProjectWrapper>
        }
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: #151b26;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Helvetica Neue, Helvetica, sans-serif;
  margin-top: 100px;
`;

const ProjectWrapper = styled.div`
  padding: 34px;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  width: 60vw;
  max-width: 480px;
  min-height: 440px;
`;

const ProjectName = styled.h1`
  font-size: 2em;
  font-weight: 700;
`;

const TasksWrapper = styled.ul`
  margin-top: 56px;
`;

const Info = styled.p``;

const Loading = styled.span``;

export default App;
