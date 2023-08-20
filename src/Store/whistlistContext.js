import React, { createContext, useContext, useState } from 'react'

const whistlistContext = createContext();

export const useWhistlistContext = () => {
    return useContext(whistlistContext);
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
    <whistlistContext.Provider value={value}>
        {children}
    </whistlistContext.Provider>
)
}