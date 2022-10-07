import React from "react";

function StatisticLine(props) {
  const text = props.text;
  const value = props.value;
  return (
    <tr>
      <th>{text} : </th>
      {text === "positive" ? <td>{value} %</td> : <td>{value}</td>}
    </tr>
  );
}

export default StatisticLine;
