import { useState, useEffect } from 'react';

const Timer = ({ endDate }) => {
  const [rHour, setRHour] = useState(); //countdown 2 hours.
  const [rMin, setRMin] = useState();
  const [rSec, setRSec] = useState();

  const startDate = new Date();

  useEffect(() => {
    const i = setInterval(getTime, 1000);
    return () => clearInterval(i);
  }, [endDate]);

  function getTime() {
    const finishHours =
      startDate.getHours() +
      endDate.getHours() +
      (startDate.getMinutes() + endDate.getMinutes()) / 60 +
      (startDate.getSeconds() + endDate.getSeconds()) / 3600;
    const currentHours =
      new Date().getHours() +
      new Date().getMinutes() / 60 +
      new Date().getSeconds() / 3600;
    const remainingHours = finishHours - currentHours;

    const remainingHour = Math.floor(remainingHours);
    const remainingMinute = Math.floor((remainingHours - remainingHour) * 60);
    const remainingSecond = Math.floor(
      ((remainingHours - remainingHour) * 60 - remainingMinute) * 60
    );

    setRHour(remainingHour);
    setRMin(remainingMinute);
    setRSec(remainingSecond);
  }

  return (
    <>
      <span className='num-span'>{('0' + rHour).slice(-2)}</span>
      <span className='segment'>:</span>
      <span className='num-span'>{('0' + rMin).slice(-2)}</span>
      <span className='segment'>:</span>
      <span className='num-span'>{('0' + rSec).slice(-2)}</span>
    </>
  );
};

export default Timer;
