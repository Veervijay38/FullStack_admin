import React from "react";
import { CircularProgress, Typography } from "@mui/material";

const Loader = () => {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "50vh" }}>
      <CircularProgress />
      <Typography variant="h6" style={{ marginLeft: "1rem" }}>Loading...</Typography>
    </div>
  );
};

export default Loader;
