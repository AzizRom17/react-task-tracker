import React from "react";
import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, settext] = useState("");
  const [day, setday] = useState("");
  const [reminder, setreminder] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please type in a task');
      return;
    }
    onAdd({ text, day, reminder });
    settext('');
    setday('');
    setreminder(false);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task Name</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => settext(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Date</label>
        <input
          type="text"
          placeholder="Add date and time"
          value={day}
          onChange={(e) => setday(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set reminder</label>
        <input
          type="checkbox"
          placeholder="Add reminder"
          value={reminder}
          checked={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input type="submit" value="Add Task" className="btn btn-block"></input>
    </form>
  );
};

export default AddTask;
