import React, { createContext, useContext, useState } from 'react';

const Context = createContext();

const DataProvider = ({ children }) => {

    const initialRegistration = {
        PlacementOfficer: [],
        Recruiter: [],
        Student: [],
        TrainingCoordinator: []
    };

    const [user, setUser] = useState(initialRegistration)





    return (
        <Context.Provider value={{user,setUser}}>
            {children}
        </Context.Provider>
    );
};

export default DataProvider

export const useData = () => useContext(Context);