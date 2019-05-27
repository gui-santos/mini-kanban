import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";

import { Grid } from "./BoardStyles";
import Column from "./Column";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, status: "to do", text: "this task is in TO DO" },
    { id: 2, status: "to do", text: "Delete this one" },
    { id: 3, status: "in progress", text: "this task is IN PROGRESS" },
    { id: 4, status: "done", text: "this task is DONE" }
  ]);
  const [counter, setCounter] = useState(tasks.length);

  const handleOnDragEnd = result => {
    console.log(result);
  };

  return (
    <Grid>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Column
          columnId={1}
          filter="to do"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Column
          columnId={2}
          filter="in progress"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
        />
        <Column
          columnId={3}
          filter="done"
          counter={counter}
          setCounter={setCounter}
          tasks={tasks}
          setTasks={setTasks}
        />
      </DragDropContext>
    </Grid>
  );
}

export default Board;
