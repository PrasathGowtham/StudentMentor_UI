import React from 'react'

let myContext = React.createContext();
const MyProvider = myContext.Provider

export default myContext;
export { MyProvider }
