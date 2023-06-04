import React, { useEffect, useState } from "react";
import Left_Card from "./components/Left_Card";
import Right_Card from "./components/Right_Card";

const Home = () => {
  const [weather, setWeather] = useState({});
  const [time, setTime] = useState({});

  const week = ["Sun", "Mon", "Tues", "Wed", "Thrus", "Fri", "Sat"];
  const year = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handleChildProps = (props) => {
    if(props){
      getWeatherData(props).then((res) =>
      setWeather({
        temperature: res.temperature,
        windspeed: res.windspeed,
        location: res.location,
        condition: res.condition,
        humidity: res.humidity,
        country: res.country,
      })
    );
    }
    
  };

  const getDate = () => {
    const dateEnv = new Date();
    const currentTime = {
      date: dateEnv.getDate(),
      hour: dateEnv.getHours(),
      second: dateEnv.getSeconds(),
      minutes: dateEnv.getMinutes(),
      currentWeek: week[dateEnv.getDay()],
      currentYear: dateEnv.getFullYear(),
      month: year[dateEnv.getMonth()],
    };
    setTime(currentTime);
  };
  useEffect(() => {
    setInterval(() => {
      getDate();
    }, 1000);
  }, []);

  const getWeatherData = async (cityName) => {
    const api = 'a0bc5669a86075a0486caf026d49a8c9'
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api}&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        return {
          condition: data.weather[0].main,
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windspeed: data.wind.speed,
          location: data.name,
          country: data.sys.country,
        };
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleChildProps;
    getWeatherData('rishra').then((res) =>
      setWeather({
        temperature: res.temperature,
        windspeed: res.windspeed,
        location: res.location,
        condition: res.condition,
        humidity: res.humidity,
        country: res.country,
      })
    );
  }, []);
  return (
    <div className="h-2/3 w-2/3 flex justify-between items-center">
      <Left_Card timer={time} weather={weather} />
      <Right_Card weather={weather} sendPropsToParent={handleChildProps} />
    </div>
  );
};

export default Home;
