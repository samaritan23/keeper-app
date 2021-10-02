import React, { useState } from "react"

function CreateArea(props) {

    const [notes, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <div>
            <form>
                <input onChange={handleChange} type="text" name="title" placeholder="Title" value={notes.title} />
                <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={notes.content} />
                <button onClick={(event) => {
                    props.addItem(notes);
                    setNote({
                        title: "",
                        content: ""
                    })
                    event.preventDefault();
                }}>Add</button>
            </form>
        </div>
    )
}

export default CreateArea;