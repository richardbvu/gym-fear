import axios from "axios";

// const baseUrl = "http://localhost:5000";
const baseUrl = "https://gym-fear-backend.onrender.com";
// const baseUrl = "https://gym-fear-backend.vercel.app/";

const getAllToDo = (setToDo) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(`data --->`, data);
    setToDo(data);
  });
};

const addToDo = (text, setText, setToDo) => {
  if (text === "") return;
  axios
    .post(`${baseUrl}/save`, { text })
    .then((data) => {
      console.log(data);
      setText("");
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

// const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
//   axios
//     .post(`${baseUrl}/update`, { _id: toDoId, text })
//     .then((data) => {
//       setText("");
//       setIsUpdating(false);
//       getAllToDo(setToDo);
//     })
//     .catch((err) => console.log(err));
// };

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update`, { _id: toDoId, text })
    .then((data) => {
      setText("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((err) => console.log(err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
