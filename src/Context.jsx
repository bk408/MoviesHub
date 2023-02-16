import React, { useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
   return <AppContext.Provider value="bhavya">
    {children}
   </AppContext.Provider>
};

// global custom hooks 

const useGlobalContext = () => {
    return useContext(AppContext);
};


export { AppContext, AppProvider, useGlobalContext};