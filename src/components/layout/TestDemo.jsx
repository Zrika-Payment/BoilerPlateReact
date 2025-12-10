import { useState } from "react";

export default function TestDemo() {
  const [title, setTitle] = useState("Welcome to My Editable Website");
  const [desc, setDesc] = useState("Click the text below to edit it!");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-10">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-xl">
        
        {/* Editable Title */}
        <input
          className="text-3xl font-bold w-full border-b p-2 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Editable Description */}
        <textarea
          className="mt-4 w-full h-40 border rounded-lg p-3 outline-none"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="mt-6 bg-blue-600 text-white rounded-lg p-3 text-center">
          This content updates instantly ✨
        </div>
      </div>
    </div>
  );
}
