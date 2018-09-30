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

const TaskWrapper = styled.li`
  font-size: 1.1em;
  padding-bottom: 14px;
  border-bottom: 1px solid #c6c5cf;
  &:not(:last-of-type) {
    margin-bottom: 34px;
  }
`;

const TaskName = styled.span`

`;
export default Task;
