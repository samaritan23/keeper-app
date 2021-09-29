import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea"
import Footer from "./Footer"
import Note from "./Note";
import { useState } from "react/cjs/react.development";

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
