import React from "react";

export const TableHead = (props) => {
  const arr = Object.values(props);
  return (
    <tr>
      {arr.map((val, ind) => (
        <th key={ind}>{val}</th>
      ))}
    </tr>
  );
};
export const TableRow = (props) => {
  let arr = Object.values(props);
  if (props.cur_stn && props.cur_stn.status) {
    arr.pop();
    const _class = props.cur_stn.stoppage ? "cur_stn" : "flicker";
    return (
      <tr className={_class}>
        {arr.map((val, ind) => (
          <td key={ind}>{val}</td>
        ))}
      </tr>
    );
  } else
    return (
      <tr>
        {arr.map((val, ind) => (
          <td key={ind}>{val}</td>
        ))}
      </tr>
    );
};

const PrevNextStations = ({
  stations,
  totalDistance = 0,
  prev = false,
  next = false,
}) => {
  return stations.map((info) =>
    info.station_name === "" ? null : (
      <>
        <TableRow
          first={info.station_name}
          second={
            info.distance_from_source === totalDistance && prev
              ? "---"
              : info.sta
          }
          third={
            info.distance_from_source === totalDistance && next
              ? "---"
              : info.std
          }
          forth={
            info.distance_from_source === totalDistance && prev
              ? "---"
              : info.eta
          }
          fifth={
            info.distance_from_source === totalDistance && next
              ? "---"
              : info.etd
          }
        />
      </>
    )
  );
};

export default PrevNextStations;
