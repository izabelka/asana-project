import React, { Component } from 'react';
import '../assets/css/reset.css';
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
          <Loading>{'loading'}</Loading>
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
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 100px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

const ProjectWrapper = styled.div``;

const ProjectName = styled.h1`
  font-size: 20px;
  font-weight: 600;
`;

const TasksWrapper = styled.div``;

const Info = styled.p``;

const Loading = styled.span``;

export default App;
