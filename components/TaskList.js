import Task from "./Task";

const TaskList = ({ tasks, setList, filter }) => {
  const onDelete = deletedTaskId => {
    const newList = tasks.reduce(
      (allTasks, task) =>
        task.id !== deletedTaskId ? [...allTasks, task] : allTasks,
      []
    );
    setList(newList);
  };

  return tasks
    .filter(task => task.status === filter)
    .map(task => (
      <Task key={task.id} text={task.text} onDelete={() => onDelete(task.id)} />
    ));
};

export default TaskList;
