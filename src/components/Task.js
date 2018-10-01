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
        <TaskName
          href={`https://app.asana.com/0/${this.props.projectId}/${this.props.task.id}`}>
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
  width: 100%;
  font-size: 1.1em;
  padding-bottom: 10px;
  border-bottom: 1px solid #c6c5cf;
  &:not(:last-of-type) {
    margin-bottom: 22px;
  }
`;

const TaskName = styled.a`
  line-height: 1.2;
  word-break: break-word;
  cursor: pointer;
  text-decoration: none;
  color: #151b26;

  &:hover {
    color: #14aaf5;
  }
`;

const Button = styled.span`
  background: #14aaf5;
  color: #fff;
  height: 34px;
  line-height: 34px;
  padding: 0 9px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 16px;

  &:hover {
    background: #4186e0;
  }
`;
export default Task;
