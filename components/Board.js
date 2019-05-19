import { useState } from "react";

import { Grid, Column, ColumnTitle, ColumnContent } from "./BoardStyles";
import TaskList from "./TaskList";

function Board() {
  const [tasks, setTasks] = useState([
    { status: "todo", text: "this task is in TO DO" },
    { status: "todo", text: "Delete this one" },
    { status: "inProg", text: "this task is IN PROGRESS" },
    { status: "done", text: "this task is DONE" }
  ]);

  return (
    <Grid>
      <Column>
        <ColumnTitle>TO DO</ColumnTitle>
        <ColumnContent>
          <TaskList tasks={tasks} setList={setTasks} filter="todo" />
        </ColumnContent>
      </Column>

      <Column>
        <ColumnTitle>IN PROGRESS</ColumnTitle>
        <ColumnContent>
          <TaskList tasks={tasks} setList={setTasks} filter="inProg" />
        </ColumnContent>
      </Column>

      <Column>
        <ColumnTitle>DONE</ColumnTitle>
        <ColumnContent>
          <TaskList tasks={tasks} setList={setTasks} filter="done" />
        </ColumnContent>
      </Column>
    </Grid>
  );
}

export default Board;
