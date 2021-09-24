import React from "react";

export default function Home() {
  return (
      <div style={styles.Presentation}>
        <br/>
        <h1>Friends</h1>
        <h3>by DevPointers</h3>
      </div>
  );
};

const styles = {
  Presentation: {
    paddingBottom: "20px",
    display: "flex",
    textAlign: "center",
    alignContent: "flex-start",
    justifyItems: "flex-start",
    flexDirection: "column",
  },
};