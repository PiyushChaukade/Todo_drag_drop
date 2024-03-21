import { MdOutlineSubject } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import "./Todos.css";
// import { useDrag } from "react-dnd";
const Todo = ({item}) => {
  const getRandomColor = () => {
    const a = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    })`;
    // console.log(a);
    return a;
  };
  // const [{isDraggable},dragRef] = useDrag({
  //   type:type,
  //   item:()=>({...item, index},type),
  //   end:(item,monitor )=>{
  //     const dropresult= monitor.getDropResult();
  //     if(dropresult && item){
  //       onDropPlayer(item)
  //     }
  //   },
  //   collect: (monitor)=>({
  //     isDragging:monitor.isDragging(),
  //   }),
  // });
  return (
    <>
      <div className="c1">
          <div className="insideContainer" >
            <div
              className="RandomColorBar"
              style={{ backgroundColor: getRandomColor() }}
            ></div>
            <div>{item.todo}</div>

            <div className="icon-bottom">
              <div>
                <MdOutlineSubject />
              </div>
              {item.comments.length > 0 ? (
                <div>
                  <FiMessageSquare /> {item.comments.length}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
      
      </div>
    </>
  );
};
export default Todo;
