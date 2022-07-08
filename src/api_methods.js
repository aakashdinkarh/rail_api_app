let stations = [];
let train_numbers = [];
const failed = {
  status: false,
  message: "Sorry, could not complete request",
};
const api_key = process.env.REACT_APP_API_KEY;
(async () => {
  fetch("stations.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((endpoint) => endpoint.json())
    .then((res) => (stations = res));

  fetch("train_numbers.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  })
    .then((endpoint) => endpoint.json())
    .then((res) => (train_numbers = res));
})();

export const fetchStations = (param) => {
  const data = stations.filter(
    (obj) =>
      obj.name.toUpperCase().includes(param.toUpperCase()) ||
      obj.code.toUpperCase().includes(param.toUpperCase())
  );
  return data;
};

export const fetchTrainNumbers = (param) => {
  const data = train_numbers.filter((obj) => obj.number.includes(param));
  return data;
};

export const fetchTrains = async (source, destination) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };
  const endpoint = await fetch(
    `https://irctc1.p.rapidapi.com/api/v2/trainBetweenStations?fromStationCode=${source}&toStationCode=${destination}`,
    options
  );

  if (endpoint.status === 200) {
    return endpoint.json();
  } else {
    return failed;
  }
};

export const fetchLiveStatus = async (number, day_ago = 0) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": api_key,
      "X-RapidAPI-Host": "irctc1.p.rapidapi.com",
    },
  };

  const endpoint = await fetch(
    `https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus?trainNo=${number}&startDay=${day_ago}`,
    options
  );
  if (endpoint.status === 200) {
    return endpoint.json();
  } else {
    return failed;
  }
};

export const isPersistedState = (searchTerm) => {
  const sessionState = sessionStorage.getItem(searchTerm);
  return sessionState && JSON.parse(sessionState);
};
