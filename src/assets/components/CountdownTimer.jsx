import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {

  const countDownDate = new Date("Oct 19, 2024 16:00:00").getTime();

  const [timeRemaining, setTimeRemaining] = useState(countDownDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      setTimeRemaining(countDownDate - now);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const calculateTime = (distance) => {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = calculateTime(timeRemaining);

  return (
    <div className='countdown-timer'>
      <h2>{timeRemaining > 0
          ? "ՄՆԱՑ"
          : ""}</h2>
      <p>
        {timeRemaining > 0
          ? `${days<10?"0"+days:days} օր | 
             ${hours<10?"0"+hours:hours} ժամ | 
             ${minutes<10?"0"+minutes:minutes} րոպե | 
             ${seconds<10?"0"+seconds:seconds} վայրկյան`
          : "Միջոցառումը ավարտվել է"}
      </p>
    </div>
  );
};



export default CountdownTimer;
