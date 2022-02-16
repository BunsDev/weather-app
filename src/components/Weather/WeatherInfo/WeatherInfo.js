import React from 'react';

/* Component that displays a single day forecast with various information */
const WeatherInfo = (props) => {
  const { isCelcius, date, tempCelcius, tempFaren, conditionText, icon } =
    props;

  // Parameter of YYYY-MM-DD String
  // Return value of ["MM/DD", "Day of Week"]
  const convertDate = (dateString) => {
    let dateArr = dateString.split('-');
    let dateObj = new Date(dateArr[0], dateArr[1], dateArr[2]);
    let day;
    switch (dateObj.getDay()) {
      case 0:
        day = 'Sunday';
        break;
      case 1:
        day = 'Monday';
        break;
      case 2:
        day = 'Tuesday';
        break;
      case 3:
        day = 'Wednesday';
        break;
      case 4:
        day = 'Thursday';
        break;
      case 5:
        day = 'Friday';
        break;
      case 6:
        day = 'Saturday';
        break;
      default:
    }

    return [`${dateObj.getMonth()} / ${dateObj.getDate()}`, day];
  };

  console.log(icon);

  let convertArr = convertDate(date);
  return (
    <div className="weather-info">
      <h1>{convertArr[0]}</h1>
      <h1>{convertArr[1]}</h1>
      <img src={icon} alt={conditionText} width="100" height="100" />
      {isCelcius ? (
        <h1>{tempCelcius} &#x2103;</h1>
      ) : (
        <h1>{tempFaren} &#8457;</h1>
      )}
      <h2>{conditionText}</h2>
    </div>
  );
};

export default WeatherInfo;
