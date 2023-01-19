import React, { useEffect } from "react";
import { useState } from "react";
import ChildrenAPI from "services/childrenApi";
import EventAPI from "services/eventsApi";

//Crée le context
const Context = React.createContext(null);

const ProviderWrapper = ({ children }) => {
  // Initalisation des listes children et events
  const [childrenList, setChildren] = useState([]);
  const [eventsList, setEvents] = useState([]);

  //Initial Load
  const initialLoad = () => {
    //Children
    ChildrenAPI.retrieveAll()
      .then((childs) => setChildren(childs))
      .catch((error) => console.warn(error));

    //Events
    EventAPI.retrieveAll()
      .then((events) => setEvents(events))
      .catch((error) => console.warn(error));
  };

  useEffect(initialLoad, []);

  const getChildWithEvents = (childId) => {
    //Retrouve le child avec son id
    const child = childrenList.filter((child) => child.id === childId);

    //Retrouve tous les evenements pour un enfant
    const eventsChild = eventsList.filter((event) => event.child === childId);

    //rajoute une clé events contentant les evenements de l'enfant
    child[0].events = eventsChild;

    return child;
  };

  const deleteEvent = (eventId) => {
    EventAPI.removeEvent(eventId).then(() =>
      EventAPI.retrieveAll()
        .then((events) => setEvents(events))
        .catch((error) => console.warn(error))
    );
  };

  const createEvent = (eventBody) => {
    EventAPI.create(eventBody).then((createdEvent) =>
      setEvents([...eventsList, createdEvent])
    );
  };

  const exposedValue = {
    childrenList,
    eventsList,
    getChildWithEvents,
    deleteEvent,
    createEvent,
  };

  return <Context.Provider value={exposedValue}>{children}</Context.Provider>;
};

export { Context, ProviderWrapper };
