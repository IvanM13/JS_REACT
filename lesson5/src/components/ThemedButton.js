import React, { createContext, useContext, useState} from "react";

const ThemeContext = createContext();

const ThemedButton = () => {

    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            Theme Button
        </button>
    );
};

export default ThemedButton;