import React from "react";
import { useParams } from "react-router-dom";
import { Context as AppContext } from "contexts/appContext";
import { useContext } from "react";
import AddEvent from "./AddEvent";

const ChildPage = ({ children }) => {
  const childId = useParams().id;
  const { getChildWithEvents, deleteEvent } = useContext(AppContext);
  const child = getChildWithEvents(childId)[0];

  const deleteEventWithId = (eventId) => {
    deleteEvent(eventId);
  };

  return (
    <div>
      <div>Nom de l'enfant : {child.name}</div>
      <div>
        Evénements liés à l'enfant :
        {child.events.length !== 0 ? (
          <ul>
            {child.events.map((event) => (
              <li key={event.id}>
                Nom : {event.name}
                <button onClick={() => deleteEventWithId(event.id)}>
                  Supprimer l'événement
                </button>
              </li>
            ))}
          </ul>
        ) : (
          " Pas encore d'événements"
        )}
      </div>
      <AddEvent childId={childId}></AddEvent>
    </div>
  );
};

export default ChildPage;
