import { useState } from "react";

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

  return (
    <Grid>
      <Column
        filter="to do"
        counter={counter}
        setCounter={setCounter}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        filter="in progress"
        counter={counter}
        setCounter={setCounter}
        tasks={tasks}
        setTasks={setTasks}
      />
      <Column
        filter="done"
        counter={counter}
        setCounter={setCounter}
        tasks={tasks}
        setTasks={setTasks}
      />
    </Grid>
  );
}

export default Board;
