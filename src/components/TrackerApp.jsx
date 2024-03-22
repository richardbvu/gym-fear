import { useState } from "react";
import TrackerList from "./TrackerList";
import { useEffect } from "react";
import {
  addToDo,
  getAllToDo,
  updateToDo,
  deleteToDo,
} from "../utils/HandleApi";

import axios from "axios";

function TrackerApp() {
  const [toDo, setToDo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState();
  const [loading, setLoading] = useState(false);

  // const baseUrl = "http://localhost:5000";
  const baseUrl = "https://gym-fear-backend.onrender.com";
  // const baseUrl = "https://gym-fear-backend.vercel.app/";

  const getAllToDo = (setToDo) => {
    axios.get(baseUrl).then(({ data }) => {
      console.log(`data --->`, data);
      setToDo(data);
      setLoading(true);
    });
  };

  useEffect(() => {
    // setLoading(false);
    getAllToDo(setToDo);
    // setLoading(true);
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
      {/* <div className='tracker__list'>
        {toDo.map((item) => (
          <TrackerList
            key={item._id}
            text={item.text}
            updateItem={() => updateItem(item._id, item.text)}
            deleteItem={() => deleteToDo(item._id, setToDo)}
          />
        ))}
      </div> */}
      {loading ? (
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
      ) : (
        <h1 className='tracker__load'>Loading...</h1>
      )}
      {/* {loading ? (
        <h1 className='tracker__load'>Loading...</h1>
      ) : (
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
      )} */}
      {/* {loading && (
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
      )}
      {!loading && <h1 className='tracker__load'>Loading...</h1>} */}
    </div>
  );
}
export default TrackerApp;
