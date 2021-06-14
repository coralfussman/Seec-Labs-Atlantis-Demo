import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QueryField from "../components/QueryField";
import TeamContainer from './TeamContainer';
import About from './About';
import Tree from '../components/Tree';




function MainContainer() {

  // const [query, setQuery] = useState(() => {});
  // const [queryInput, setQueryInput] = useState(() => '');


  return (
    <div className="main-container">
      <div >
       
        <About />
        <Tree/>
        <QueryField className="queryField"/>
        <TeamContainer />
      </div>
    </div>
  );
}

export default MainContainer;