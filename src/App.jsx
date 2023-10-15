import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [timerDays, setTimerDays] = useState(0);
  const [timerHours, setTimerHours] = useState(0);
  const [timerMinutes, setTimerMinutes] = useState(0);
  const [timerSeconds, setTimerSeconds] = useState(0);

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('December 26, 2023 5:55:00').getTime();
    console.log('countDownDate:', countDownDate);
    interval.current = setInterval(() => {
      const now = new Date().getTime();
      console.log('now:', now);
      const distance = countDownDate - now;
      console.log('distance:', distance);


      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
        const seconds = Math.floor((distance % (1000 * 60) / 1000));

        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      } else {
        clearInterval(interval.current);
        setTimerDays(0);
        setTimerHours(0);
        setTimerMinutes(0);
        setTimerSeconds(0);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <>
    <div className="container">
      <div className="fondo">
        
        <div className="grid-item">
          <img src='../img/img1.jpeg' alt="" />
        </div>
        <div className="grid-item">
          <img src='../img/img2.jpeg' alt="" />
        </div>
        <div className="grid-item">
          <img src='../img/img3.jpeg' alt="" /> 
        </div>
        <div className="grid-item">
          <img src='../img/img4.jpeg' alt="" />
        </div>
        <div className="grid-item item-contador">
            <h1>Dosh patas en... </h1>
            <div className="contador">
              <div>{timerDays} días y {timerHours}:{timerMinutes}:{timerSeconds} hs</div>
              
            </div>
        </div>
        <div className="grid-item">
          <img src='../img/img5.jpeg' alt="" />
        </div>
        <div className="grid-item">
          <img src='../img/img6.jpeg' alt="" />
        </div>
        <div className="grid-item">
          <img src='../img/img7.jpeg' alt="" />
        </div>
        <div className="grid-item">
          <img src='../img/img8.jpeg' alt="" />
        </div>
      </div>
    </div>
    </>
  );
}

export default App;