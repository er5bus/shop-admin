import { useState, useEffect } from "react"


const useStateWithCallback = (initialState, callback) => {
  const [state, setState] = useState(initialState);

  useEffect(() => setState(callback(state)), [state, callback]);

  return [state, setState];
}


export default useStateWithCallback
