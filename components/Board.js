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

    // remove draggableId from the tasks ids in the right column
    const newIds = columns[destination.droppableId];
    newIds.splice(source.index, 1);

    // add the draggableId in the tasksIds but in the new index
    newIds.splice(destination.index, 0, draggableId);

    // build new state with newIds
    const newState = { ...columns, [destination.droppableId]: newIds };
    setColumns(newState);
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
