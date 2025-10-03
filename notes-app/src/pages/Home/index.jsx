import React from "react";
import Navbar from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { useState } from "react";

export const Home = () => {
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  return (
    <div>
      <Navbar />
      <main className="flex gap-3">
        <Sidebar />
        <div>
          <div className="flex flex-col w-[400px] border-red-400 relative">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded-md"
              placeholder="Note title"
            />

            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="border border-gray-300 rounded-md"
              placeholder="Write your note here..."
            ></textarea>
            <button className="absolute bottom-0 right-0">
              <span className="material-symbols-outlined">add</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
