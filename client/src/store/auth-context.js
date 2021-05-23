import React from 'react';

const AuthContext = React.createContext({
});

export const AuthContextProvider = (props) => {
    return (
        <AuthContext.Provider>
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;