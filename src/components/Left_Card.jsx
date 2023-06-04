import React from 'react'
import BG from '../assets/card_bg-min.jpg'

const Left_Card = ({timer, weather}) => {
  return (
    <div className='w-[60%] bg-center bg-cover h-full flex flex-col justify-between text-white text-2xl p-4' style={{backgroundImage: `url(${BG})`}}>
        <div className="relative">
        <h1 className='font-bold text-3xl absolute right-0 top-0'>{`${weather.location}`}</h1>
        <h2 className='font-bold absolute right-0 top-8'>{`${weather.country}`}</h2>
        </div>

        <div className="relative">
            <h2 className='font-semibold'>{`${timer.hour}:${timer.minutes}:${timer.second}`}</h2>
            <h2 className='font-semibold'>{`${timer.currentWeek}, ${timer.date} ${timer.month} ${timer.currentYear}`}</h2>
            <h1 className='absolute right-0 bottom-0 text-5xl font-bold'>23C</h1>
        </div>
    </div>
  )
}

export default Left_Card
