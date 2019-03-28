import React from 'react';

function UserComponent(props) {

  let color = props.color;
  const trueColor = '#003399';
  const falseColor = '#cc6699';

  let userNames = props.userName;

    return (
    <ul style={{padding: 0}}>
      {userNames.map((name, i) =>
        <li key={i} className="list-group-item" style={{color: color ? trueColor : falseColor}}>{name}</li>
      )}
    </ul>
    )


}

export default UserComponent;
