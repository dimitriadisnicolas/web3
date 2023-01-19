import React from "react";
import { Link } from "react-router-dom";

const AllChildrenPage = ({ children }) => {
  return (
    <div>
      Liste des enfants :
      <div>
        <ul>
          {children.map((child) => {
            return (
              <Link to={`/children/${child.id}`} key={child.id}>
                <li key={child.id}>{child.name}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AllChildrenPage;
