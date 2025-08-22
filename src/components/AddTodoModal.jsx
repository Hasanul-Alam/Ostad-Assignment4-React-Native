import React, { useState } from "react";

const AddTodoModal = ({ isOpen, onClose, title, onAdd }) => {
  const [taskText, setTaskText] = useState("");
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* Modal Container */}
      <div className="bg-white dark:bg-[#1f1e1e] rounded-2xl shadow-lg w-[90%] max-w-md p-6 animate-fadeIn">
        {/* Header */}
        <div className="flex justify-between items-center pb-2 mb-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-red-500 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div>
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
            placeholder="Enter your task"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                onAdd(taskText);
                setTaskText("");
                onClose();
              }
            }}
            autoFocus
          />
        </div>

        {/* Footer */}
        <div className="flex items-center mt-6 gap-4">
          <button
            onClick={() => {
              onAdd(taskText);
              setTaskText("");
              onClose();
            }}
            className="px-4 py-2 w-full bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Add
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 w-full bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodoModal;
