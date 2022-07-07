import React from "react";

const Home = () => {
  return (
    <>
      <h2>Welcome!</h2>
      <p style={{ fontSize: "large" }}>
        This site uses API call results to show live status of a train and to
        show the list of trains between two stations.
        <br />
        Switch between tabs given in navigation bar to go to different sections
        of the site. Search result are not disappeared while switching between
        tabs.
        <br />
        Tech & tools used to make this site are mainly: React, redux,
        styled-components, github-pages, react-router etc.
      </p>
    </>
  );
};

export default Home;
