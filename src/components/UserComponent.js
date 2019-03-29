import React from 'react';


// Funktion som tar emot två props (color och userName). Returnerar (genom map-metoden) ett li-element för varje userName som tas emot. Beroende på om color är true eller false får li-elementet antingen en blå-ish eller grön-ish färg.
function UserComponent(props) {

  let color = props.color;
  const trueColor = '#000099';
  const falseColor = '#009933';

  let userNames = props.userName;

    return (
    <ul style={{padding: 0}}>
      {userNames.map((name, i) =>
        <li
        key={i}
        className="list-group-item"
        style={{color: color ? trueColor : falseColor}}
        >{name}</li>
      )}
    </ul>
    )
}

export default UserComponent;
