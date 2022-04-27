import React, { Fragment, useState, useRef } from "react";

type formElement = React.FormEvent<HTMLFormElement>;
interface ITask {
  name: string;
  done: boolean;
}
function App(): JSX.Element {
  const [newTasks, setNewTask] = useState<string>("");
  const [tasks, setTasks] = useState<ITask[]>([]);
  const taskInput = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: formElement) => {
    e.preventDefault();
    addTask(newTasks);
    setNewTask("");
    taskInput.current?.focus();
  };

  const addTask = (name: string): void => {
    const newTasks: ITask[] = [...tasks, { name, done: false }];
    setTasks(newTasks);
  };

  const toggleDoneTask = (i: number): void => {
    // de verdad a false o false a true
    const newTasks: ITask[] = [...tasks]; // busqueda arreglo copia del arreglo
    newTasks[i].done = !newTasks[i].done; // tengo tareas buscar una i actualizarlo con su propiedad done a lo contrario
    setTasks(newTasks); // asigna al estado actualizado
  };

  const removeTask = (i: number): void => {
    const newTasks: ITask[] = [...tasks];
    newTasks.splice(i, 1);
    setTasks(newTasks);
  };
  return (
    <Fragment>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1 className="text-center">Todo App</h1>
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    onChange={(e) => setNewTask(e.target.value)}
                    value={newTasks}
                    className="form-control"
                    ref={taskInput}
                    autoFocus
                  />
                  {/*Create task */}
                  <button className="btn btn-success btn-block mt-2 w-100">
                    Save
                  </button>
                </form>
              </div>
            </div>

            {tasks.map((t: ITask, i: number) => (
              <div
                key={i}
                className="card card-body mt-2"
                style={{ display: "flex" }}
              >
                <h2 style={{ textDecoration: t.done ? "line-through" : "" }}>
                  {t.name}
                </h2>
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() => toggleDoneTask(i)}
                  >
                    {t.done ? "✓" : "✗"}
                  </button>
                  <button
                    className="btn btn-danger ms-4"
                    onClick={() => removeTask(i)}
                  >
                    🗑
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
