import { createContext, useContext, useEffect, useState } from "react";

export const theme = {
    light: {backgroundColor: "#eeeeee", width: '250px', height: '250px'},
    dark:  {backgroundColor: "#222222", width: '250px', height: '250px'}
};
export const ThemeContext = createContext();
export function useTheme() {
    return useContext(ThemeContext)
}
export const ThemeProvider = ({children}) => {
    const [darkTheme, setDarkTheme] = useState(theme.light)
    const changeTheme = ()=>{
        setDarkTheme(prevTheme => prevTheme === theme.light ? theme.dark : theme.light)
    }
    useEffect(()=>{
        console.log("parent-component did mount")
        return ()=>{console.log('parent-component will unmount')}
    },[])
    return (
        <ThemeContext.Provider value={{darkTheme, changeTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
