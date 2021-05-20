import React, { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";
// todo logic Flow

const App = () => {
  const { loading, data, error, refetch } = useAxios({});
  console.log(loading, data, error);
  return (
    <div className='App'>
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Button</button>
    </div>
  );
};

export default App;
