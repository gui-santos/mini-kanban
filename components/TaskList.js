import Task from "./Task";

const TaskList = ({ tasks, setList, filter }) => {
  const onDelete = deletedTask => {
    const newList = tasks.reduce(
      (allTasks, task) =>
        task.text !== deletedTask.text ? [...allTasks, task] : allTasks,
      []
    );
    setList(newList);
  };

  return tasks
    .filter(task => task.status === filter)
    .map((task, idx) => (
      <Task key={idx} text={task.text} onDelete={() => onDelete(task)} />
    ));
};

export default TaskList;
