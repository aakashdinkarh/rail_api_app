import React, { useEffect } from "react";
//helpers
import { Wrapper } from "./LiveStatus.styles";
//components
import PrevNextStations, { TableRow, TableHead } from "./PrevNextStations";

const NotAtSrcDstn = ({ data }) => {
  const currentStation = data.current_station_name && (
    <TableRow
      first={data.current_station_name.slice(0, -1)}
      second={data.cur_stn_sta}
      third={data.cur_stn_std}
      forth={data.eta}
      fifth={data.etd}
      cur_stn={{ status: true, stoppage: data.stoppage_number }}
    />
  );
  const cur_loc_info = data.current_location_info.map(
    (obj) => obj.readable_message
  );

  useEffect(() => {
    function Timer() {
      function redOrGreen(st, et) {
        if (Number(et.slice(0, 2)) > Number(st.slice(0, 2))) {
          return "red";
        } else {
          if (Number(et.slice(-2)) > Number(st.slice(-2))) {
            return "red";
          } else return "green";
        }
      }
      const rows = Object.values(
        document.getElementsByClassName("detailTableBody")[0].children
      );
      rows.forEach((row) => {
        const sta = row.children[1];
        const std = row.children[2];
        const eta = row.children[3];
        const etd = row.children[4];
        eta.classList.add(redOrGreen(sta.textContent, eta.textContent));
        etd.classList.add(redOrGreen(std.textContent, etd.textContent));
      });
    }
    Timer();
  }, []);

  return (
    <>
      <table className="statusTable">
        <thead>
          <TableHead first="Train Name" second={data.train_name} />
        </thead>
        <tbody>
          {/* <TableRow
            first="Next Stoppage"
            second={data.upcoming_stations[0].station_name}
          /> */}
          <TableRow
            first="Last Update Time"
            second={
              data.update_time.slice(0, 10) +
              ", " +
              data.update_time.slice(11, -1) +
              " (" +
              data.status_as_of +
              ")"
            }
          />
          <TableRow first="Latest Update :" second={cur_loc_info.join(", ")} />
        </tbody>
      </table>
      <table>
        <thead>
          <TableHead
            first="Station Name"
            second="Sch Arr"
            third="Sch Dep"
            forth="Est Arr"
            fifth="Est Dep"
          />
        </thead>
        <tbody className="detailTableBody">
          <PrevNextStations stations={data.previous_stations} prev={true} />
          {currentStation}
          <PrevNextStations
            stations={data.upcoming_stations}
            totalDistance={data.total_distance}
            next={true}
          />
        </tbody>
      </table>
    </>
  );
};
const AtSrcDstn = ({ data }) => {
  return (
    <table className="statusTable">
      <thead>
        <TableHead first="Train Number" second={data.train_number} />
      </thead>
      <tbody>
        <TableRow first="Train Name" second={data.train_name} />
        <TableRow first="Train Start" second={data.std} />
        <TableRow
          first="Latest Update"
          second={`${data.title}, ${data.new_message}`}
        />
      </tbody>
    </table>
  );
};

const LiveStatusInfo = ({ data }) => {
  // console.log(data);
  return (
    <Wrapper>
      {data.at_src_dstn ? (
        <AtSrcDstn data={data} />
      ) : (
        <NotAtSrcDstn data={data} />
      )}
    </Wrapper>
  );
};

export default LiveStatusInfo;
