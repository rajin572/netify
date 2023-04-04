import React from "react";

function Sidebar({ bookMark, timer }) {
     
  return (
    <div className="self-start">
      <h1>{timer}</h1>
    <h1 className="flex justify-center font-bold text-lg">Book mark</h1>
      {bookMark.map((data)=> <div key={data.id} className="w-full p-4 my-2 drop-shadow-2xl rounded border border-blue-400">{data.title}</div>)}
    </div>
  );
}

export default Sidebar;
