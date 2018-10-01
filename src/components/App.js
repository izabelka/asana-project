import React, { Component } from 'react';
import '../assets/css/reset.css';
import '../assets/css/styles.css';
import styled, { keyframes } from 'styled-components';
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
    let projectId = extractFromSearchParams('project');
    projectId = projectId ? projectId : false;
    this.setState({
      projectId,
    })
  }

  componentDidMount = async () => {
    let projectName = '',
        tasks = [];
    if (this.state.projectId) {
      projectName = await getAsanaProject(this.state.projectId);
      tasks = await getAsanaTasks(this.state.projectId);
    }
    this.setState({
      projectName,
      tasks,
      appState: 'ready',
    });
  }

  renderTasks = () => {
    if (this.state.tasks && this.state.tasks.length > 0) {
      return this.state.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          projectId={this.state.projectId}
        />
      ));
    }

    return (
      <React.Fragment>
        <Info>
          {'There are no tasks for this project'}
        </Info>
        <Link
          href={`https://app.asana.com/0/${this.state.projectId}`}>
          {'Visit project in Asana App'}
        </Link>
      </React.Fragment>
    );
  }

  render() {
    return (
      <Wrapper>
        <Navbar/>
        {this.state.appState === 'loading' &&
          <Loader/>
        }
        {this.state.appState === 'ready' && this.state.projectName &&
          <ProjectWrapper>
            <ProjectName>
              {this.state.projectName}
            </ProjectName>
            <TasksWrapper>
              {this.state.projectName && this.renderTasks()}
            </TasksWrapper>
          </ProjectWrapper>
        }
        {this.state.appState === 'ready' && !this.state.projectId &&
          <ErrorMessage>
            {'No project ID provided'}
          </ErrorMessage>
        }
        {this.state.appState === 'ready' && !this.state.projectName &&
          this.state.projectId &&
          <ErrorMessage>
            {`Project with ID: ${this.state.projectId} was not found`}
          </ErrorMessage>
        }
      </Wrapper>
    );
  }
}

const Show = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

const Loading = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

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
  margin-bottom: 60px;
  animation: ${Show} 0.6s;
`;

const ProjectName = styled.h1`
  font-size: 2em;
  font-weight: 700;
`;

const TasksWrapper = styled.ul`
  margin: 56px 0;
`;

const Info = styled.p``;

const Link = styled.a`
  color: #14aaf5;
`;

const ErrorMessage = styled.p`
  color: red;
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #14aaf5;
  width: 30px;
  height: 30px;
  animation: ${Loading} 2s linear infinite;
`;

export default App;
