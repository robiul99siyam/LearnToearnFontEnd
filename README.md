# React + Vite post method

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:import React, { useState } from 'react';
import './App.css';
import Get from './Get';

function App() {
  const [name, setName] = useState("");
  const [slug, setSlug] = useState("");

  // Function to update slug whenever name changes
  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);

    // Logic to generate slug (replace spaces with dashes and lowercase)
    const newSlug = newName.toLowerCase().replace(/\s+/g, '-');
    setSlug(newSlug);
  };

  function saveData() {
    let data = { name, slug };
    fetch("https://netfiex.onrender.com/netfiex/app/category/", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <>

      <Get />
      <div>
        <h1>Post Method Test</h1>

        <input type="text" name='name' value={name} onChange={handleNameChange} />
        
        {/* Hidden input for slug */}
        <input type="hidden" name='slug' value={slug} />

        <button onClick={saveData}>Post Data Save</button>
      </div>
    </>
  );
}

export default App;
