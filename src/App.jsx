import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";
import ThemeToggleButton from "./components/ThemeToggleButton";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
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
            <AddTodo />
          </div>
        </div>

        <div className="w-full px-2">
          <Todos />
        </div>
      </div>

      {/* Sticky plus button */}
    </div>
  );
}

export default App;
