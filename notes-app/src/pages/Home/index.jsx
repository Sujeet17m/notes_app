import React from "react";
import { useReducer } from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";
import { notesReducer } from "../../Reducers/notesReducer";

export const Home = () => {

  const initialState = {
    title: "",
    text: "",
    notes: []
  }

  const [{ title, text, notes }, notesDispatch] = useReducer(notesReducer, initialState);

  const onTitleChange = (e) => {
    notesDispatch({ type: "SET_TITLE", payload: e.target.value })
  }

  const onTextChange = (e) => {
    notesDispatch({ type: "SET_TEXT", payload: e.target.value })
  }

  const onAddNote = () => {
    notesDispatch({ type: "ADD_NOTE", payload: { title, text } })
    notesDispatch({ type: "CLEAR_INPUT" })
  }

  console.log(notes);

  return (
    <div>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div className="flex-1 p-6">
          {/* Note Input Section */}
          <div className="flex flex-col gap-3 w-full max-w-2xl bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <input
              value={title}
              onChange={onTitleChange}
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Note title"
            />

            <textarea
              value={text}
              onChange={onTextChange}
              className="border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Write your note here..."
            ></textarea>
            
            <button 
              disabled={title === "" || text === ""} 
              onClick={onAddNote} 
              className="ml-auto bg-indigo-800 text-white px-6 py-2 rounded-md hover:bg-indigo-900 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200 flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-xl">add</span>
              <span>Add Note</span>
            </button>
          </div>

          {/* Notes Grid */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.length > 0 && notes.map(({ id, title, text }) => (
              <div 
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col overflow-hidden" 
                key={id}
              >
                {/* Note Header */}
                <div className="flex justify-between items-center p-4 border-b border-gray-200">
                  <h2 className="font-semibold text-gray-800 truncate">{title}</h2>
                  <button className="text-gray-500 hover:text-yellow-500 transition-colors">
                    <span className="material-symbols-outlined">bookmark</span>
                  </button>
                </div>
                
                {/* Note Content */}
                <div className="p-4 flex-1 overflow-hidden">
                  <p className="text-gray-600 text-sm line-clamp-4">{text}</p>
                </div>
                
                {/* Note Actions */}
                <div className="flex gap-2 p-3 border-t border-gray-200 bg-gray-50">
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 text-gray-600 hover:text-indigo-800 hover:bg-indigo-50 rounded transition-colors">
                    <span className="material-symbols-outlined text-xl">archive</span>
                    <span className="text-sm">Archive</span>
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-1 py-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded transition-colors">
                    <span className="material-symbols-outlined text-xl">delete</span>
                    <span className="text-sm">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
