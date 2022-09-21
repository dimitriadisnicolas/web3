import Part from "components/Part/Part";

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1.name} exercises={props.part1.exercises}></Part>
      <Part part={props.part2.name} exercises={props.part2.exercises}></Part>
      <Part part={props.part3.name} exercises={props.part3.exercises}></Part>
    </div>
  );
};

export default Content;
