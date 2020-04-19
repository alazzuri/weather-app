import convert from "convert-units";
import {
  SUN,
  CLOUD,
  RAIN,
  SNOW,
  DRIZZLE,
  THUNDER,
} from "./../constants/weathers";

const getTemp = (temp) => {
  return Number(convert(temp).from("K").to("C").toFixed(0));
};

const getWeatherState = (weatherData) => {
  const { id } = weatherData;
  console.log(id);

  if (id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUD;
  }
};

const transformWeather = (weatherData) => {
  const { humidity, temp } = weatherData.main;
  const { speed } = weatherData.wind;
  const weatherState = getWeatherState(weatherData.weather[0]);
  const temperature = getTemp(temp);

  const data = {
    humidity,
    temperature,
    weatherState,
    wind: `${speed} m/s`,
  };

  return { data };
};

export default transformWeather;
