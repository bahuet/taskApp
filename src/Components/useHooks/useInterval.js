import React, { useState, useEffect, useRef } from "react"

function useInterval(callback, delay) {
  // const [debug, setDebug] = useState([])
  const savedCallback = useRef()
  //console.log(debug)
  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      //setDebug([...debug, id])
      return () => clearInterval(id)
    }
  }, [delay])
}

export default useInterval
