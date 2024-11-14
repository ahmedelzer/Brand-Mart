import { useEffect, useState } from "react";

/**
 * Custom timer hook that triggers a callback after a specified time and provides countdown.
 * @param {number} minutes - Time in minutes after which the callback will be triggered.
 * @param {function} callback - Function to be called when the timer expires.
 * @returns {number} countdown - Remaining time in seconds.
 */
const useTimer = (minutes, callback) => {
  const [countdown, setCountdown] = useState(minutes * 60);

  useEffect(() => {
    if (!minutes || !callback) return;

    const interval = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 1) {
          clearInterval(interval);
          callback();
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [minutes, callback]);

  return countdown;
};

export default useTimer;
