import { useState } from "react";
import TrackerList from "./TrackerList";
import { useEffect } from "react";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "../utils/HandleApi";

function TrackerApp() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState();

  useEffect(() => {
    getAllToDo(setToDo);
  }, []);

  const updateItem = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='tracker'>
      <div className='tracker__container'>
        <h1>New Year Resolutions </h1>
        <p>Add, delete, edit and complete your goals</p>
        <form
          className='tracker__interact'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className='tracker__input'
            id='tracker__input'
            type='text'
            placeholder='Add Goals'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button
            type='submit'
            className='tracker__button'
            onClick={
              isUpdating
                ? () =>
                    updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
                : () => addToDo(text, setText, setToDo)
            }
          >
            {isUpdating ? (
              <div className='tracker__button-update'>Update</div>
            ) : (
              "Add"
            )}
          </button>
        </form>
      </div>
      <div className='tracker__list'>
        {toDo.map((item) => (
          <TrackerList
            key={item._id}
            text={item.text}
            updateItem={() => updateItem(item._id, item.text)}
            deleteItem={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div>
    </div>
  );
}
export default TrackerApp;
