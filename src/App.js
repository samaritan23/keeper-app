import React from "react";
import Header from "./components/Header";
import CreateArea from "./components/CreateArea"
import Footer from "./components/Footer"
import Note from "./components/Note";
import { useState } from "react/cjs/react.development";
import './App.css'

function App() {

  const[items, setItems] = useState([]);

  function addItem(notes){
      setItems(prevItems => {
        return [...prevItems, notes];
      })
  }

  function deleteItem(id){
    setItems(prevItems => {
      return prevItems.filter((_item, index) => {
        return index !== id;
      })
    })
  }

  return (
    <div className="App">
          <Header />
          <CreateArea 
            onAdd = {addItem}
          />
          {items.map((text, index) => (
              <Note
                key={index}
                id={index}
                note={text}
                onChecked={deleteItem}
              />
          ))}
          <Footer />
    </div>
  )
}

export default App;
