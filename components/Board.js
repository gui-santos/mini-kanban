import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Grid } from "./BoardStyles";
import Column from "./Column";

function Board() {
  // list of all tasks in the app
  const [tasks, setTasks] = useState([
    { id: 1, text: "this task is in TO DO" },
    { id: 2, text: "Delete this one" },
    { id: 3, text: "this task is IN PROGRESS" },
    { id: 4, text: "this task is DONE" }
  ]);

  // list storing the ids of the tasks for each column
  const [columns, setColumns] = useState({
    toDo: [1, 2],
    inProg: [3],
    done: [4]
  });

  // storing the quantity of tasks in order to create simple unique ids for new tasks
  const [counter, setCounter] = useState(tasks.length);

  const handleOnDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    ) {
      return;
    }

    const startColumn = columns[source.droppableId];
    const endColumn = columns[destination.droppableId];

    // remove the task id from the column user started dragging
    const newStartIds = startColumn;
    newStartIds.splice(source.index, 1);

    if (destination.droppableId === source.droppableId) {
      // the task is being dropped in same column
      // add the id to the same column
      newStartIds.splice(destination.index, 0, draggableId);

      // build new state with the new order of ids
      const newState = { ...columns, [source.droppableId]: newStartIds };
      setColumns(newState);
    } else {
      // the task is being dropped in another column
      // add the id of the task in this new column
      const newEndIds = endColumn;
      newEndIds.splice(destination.index, 0, draggableId);

      // build state for the new order of ids for the starting column and the dropping column
      const newState = {
        ...columns,
        [source.droppableId]: newStartIds,
        [destination.droppableId]: newEndIds
      };
      setColumns(newState);
    }
  };

  return (
    <Grid>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Column
          label="to do"
          columnId="toDo"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
          columns={columns}
          setColumns={setColumns}
        />
        <Column
          label="in progress"
          columnId="inProg"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
          columns={columns}
          setColumns={setColumns}
        />
        <Column
          label="done"
          columnId="done"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
          columns={columns}
          setColumns={setColumns}
        />
      </DragDropContext>
    </Grid>
  );
}

export default Board;
