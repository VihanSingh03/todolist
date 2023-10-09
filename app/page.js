"use client";
import React, { useState } from "react";

const page = () => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { title, desc }])
    settitle("");
    setdesc("");
  };


  const deletehandeler = (i) => {
    let copytask = [...maintask]
    copytask.splice(i, 1) //splice work as  like it cut array in part and sprate it or remove  it from our arr
    setmaintask(copytask)
  }

  let rendertask = <h2>No Task Available</h2>
  if (maintask.length > 0) {
    rendertask = maintask.map((t, i) => {
      return (


        <li key={i} className=" flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button onClick={() => 
          { deletehandeler(i) }} //we make fun because if we don't do it it delete task immidiatly 
          className="bg-red-400 text-white px-4 py-2 rounded font-bold">Delete</button>
        </li>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white p-5 text-5xl font-bold text-center">
        Vihan's TodoList
      </h1>
      <form onSubmit={submithandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Your Discription Here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button className="bg-black text-white px-4 py-3 font-bold rounded m-5">
          Add Task
        </button>
      </form>

      <hr />
      <div className="p-8 bg-slate-200">
        <ul>
          {rendertask}
        </ul>
      </div>
    </>
  );
};

export default page;
