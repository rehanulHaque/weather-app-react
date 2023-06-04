import React, { useState } from "react";

const Right_Card = ({ weather , sendPropsToParent}) => {
  const [inputData, setInputData] = useState('')

  const handelSubmit = (e) =>{
    e.preventDefault()
    sendPropsToParent(inputData);
  }
  return (
    <div className="w-[40%] bg-dark text-white h-full text-center px-6 py-4">
      <h1 className="py-4 text-3xl font-bold">{`${weather.condition}`}</h1>
      <hr className="bg-white" />
      <form onSubmit={handelSubmit}>
      <input
        type="text"
        className="my-4 px-3 py-2 bg-transparent border-white border-bottom text-white outline-none"
        placeholder="Search"
        value={inputData}
        onChange={e => setInputData(e.target.value)}
      />
      </form>
      <h2>Kolkata</h2>
      <hr className="bg-white" />
      <div className="flex justify-between py-4">
        <h2 className="text-2xl font-semibold">Temperature</h2>
        <h2 className="text-xl">{`${weather.temperature}`}</h2>
      </div>
      <hr className="bg-white" />
      <div className="flex justify-between py-4">
        <h2 className="text-2xl font-semibold">Humidity</h2>
        <h2 className="text-xl">{`${weather.humidity}%`}</h2>
      </div>
      <hr className="bg-white" />
      <div className="flex justify-between py-4">
        <h2 className="text-2xl font-semibold">Windspeed</h2>
        <h2 className="text-xl">{`${weather.windspeed}kmph`}</h2>
      </div>
    </div>
  );
};

export default Right_Card;
