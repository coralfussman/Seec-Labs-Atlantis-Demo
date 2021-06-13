import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QueryField from "../components/QueryField";
import TeamContainer from './TeamContainer';


function MainContainer() {

  // const [query, setQuery] = useState(() => {});
  // const [queryInput, setQueryInput] = useState(() => '');


  return (
    <div>
      <About />
      <QueryField />
      <TeamContainer />
    </div>
  );
}

export default MainContainer;