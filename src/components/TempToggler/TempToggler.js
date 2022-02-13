import React from 'react';

const TempToggler = (props) => {
  const { isCelcius, setCelcius } = props;
  return (
    <span className="temptoggler">
      {isCelcius ? (
        <button onClick={() => setCelcius(false)}>&#x2103;</button>
      ) : (
        <button onClick={() => setCelcius(true)}>&#8457;</button>
      )}
    </span>
  );
};

export default TempToggler;
