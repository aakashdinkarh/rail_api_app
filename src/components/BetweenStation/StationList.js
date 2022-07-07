import React from "react";

const Days = ({ runDays }) => {
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  if (weekDays.join() === runDays.join()) {
    return <span>Daily</span>;
  }
  const activeDay = (d, ind) => <span key={ind}>{d}</span>;
  const normalDay = (d, ind) => (
    <span key={ind} style={{ color: "var(--lightGrey)" }}>
      {d}
    </span>
  );

  const result = weekDays.map((day, ind) => {
    if (runDays.includes(day)) {
      return activeDay(day.slice(0, 1), ind);
    } else return normalDay(day.slice(0, 1), ind);
  });
  return result;
};

const StationList = ({ list }) => {
  // console.log(list);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Number</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Name</th>
            <th>Dep</th>
            <th>Arr</th>
            <th>Class Types</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {list.map((elem, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{elem.train_number}</td>
                <td>{elem.train_origin_station}</td>
                <td>{elem.train_destination_station}</td>
                <td>{elem.train_name}</td>
                <td>{elem.depart_time}</td>
                <td>{elem.arrival_time}</td>
                <td>{elem.class_type.toString()}</td>
                <td>
                  <Days runDays={elem.run_days} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default StationList;
