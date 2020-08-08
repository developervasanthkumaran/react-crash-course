import React, { Component, useState } from 'react'

function Counter (){
    const [count,setCount] = useState(0);
    return(
      <div>
        <h3>Showing count object undergoing different states</h3>
          <h1>{count}</h1>
        <h1 onClick = {()=>setCount(count+1)}>Plus</h1>
        <h1 onClick = {()=>setCount(count-1)}>Minus</h1>
      </div>
    );
}

export default Counter;