import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import Todos from "../Component/Todos/Todos";
import "./CardComponent.css"; // Assuming your CSS file is named CardComponent.css
import { BsThreeDots } from "react-icons/bs";
import PopupComponent from "./Popup/Popup";

import { TodoData, InprogressData, reviewData, Donedata } from "./Data/Data";
// import { useDrop } from "react-dnd";
const CardComponent = () => {
  const [ReviewList, setReviewList] = useState(reviewData);
  const [todoList, setTodoList] = useState(TodoData);
  const [inprogressList, setInprogressList] = useState(InprogressData);
  const [DoneList, setDoneList] = useState(Donedata);

  // const [{isOver},addtoteamref] =useDrop({
  //   accept:todoList,
  //   collect:(monitor) => ({isOver:!!monitor.isOver()})
  // })

  // const [{isOver1},removefromteamref] =useDrop({
  //   accept:inprogressList,
  //   collect:(monitor) => ({isOver:!!monitor.isOver()})
  // })
//   const movetodotoinprogress  =(item)=>{
// console.log(item)
//   }
//   const movetodotofromprogress  =(item)=>{

//   }

  return (
    <div className="Container">
      <div>
        <div className="Head">
          <div className="h1">
            <h2>To Do</h2>
          </div>
          <div className="h2">
            <BsThreeDots />
          </div>
        </div>
        <div >
        {todoList.map((item, index) => (
          <Todos key={index} item={item}  />
        ))}
        </div>
        <PopupComponent todoList={todoList} setTodoList={setTodoList} />
      </div>

      <div>
        <div className="Head">
          <div className="h1">
            <h2>In Progress</h2>
          </div>
          <div className="h2">
            <BsThreeDots />
          </div>
        </div>
        <div>
        {inprogressList.map((item, index) => (
          <Todos item={item} key={index}  />
        ))}
        </div>
     
        <PopupComponent
          todoList={inprogressList}
          setTodoList={setInprogressList}
        />
      </div>
      <div>
        <div className="Head">
          <div className="h1">
            <h2>Review</h2>
          </div>
          <div className="h2">
            <BsThreeDots />
          </div>
        </div>
        {/* <Todos todoList={ReviewList} /> */}
        {ReviewList.map((item, index) => (
          <Todos item={item} key={index} />
        ))}

        <PopupComponent todoList={ReviewList} setTodoList={setReviewList} />
      </div>
      <div>
        <div className="Head">
          <div className="h1">
            <h2>Done</h2>
          </div>
          <div className="h2">
            <BsThreeDots />
          </div>
        </div>
        {/* <Todos todoList={DoneList} /> */}
        {DoneList.map((item, index) => (
          <Todos item={item} key={index}  />
        ))}

        <PopupComponent todoList={DoneList} setTodoList={setDoneList} />
      </div>
    </div>
  );
};

export default CardComponent;
