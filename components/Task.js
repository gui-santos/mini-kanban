// import InlineEdit from "react-edit-inline";

import { TaskCard, CloseButton } from "./TaskStyles";

const Task = ({ task, onDelete, onEdit }) => (
  <TaskCard>
    <CloseButton onClick={() => onDelete(task.id)}>X</CloseButton>
    <input
      type="text"
      value={task.text}
      onChange={e => onEdit(task.id, e.target.value)}
    />
  </TaskCard>
);

export default Task;
