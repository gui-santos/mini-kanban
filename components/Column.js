import { Droppable } from "react-beautiful-dnd";

import {
  ColumnContainer,
  ColumnTitle,
  ColumnContent,
  AddButton
} from "./BoardStyles";
import Task from "./Task";

const Column = ({
  columnId,
  counter,
  setCounter,
  tasks,
  setTasks,
  label,
  columns,
  setColumns
}) => {
  const addTask = () => {
    const newTask = { id: counter + 1, status: label, text: "new task" };
    setCounter(counter + 1);

    setTasks([...tasks, newTask]);
    setColumns({ ...columns, [columnId]: [...columns[columnId], newTask.id] });
  };

  const deleteTask = deletedTaskId => {
    const newList = tasks.reduce(
      (allTasks, task) =>
        task.id !== deletedTaskId ? [...allTasks, task] : allTasks,
      []
    );
    const newIds = columns[columnId].filter(id => id !== deletedTaskId);

    setTasks(newList);
    setColumns({
      ...columns,
      [columnId]: newIds
    });
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
        {label}
      </ColumnTitle>
      <Droppable droppableId={columnId}>
        {provided => (
          <ColumnContent ref={provided.innerRef} {...provided.droppableProps}>
            {columns[columnId].map((taskId, idx) => {
              const task = tasks.find(task => taskId === task.id);

              return (
                <Task
                  key={task.id}
                  index={idx}
                  task={task}
                  onDelete={deleteTask}
                  onEdit={editTask}
                />
              );
            })}
            {provided.placeholder}
          </ColumnContent>
        )}
      </Droppable>
    </ColumnContainer>
  );
};

export default Column;
