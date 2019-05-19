import { useState } from "react";

import { Grid } from "./BoardStyles";
import Column from "./Column";

function Board() {
  const [tasks, setTasks] = useState([
    { id: 1, status: "todo", text: "this task is in TO DO" },
    { id: 2, status: "todo", text: "Delete this one" },
    { id: 3, status: "inProg", text: "this task is IN PROGRESS" },
    { id: 4, status: "done", text: "this task is DONE" }
  ]);

  return (
    <Grid>
      <Column tasks={tasks} setTasks={setTasks} filter="todo" />
      <Column tasks={tasks} setTasks={setTasks} filter="inProg" />
      <Column tasks={tasks} setTasks={setTasks} filter="done" />
    </Grid>
  );
}

export default Board;
