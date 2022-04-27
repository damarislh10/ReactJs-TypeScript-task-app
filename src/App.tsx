import React, { Fragment, useState } from "react";

type formElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);

  const handleSubmit = (e: formElement) => {
    e.preventDefault();
    addTask(newTask);
    console.log(tasks);
    setNewTask('');
  };

  const addTask = (name: string) => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask} />
        {/*Create task */}
        <button>Save</button>
      </form>
      {
        tasks.map((t: ITask, i:number) => {
          return <h1 key={i}>{t.name}</h1>
        })
      }
    </Fragment>
  );
}

export default App;
