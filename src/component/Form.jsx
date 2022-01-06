import { Button } from "@material-ui/core";
import React, { useState } from "react";

function Form(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const [state, setstate] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function handle_text_click() {
    setstate(true);
  }

  return (
    <div>
      <form className="create-note">
        {state && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={handle_text_click}
          onChange={handleChange}
          value={note.content}
          placeholder="It is reminder to you."
          rows={state ? "3" : "1"}
        />
                <Button onClick={submitNote}>
                    ADD
                </Button>
      </form>
    </div>
  );
}

export default Form;