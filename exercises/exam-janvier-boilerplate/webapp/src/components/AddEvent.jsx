import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context as AppContext } from "contexts/appContext";

const AddEvent = ({ childId }) => {
  const [newEvent, setnewEvent] = useState("");
  const { createEvent } = useContext(AppContext);
  const handleAddEvent = (e) => {
    e.preventDefault();
    createEvent({
      date: new Date().toString(),
      child: childId,
      name: newEvent,
    });
  };
  const handleEventChange = (e) => {
    setnewEvent(e.target.value);
  };

  return (
    <form onSubmit={handleAddEvent}>
      <div>
        Nom événement: <input value={newEvent} onChange={handleEventChange} />
      </div>
      <div>
        <button type="submit">Ajouter l'événement</button>
      </div>
    </form>
  );
};

export default AddEvent;
