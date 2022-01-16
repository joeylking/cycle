import { useState, useEffect } from 'react';
const startDate = new Date();
const Timer = ({ endDate }) => {
  const [rDay, setRDay] = useState();
  const [rHour, setRHour] = useState(); //countdown 2 hours.
  const [rMin, setRMin] = useState();
  const [rSec, setRSec] = useState();

  useEffect(() => {
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, [endDate]);

  function getTime() {
    const finishHours =
      endDate.getDate() * 24 +
      endDate.getHours() +
      endDate.getMinutes() / 60 +
      endDate.getSeconds() / 3600;
    const currentHours =
      new Date().getDate() * 24 +
      new Date().getHours() +
      new Date().getMinutes() / 60 +
      new Date().getSeconds() / 3600;
    const remainingHours = finishHours - currentHours;
    const remainingDay = Math.floor(remainingHours / 24);
    const remainingHour = Math.floor(remainingHours - remainingDay * 24);
    const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
    const remainingSecond = Math.floor(
      ((remainingHours - remainingHour) * 60 - remainingMinute) * 60
    );

    setRDay(remainingDay);
    setRHour(remainingHour);
    setRMin(remainingMinute);
    setRSec(remainingSecond);
  }

  return (
    <>
      <span className='num-span'>{('0' + rDay).slice(-2)}</span>
      <span className='segment'>:</span>
      <span className='num-span'>{('0' + rHour).slice(-2)}</span>
      <span className='segment'>:</span>
      <span className='num-span'>{('0' + rMin).slice(-2)}</span>
      <span className='segment'>:</span>
      <span className='num-span'>{('0' + rSec).slice(-2)}</span>
    </>
  );
};

export default Timer;
