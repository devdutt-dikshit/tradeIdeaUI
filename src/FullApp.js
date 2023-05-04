import React, {useState} from "react";

import AppContext from './FullAppContext';


const FullApp = props => {
    const [data, updateData] = useState({ isAuth: false })
    return(
        <AppContext.Provider value={{data, updateData}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default FullApp;