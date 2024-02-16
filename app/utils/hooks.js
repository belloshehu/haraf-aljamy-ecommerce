import { useState, useEffect, useRef } from "react";

export const useCountLoading = ({
  maxCount = 10,
  actionHandler,
  loadingMessage,
  stopLoadingMessage,
}) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const countRef = useRef(0);
  let setIntervalID = null;

  useEffect(() => {
    setIntervalID = setInterval(function () {
      if (loading) {
        if (countRef.current >= maxCount) {
          setLoading(false);
          clearInterval(setIntervalID);
          actionHandler();
          countRef.current = 0;
          setMessage(stopLoadingMessage);
        } else {
          countRef.current = countRef.current + 1;
          setMessage(`${loadingMessage} ${countRef.current}`);
          console.log(countRef.current, maxCount);
        }
      }
    }, 1000);

    return () => {
      clearInterval(setIntervalID);
    };
  }, [loading]);

  return { loading, setLoading, message, count: countRef.current };
};
