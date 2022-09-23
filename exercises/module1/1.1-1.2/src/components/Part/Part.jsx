const Part = (props) => {
  return (
    <div>
      <h2>{props.part}</h2>

      <div>Nombres d'exercises : {props.exercises}</div>
    </div>
  );
};

export default Part;
