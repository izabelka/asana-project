import React, { Component } from 'react';
import styled from 'styled-components';

class Task extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hidden: false,
    };
  }

  onHideClick = () => {
    this.setState({
      hidden: true,
    })
  }

  render() {
    return (
      <TaskWrapper
        hidden={this.state.hidden}>
        <TaskName>
          {this.props.task.name}
        </TaskName>
        <Button
          onClick={this.onHideClick}>
          {'Hide'}
        </Button>
      </TaskWrapper>
    );
  }
}

const TaskWrapper = styled.li`
  display: ${({ hidden }) => hidden ? 'none' : 'flex'};
  align-items: center;
  justify-content: space-between;
  font-size: 1.1em;
  padding-bottom: 10px;
  border-bottom: 1px solid #c6c5cf;
  &:not(:last-of-type) {
    margin-bottom: 34px;
  }
`;

const TaskName = styled.span`
`;

const Button = styled.span`
  background: #14aaf5;
  color: #fff;
  height: 34px;
  line-height: 34px;
  padding: 0 9px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #4186e0;
  }
`;
export default Task;
