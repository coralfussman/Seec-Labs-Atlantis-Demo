import React, { useState } from "react";
import Speedometer from "./Speedometer.js"
import persisted from "../assets/persisted.svg"
import fast from "../assets/fast.svg"
// input field that lets us query the route cache test.



let start = 0;
let end = 0;
let dif = 0;


const useInput = (init) => {
  const [value, setValue] = useState(init);
  const onChange = (e) => {
    e.persist()
    
    setValue(e.target.value);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange];
};

function QueryField() {
  // const [query, setQuery] = useState(() => {});
  const [queryInput, setQueryInput] = useInput();
  const [responseTime, setResponseTime] = useState('Response Time');
  
  
  function sendQuery(queryInput) {
      console.log('recieved this', queryInput)
      // start a timer
      start = performance.now()
      fetch(`/cachetest/${queryInput}`)
        .then((data) => data.json())
        .then((response) => {
          end = performance.now()
          dif = (end-start)
          console.log(dif)
          console.log('got this back after a fetch', response)
        })
        .then(() => setResponseTime(dif))
        .catch((e) => console.log(e));
  }

  function clearCache() {
      fetch('/clearcache/');
  }

  const queryField = (

    <div className="field">
      <p>Atlantis Query</p>

      <div className="centerRow">
   
      
    </div>
      <div>
      <select 
            className="input"
            id="queryInput"
            type="queryInput"
            placeholder="Enter Query"
            value={queryInput || ''}  //Unexpected token. Did you mean `{'}'}`
            onChange={setQueryInput}>
        <option value="" selected="true" disabled="disabled" > Select GraphQL </option>
        <option value="%7Bcompanies%20%7B%20company_id%20name%20description%20%7D%7D"> Get Companies</option>
        <option value="%7Busers%20(company_id:4)%20%7B%20user_id%20name%20company_id%20%7D%7D"> Get Employee at Amazon</option>
        <option value="%7Bcompanies%20%7B%20company_id%20name%20description%20employees%7B%20name%20%7D%20%7D%7D"> Get Company Employees</option>


      </select>
        {/* <input
       
            id="queryInput"
            type="queryInput"
            placeholder="Enter Query"
            value={queryInput}
            onChange={setQueryInput}
        ></input> */}
        <input
            className="input"
            id="queryOutput"
            type="queryOutput"
            value={responseTime}
        ></input>
        <div>
          <button 
            className="submitButton"
            id='runquery'
            onClick={() => {sendQuery(queryInput) }} > Run Query </button>
          <button className="submitButton" id='clearcache' onClick={()=> {clearCache(); setResponseTime('Response Time')} }>Clear Cache </button>
          <button className="submitButton" id='rest'> Reset </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <h2>Demo & Metrics</h2>
    <div className="queryField">
      <div id="field">
      <h4>Make a Request to Cache your speed Gains</h4>
      <div id="window"></div>
        {queryField}
      </div>
      <div id="speed">
        <div id="meter">
          <Speedometer/>
          {/* <AccelDial id="dial3" value={this.state.agx} title="Acceleration X" /> */}


        </div>
        <div className="metricDash">
              <div id="metric">
              <h2> 0-100% </h2>
              <img className="metric-logo" src={persisted} alt="persist"/>
              <h5>200x speed </h5>
            </div>
            <div id="metric">
              <h2> 0-100% </h2>
              <img className="metric-logo" src={fast} alt="persist"/>
              <h5>reduced server load  </h5>
            </div>
            <div id="metric">
              <h2>0-100%  </h2>
              <img className="metric-logo" src={persisted} alt="persist"/>
              <h5>cache hit  </h5>
            </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default QueryField;


