import { Droppable } from "react-beautiful-dnd";

import {
  ColumnContainer,
  ColumnTitle,
  ColumnContent,
  AddButton
} from "./BoardStyles";
import Task from "./Task";

const Column = ({ columnId, counter, setCounter, tasks, setTasks, filter }) => {
  const addTask = () => {
    setCounter(counter + 1);
    setTasks([...tasks, { id: counter + 1, status: filter, text: "new task" }]);
  };

  const deleteTask = deletedTaskId => {
    const newList = tasks.reduce(
      (allTasks, task) =>
        task.id !== deletedTaskId ? [...allTasks, task] : allTasks,
      []
    );
    setTasks(newList);
  };

  const editTask = (editedTaskId, text) => {
    const newList = tasks.reduce((allTasks, task) => {
      const newTask = task.id === editedTaskId ? { ...task, text } : task;
      return [...allTasks, newTask];
    }, []);
    setTasks(newList);
  };

  return (
    <ColumnContainer>
      <ColumnTitle>
        <AddButton onClick={addTask}>+</AddButton>
        {filter}
      </ColumnTitle>
      <Droppable droppableId={columnId}>
        {provided => (
          <ColumnContent ref={provided.innerRef} {...provided.droppableProps}>
            {tasks
              .filter(task => task.status === filter)
              .map((task, idx) => (
                <Task
                  key={task.id}
                  index={idx}
                  task={task}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              ))}
            {provided.placeholder}
          </ColumnContent>
        )}
      </Droppable>
    </ColumnContainer>
  );
};

export default Column;
