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

  const onEdit = (editedTaskId, text) => {
    const newList = tasks.reduce((allTasks, task) => {
      const newTask = task.id === editedTaskId ? { ...task, text } : task;
      return [...allTasks, newTask];
    }, []);
    setList(newList);
  };

  return tasks
    .filter(task => task.status === filter)
    .map(task => (
      <Task key={task.id} task={task} onDelete={onDelete} onEdit={onEdit} />
    ));
};

export default TaskList;
