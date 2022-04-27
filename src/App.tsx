import React, { Fragment, useState } from "react";

type formElement = React.FormEvent<HTMLFormElement>;

function App(): JSX.Element {
  const [newTask, setNewTask] = useState<string>('');

  const handleSubmit = (e:formElement ) => {
    e.preventDefault();
    console.log(newTask);
    
  }
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={e => setNewTask(e.target.value)}/> {/*Create task */}
        <button>
          Save
        </button>
      </form>
    </Fragment>
  );
}

export default App;
