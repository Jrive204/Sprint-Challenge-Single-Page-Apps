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
            src='        https://image-cdn.neatoshop.com/styleimg/63616/none/black/default/363650-20;1505599358t.jpg
              '
          />
        </div>
        <h1 className='ui center'>Rick &amp; Morty Fan Page</h1>
      </div>
    </header>
  );
}
