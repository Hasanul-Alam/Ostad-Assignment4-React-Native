import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoIosCheckbox } from "react-icons/io";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import listEmpty from "../assets/images/listEmpty.png";

const fakeTodos = [
  {
    id: 1,
    todo: "Finish React project setup",
    status: "completed",
    createdAt: "2025-08-01T09:30:00Z",
  },
  {
    id: 2,
    todo: "Buy groceries (milk, eggs, bread)",
    status: "incomplete",
    createdAt: "2025-08-02T14:10:00Z",
  },
  {
    id: 3,
    todo: "Call the electrician",
    status: "completed",
    createdAt: "2025-08-03T11:45:00Z",
  },
  {
    id: 4,
    todo: "Prepare slides for Monday meeting",
    status: "incomplete",
    createdAt: "2025-08-04T16:20:00Z",
  },
  {
    id: 5,
    todo: "Go for a 30-min run",
    status: "completed",
    createdAt: "2025-08-05T07:15:00Z",
  },
  {
    id: 6,
    todo: "Clean the kitchen",
    status: "incomplete",
    createdAt: "2025-08-06T12:40:00Z",
  },
  {
    id: 7,
    todo: "Read 20 pages of a book",
    status: "incomplete",
    createdAt: "2025-08-07T21:05:00Z",
  },
  {
    id: 8,
    todo: "Reply to client emails",
    status: "completed",
    createdAt: "2025-08-08T10:25:00Z",
  },
  {
    id: 9,
    todo: "Organize workspace",
    status: "incomplete",
    createdAt: "2025-08-09T13:50:00Z",
  },
  {
    id: 10,
    todo: "Plan weekend trip",
    status: "completed",
    createdAt: "2025-08-10T18:30:00Z",
  },
];

const Todos = () => {
  const [todos, setTodos] = useState(fakeTodos);

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
              className="text-gray-400 cursor-pointer hover:text-red-400"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Todos;
