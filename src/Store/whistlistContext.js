import React, { createContext, useContext, useState } from 'react'

const WhistlistContext = createContext();

export const UseWhistlistContext = () => {
    return useContext(WhistlistContext);
}

export const WhistlistProvider = ({ children }) => {
    const [whistlist, setWhistlist] = useState([]);

    const addToWhistlist = (item) => {
        setWhistlist([...whistlist, item])
    }

    const value = {
        whistlist,
        addToWhistlist
    }
return (
    <WhistlistContext.Provider value={value}>
        {children}
    </WhistlistContext.Provider>
)
}