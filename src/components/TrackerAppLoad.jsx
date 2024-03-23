import { useState } from "react";
import TrackerList from "./TrackerList";
import { useEffect } from "react";
import { deleteToDo } from "../utils/HandleApi";

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
    getAllToDo(setToDo);
  }, []);

  const updateItem = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setToDoId(_id);
  };

  return (
    <div className='tracker__load'>
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
    </div>
  );
}
export default TrackerApp;
