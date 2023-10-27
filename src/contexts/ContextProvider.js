import React, { createContext, useContext, useState} from "react";

const StateContext = createContext();

const initialState = {
    chart: false,
    cart: false,
}

export const ContextProvider = ({ childeren }) => {
    const [activeMenu, setActiveMenu] = useState(true)

    return (
        <StateContext.Provider
            value={{ test: "test"}}
        >
            {childeren}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);