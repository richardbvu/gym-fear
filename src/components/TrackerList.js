import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function TrackerList({ text, updateItem, deleteItem }) {
  return (
    <div className='list__item'>
      <div className='list__title'>
        <input type='checkbox' className='list__checkbox' />
        <div className='list__text'>{text}</div>
      </div>
      <div className='list__icons'>
        <FontAwesomeIcon
          className='list__icon'
          icon={faPenToSquare}
          onClick={updateItem}
        />
        <FontAwesomeIcon
          className='list__icon'
          icon={faTrashCan}
          onClick={deleteItem}
        />
      </div>
    </div>
  );
}
export default TrackerList;
