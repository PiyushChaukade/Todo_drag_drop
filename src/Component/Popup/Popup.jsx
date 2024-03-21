import { useState } from "react";
import Popup from "reactjs-popup";
import { FaPlus } from "react-icons/fa6";
import "./Popup.css";
const PopupComponent = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [todo, setTodo] = useState("");
  const [comment, setComment] = useState("");
  const handleCloseForm = () => {
    setShowForm(false);
  };
  const handleButtonClick = () => {
    setShowForm(true);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodoItem = { todo: todo, comments: [comment] };
    props.setTodoList([...props.todoList, newTodoItem]);
    setShowForm(false);
    setTodo("");
    setComment("");
  };
  return (
    <>
      <div className="buttonContainer" onClick={handleButtonClick}>
        <span>
          <FaPlus />
        </span>
        <span> Add a card</span>
      </div>
      <Popup
        trigger={null}
        position="right center"
        open={showForm}
        onClose={handleCloseForm}
        className="popup"
      >
        <div className="formdata">
          <form onSubmit={handleSubmit} >
            <label>Todo</label>
          
            <input
              type="text"
              placeholder="Write Todo here"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
            />
              <label>Comment</label>
            <textarea
              placeholder="Comments (Press Enter for multiple comments)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={4} // Adjust this value to increase the size of the textarea
            />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleCloseForm}>
              Cancel
            </button>
          </form>
        </div>
      </Popup>
    </>
  );
};
export default PopupComponent;
