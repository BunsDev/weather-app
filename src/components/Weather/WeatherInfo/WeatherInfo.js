import React from 'react';

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

    return [`${dateArr[1]} / ${dateArr[2]}`, day];
  };

  let convertArr = convertDate(date);
  return (
    <div className="weather-info">
      <h1>{convertArr[0]}</h1>
      <h1>{convertArr[1]}</h1>
    </div>
  );
};

export default WeatherInfo;
