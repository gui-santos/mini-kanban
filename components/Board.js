import { useState } from "react";
import styled from "styled-components";

import Task from "./Task";

const Grid = styled.div`
  height: calc(100% - 37px - 32px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div:last-child {
    margin-right: 0;
    padding-right: 0;
    border-right: 0;
  }
`;

const Column = styled.div`
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid;
`;

const ColumnTitle = styled.h3`
  margin: 0 0 1rem;
  font-size: 0.75rem;
  font-weight: normal;
`;

const ColumnContent = styled.div`
  display: flex;
  flex-direction: column;
`;

function Board() {
  const [todoList, setTodoList] = useState([
    { description: "this task is in TO DO" },
    { description: "Delete this one" }
  ]);
  const [inProgList, setInProgList] = useState([
    { description: "this task is IN PROGRESS" }
  ]);
  const [doneList, setDoneList] = useState([
    { description: "this task is DONE" }
  ]);

  return (
    <Grid>
      <Column>
        <ColumnTitle>TO DO</ColumnTitle>
        <ColumnContent>
          {todoList.map((task, idx) => (
            <Task
              key={idx}
              task={task}
              handleDelete={() => console.log(task.description)}
            />
          ))}
        </ColumnContent>
      </Column>

      <Column>
        <ColumnTitle>IN PROGRESS</ColumnTitle>
        {/* <ColumnContent>
          {inProgList.map(task => (
            <Task task={task} />
          ))}
        </ColumnContent> */}
      </Column>

      <Column>
        <ColumnTitle>DONE</ColumnTitle>
        {/* <ColumnContent>
          {doneList.map(task => (
            <Task task={task} />
          ))}
        </ColumnContent> */}
      </Column>
    </Grid>
  );
}

export default Board;
