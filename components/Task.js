import styled from "styled-components";

const TaskCard = styled.div`
  background-color: #fff;
  border-radius: 2px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  float: right;
  border: 0;
  padding: 0;
  font-size: 1rem;
  cursor: pointer;
  color: #f54848;
`;

const Task = ({ task, handleDelete }) => (
  <TaskCard>
    <CloseButton onClick={handleDelete}>X</CloseButton>
    <span>{task.description}</span>
  </TaskCard>
);

export default Task;
