// input field that lets us query the route cache test.

import React, { useState } from "react";
import { RadialGauge } from "react-canvas-gauges";

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
  
  let start = 0;
  let end = 0;
  let dif = 0;




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

      <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Make a Request to Cache your speed Gains</h2>
      <RadialGauge
        units="Milliseconds"
        title="Speed"
        value={50}
        minValue={0}
        maxValue={100}
        majorTicks={[
          "1200",
          "1100",
          "1000",
          "900",
          "800",
          "600",
          "400",
          "300",
          "200",
          "100"
        ]}
        minorTicks={2}
        data-highlights='[
          { "from": 50, "to": 100, "color": "rgb(111, 235, 111,.25)" },
          { "from": 100, "to": 150, "color": "rgb(76, 219, 76,.25)" },
          { "from": 150, "to": 200, "color": "rgb(181, 219, 76, .25)" },
          { "from": 200, "to": 220, "color": "rgba(0,0,255,.25)" }
          { "from": 0, "to": 100, "color": "rgba(248, 28, 28, .15)" }
        ]'
      />
      <canvas data-type="radial-gauge"
        data-highlights='[
          { "from": 50, "to": 100, "color": "rgb(111, 235, 111,.25)" },
          { "from": 100, "to": 150, "color": "rgb(76, 219, 76,.25)" },
          { "from": 150, "to": 200, "color": "rgb(181, 219, 76, .25)" },
          { "from": 200, "to": 220, "color": "rgba(0,0,255,.25)" }
          { "from": 0, "to": 100, "color": "rgba(248, 28, 28, .15)" }
        ]'
></canvas>
    </div>
      <div>
      <select 
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
            id="queryOutput"
            type="queryOutput"
            value={responseTime}
        ></input>
        <div>
          <button 
            id='runquery'
            onClick={() => {sendQuery(queryInput) }} > Run Query </button>
          <button id='clearcache' onClick={()=> {clearCache(); setResponseTime('Response Time')} }>Clear Cache </button>
          <button id='rest'> Reset </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="queryField">
      {queryField}
    </div>
  );
}

export default QueryField;


