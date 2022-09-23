import Header from "components/Header/Header.jsx";
import Content from "components/Content/Content.jsx";
import Total from "components/Total/Total.jsx";
import "index.css";

const App = () => {
  const course = "Half Stack application development";

  // const part1 = {
  //   name: "Fundamentals of React",
  //   exercises: 10,
  // };

  // const part2 = {
  //   name: "Using props to pass data",
  //   exercises: 7,
  // };

  // const part3 = {
  //   name: "State of a component",
  //   exercises: 14,
  // };

  const parts = [
    //part1 --> parts[0]
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    //part2 --> parts[1]
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    //part3 --> parts[2]
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  console.log(parts[0]);

  return (
    <div>
      <Header course={course} />

      <Content part1={parts[0]} part2={parts[1]} part3={parts[2]} />

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      />
    </div>
  );
};

export default App;
