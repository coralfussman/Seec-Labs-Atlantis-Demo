import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QueryField from "../components/QueryField";
import TeamContainer from './TeamContainer';
import About from './About';
import Tree from '../components/Tree';
import Arrow from '../components/Arrow'




function MainContainer() {

  // const [query, setQuery] = useState(() => {});
  // const [queryInput, setQueryInput] = useState(() => '');
  const ExpandTree = () => {
    const [displayTree, setDisplayTree] = useState(true)
    const onClick = () => setDisplayTree(!displayTree)

    return (
      <div>
        <input type="submit" value="Arrow" onClick={onClick} />
        { displayTree ? null :  <Tree /> }
      </div>
    )
 
  }

// else as button for now, arrow later
  return (
    <div className="main-container">
      <div >
       
        <About />
        <ExpandTree />
        <QueryField className="queryField"/>
        <TeamContainer />
      </div>
    </div>
  );
}

export default MainContainer;