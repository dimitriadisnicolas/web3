import React from "react";
import StatisticLine from "../StatisticLine/StatisticLine";

function Statistics(props) {
  const clicks = props.clicks;
  const clicksTotal = clicks.good + clicks.bad + clicks.neutral;
  const positiveClicks = (clicks.good * 100) / clicksTotal;
  const average = clicksTotal / 3;

  return (
    <div>
      <h1>Some Stats : </h1>
      {clicks.good === 0 && clicks.bad === 0 && clicks.neutral === 0 ? (
        "No feedback given"
      ) : (
        <div>
          <table>
            <thead></thead>
            <tbody>
              <StatisticLine text={"good"} value={clicks.good} />
              <StatisticLine text={"neutral"} value={clicks.neutral} />
              <StatisticLine text={"bad"} value={clicks.bad} />
              <StatisticLine text={"total"} value={clicksTotal} />
              <StatisticLine text={"average"} value={average.toFixed(2)} />
              <StatisticLine
                text={"positive"}
                value={positiveClicks.toFixed(2)}
              />
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      )}
    </div>
  );
}

export default Statistics;
