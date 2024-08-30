import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialTime, onComplete }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) {
      onComplete();
      return;
    }

    const timerId = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerId); // Cleanup timer on unmount
  }, [time, onComplete]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  return <span>{formatTime(time)}</span>;
};

export default CountdownTimer;
