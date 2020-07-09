import React from "react";

export default function Header() {
  return (
    <header className='ui centered'>
      <div className='head'>
        <div
          style={{
            display: `flex`,
            justifyContent: `center`,
            background: `black`
          }}>
          <img
            style={{
              display: `flex`,
              justifyContent: `center`,
              width: `200px`,
              display: `flex`
              // position: `absolute`
            }}
            src={require("../img/1581811f50eb73c1060ffd3dee554b6b.jpg")}
          />
        </div>
        <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      </div>
    </header>
  );
}
