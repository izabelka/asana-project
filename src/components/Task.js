import React, { Component } from 'react';
import styled from 'styled-components';

class Task extends Component {

  render() {
    return (
      <TaskWrapper>
        <TaskName>
          {this.props.task.name}
        </TaskName>
      </TaskWrapper>
    );
  }
}

const TaskWrapper = styled.div`
`;

const TaskName = styled.span`

`;
export default Task;
