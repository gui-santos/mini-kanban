import { TaskCard, CloseButton } from "./TaskStyles";

const Task = ({ text, onDelete }) => (
  <TaskCard>
    <CloseButton onClick={onDelete}>X</CloseButton>
    <span>{text}</span>
  </TaskCard>
);

export default Task;
