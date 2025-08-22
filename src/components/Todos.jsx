import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import listEmpty from "../assets/images/listEmpty.png";

const Todos = ({ todos, setTodos }) => {
  const toggleStatus = (id) => {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        if (todos[i].status === "completed") {
          todos[i].status = "incomplete";
        } else {
          todos[i].status = "completed";
        }
      }
    }
    setTodos([...todos]);
  };

  const handleDeleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  if (todos.length === 0) {
    return (
      <div className="flex items-center justify-center w-full h-[50vh]">
        <div>
          <img
            src={listEmpty}
            alt="Empty list image"
            width={221}
            height={174}
          />
          <h3 className="text-center mt-3 text-xl">Your list is empty</h3>
        </div>
      </div>
    );
  }
  return (
    <>
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center gap-5 pb-3 mt-6 border-b border-gray-200 justify-between "
        >
          <div className="flex items-center gap-3">
            {todo.status === "completed" ? (
              <IoIosCheckbox
                color="#6c63ff"
                size={25}
                onClick={() => toggleStatus(todo.id)}
              />
            ) : (
              <MdOutlineCheckBoxOutlineBlank
                color="#6c63ff"
                size={25}
                onClick={() => toggleStatus(todo.id)}
              />
            )}
            <p
              className={`${todo.status === "completed" ? "line-through" : ""}`}
            >
              {todo.todo}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaRegEdit
              size={15}
              className="text-gray-400 text-[25px] cursor-pointer hover:text-[#6c63ff]"
            />
            <FaRegTrashCan
              size={15}
              onClick={() => handleDeleteItem(todo.id)}
              className="text-gray-400 cursor-pointer hover:text-red-400"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
