import React from "react";

const Course = ({ course }) => {
  const parts = course.parts;

  const total = parts
    .map((part) => part.exercises)
    .reduce((somme, currentValue) => (somme += currentValue));

  return (
    <div>
      <h1>{course.name}</h1>
      <ul>
        {parts.map((part) => (
          <li key={part.id}>
            <h3>
              {part.name} : {part.exercises}
            </h3>
          </li>
        ))}
      </ul>
      <h2>Total d'exercices : {total}</h2>
    </div>
  );
};

export default Course;
