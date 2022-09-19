const Part = (props) => {
  return (
    <div>
      <p>
        <h2>{props.part}</h2>
      </p>
      <p>Nombres d'exercises : {props.exercises}</p>
    </div>
  );
};

export default Part;
