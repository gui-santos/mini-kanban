import { Draggable } from "react-beautiful-dnd";

import { TaskCard, CloseButton } from "./TaskStyles";

const Task = ({ index, task, onDelete, onEdit }) => (
  <Draggable draggableId={task.id} index={index}>
    {provided => (
      <TaskCard
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <CloseButton onClick={() => onDelete(task.id)}>X</CloseButton>
        <input
          type="text"
          value={task.text}
          onChange={e => onEdit(task.id, e.target.value)}
        />
      </TaskCard>
    )}
  </Draggable>
);

export default Task;
