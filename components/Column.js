import {
  ColumnContainer,
  ColumnTitle,
  ColumnContent,
  AddButton
} from "./BoardStyles";
import TaskList from "./TaskList";

const Column = ({ counter, setCounter, tasks, setTasks, filter }) => {
  const addTask = () => {
    setCounter(counter + 1);
    setTasks([...tasks, { id: counter + 1, status: filter, text: "new task" }]);
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
