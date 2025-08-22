import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import EditTodoModal from "./components/EditTodoModal";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Filter + search effect
  useEffect(() => {
    let filtered = todos.filter((todo) =>
      todo.todo.toLowerCase().includes(searchText.toLowerCase())
    );

    if (selectedFilter === "completed") {
      filtered = filtered.filter((todo) => todo.status === "completed");
    } else if (selectedFilter === "incomplete") {
      filtered = filtered.filter((todo) => todo.status === "incomplete");
    }

    setFilteredTodos(filtered);
  }, [todos, searchText, selectedFilter]);

  const handleAddNewTodo = (todoText) => {
    const newTodo = {
      id: todos.length + 1,
      todo: todoText,
      status: "incomplete",
    };
    setTodos([newTodo, ...todos]);
  };

  const handleUpdateTodo = (id, todoText) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: todoText } : todo
    );
    setTodos(updatedTodos);
  };

  const toggleStatus = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id
        ? {
            ...todo,
            status: todo.status === "completed" ? "incomplete" : "completed",
          }
        : todo
    );
    setTodos(updatedTodos);
  };

  const handleDeleteItem = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen w-full bg-white dark:bg-black dark:text-white transition-colors duration-300 flex flex-col items-center">
      <div className="w-full max-w-4xl px-4">
        {/* Top bar row */}
        <div className="flex items-center justify-center gap-4 py-6 w-full">
          <div className="flex-1">
            <SearchBar
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-4">
            <Filter
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            />
            <ThemeToggleButton />
            <AddTodo onAdd={handleAddNewTodo} />
          </div>
        </div>

        {/* Todos list */}
        <div className="w-full px-2">
          <Todos
            toggleStatus={toggleStatus}
            todos={filteredTodos}
            onDeleteItem={handleDeleteItem}
            onUpdate={handleUpdateTodo}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
