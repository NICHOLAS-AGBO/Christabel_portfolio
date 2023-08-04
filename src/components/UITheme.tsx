import {createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {
    Box,
    createTheme,
    CssBaseline,
    PaletteMode,
    ThemeOptions,
    ThemeProvider,
    useMediaQuery
} from "@mui/material";

const lightTheme:ThemeOptions = {
    palette: {
        mode: "light",
        primary:{
            main: "#000",
        },
        text:{
            primary: "#fff"
        },
        secondary:{
            main: "#fff"
        },
        background:{
            paper: "linear-gradient(45deg, #5540f8, #9b31d1)"
        }
    }
};
const darkTheme:ThemeOptions = {
    palette: {
        mode: "dark",
        primary:{
            main: "#fff",
        },
        secondary:{
            main: "#000"
        }
    }
};
const mode = window.localStorage.mode;

type contextProps = {Theme: ThemeOptions, toggleTheme: (deviceMode?:"system")=> void, mode: PaletteMode|undefined};

export const ThemeContext = createContext<contextProps>({
    Theme: lightTheme,
    toggleTheme: ()=>{},
    mode: "light"
});

const UI:FC<{children: ReactNode}> = ({children})=>{
    const muiMedia = useMediaQuery("(prefers-color-scheme: dark)");
    const systemMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [theme, setTheme] = useState(lightTheme);

    //theme change function
    const changeTheme = useCallback((deviceMode?:"system")=> {
        if (deviceMode==="system"){
            if (systemMode&&muiMedia) setTheme(darkTheme);
            else setTheme(lightTheme);
            window.localStorage.theme=null;
        }else {
            if (theme.palette!.mode === "dark") {
                setTheme(lightTheme);
                window.localStorage.setItem("mode","light");
            }
            if (theme.palette!.mode === "light") {
                setTheme(darkTheme);
                window.localStorage.setItem("mode","dark");
            }
        }
    },[theme, systemMode, muiMedia]);

    //for controlling active theme on refresh
    useEffect(()=>{
        if (mode){
            if (mode === "dark") setTheme(darkTheme);
            if (mode === "light") setTheme(lightTheme);
        }else {
            if (systemMode&&muiMedia) {
                setTheme(darkTheme);
            }
            else {
                setTheme(lightTheme);
            }
        }
    }, [muiMedia, systemMode]);


    //Theme value
    const Theme = useMemo(()=>createTheme(theme),[theme]);

    return(
        <ThemeContext.Provider value={{Theme: Theme, toggleTheme: changeTheme, mode: theme.palette!.mode}}>
            <ThemeProvider theme={Theme}>
                <CssBaseline />
                <Box
                    sx={{
                        background:theme.palette!.mode==="dark"?
                            "#121212":"linear-gradient(45deg, #5540f8, #9b31d1)",
                }}>
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}

export default UI;