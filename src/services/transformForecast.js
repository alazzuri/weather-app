import moment from "moment";
import "moment/locale/es";
import transformWeather from "./transformWheater";

const transformForecast = (data) => {
  const { list } = data;

  console.log(list);

  const filteredList = list.filter(
    (element) =>
      moment.unix(element.dt).utc().hour() === 6 ||
      moment.unix(element.dt).utc().hour() === 12 ||
      moment.unix(element.dt).utc().hour() === 18
  );

  const transformedData = filteredList.map((item) => {
    return {
      weekDay: moment.unix(item.dt).format("ddd"),
      hour: moment.unix(item.dt).utc().hour(),
      data: transformWeather(item),
    };
  });

  return transformedData;
};

export default transformForecast;
