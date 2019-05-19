import {
  ColumnContainer,
  ColumnTitle,
  ColumnContent,
  AddButton
} from "./BoardStyles";
import TaskList from "./TaskList";

const Column = ({ tasks, setTasks, filter }) => {
  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, status: filter, text: "new task" }
    ]);
  };

  return (
    <ColumnContainer>
      <ColumnTitle>
        <AddButton onClick={addTask}>+</AddButton>
        {filter}
      </ColumnTitle>
      <ColumnContent>
        <TaskList tasks={tasks} setList={setTasks} filter={filter} />
      </ColumnContent>
    </ColumnContainer>
  );
};

export default Column;
