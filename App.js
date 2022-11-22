
import './App.css';

import { useState } from "react";

function App() {
    const [note_content, setNote_Content] = useState();
   
    let handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
           await fetch("http://Localhost:8083/note", {
            method: "POST",
            body: JSON.stringify(note_content),
        });
           
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={note_content}
                    placeholder="Type your note"
                    onChange={(e) => setNote_Content(e.target.value)}
                />
               
                <button type="submit">Send</button>

              
            </form>
        </div>
    );
}

export default App;