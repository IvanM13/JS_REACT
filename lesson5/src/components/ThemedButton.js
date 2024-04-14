import React, { createContext, useContext} from "react";

const ThemeContext = createContext();


const ThemedButton = () => {

    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme.background, color: theme.foreground }}>
            Themed Button
        </button>
    );
};

export default ThemedButton;