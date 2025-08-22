import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { useState } from "react";

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

function App() {
  const [todos, setTodos] = useState(fakeTodos);

  const handleAddNewTodo = (todoText) => {
    const newTodo = {
      id: todos.length + 2,
      todo: todoText,
      status: "incomplete",
    };
    setTodos([newTodo, ...todos]);
  };
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white transition-colors duration-300 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4">
        {/* Top bar row */}
        <div className="flex items-center justify-center gap-4 py-6 w-full">
          <div className="flex-1">
            <SearchBar />
          </div>

          <div className="flex items-center gap-4">
            <Filter />
            <ThemeToggleButton />
            <AddTodo onAdd={handleAddNewTodo} />
          </div>
        </div>

        <div className="w-full px-2">
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </div>

      {/* Sticky plus button */}
    </div>
  );
}

export default App;
