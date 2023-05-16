import {createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState} from "react";
import {createTheme, CssBaseline, PaletteMode, Paper, ThemeOptions, ThemeProvider, useMediaQuery} from "@mui/material";
import {purple} from "@mui/material/colors";

const lightTheme:ThemeOptions = {
    palette: {
        mode: "light",
        primary:{
            main: "#000",
        },
        secondary:{
            main: "#fff"
        },
        background:{
            paper: purple["100"]
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
                <Paper
                    elevation={0}
                    sx={{borderRadius: 0, p: 0, m: 0}}>
                    {children}
                </Paper>
            </ThemeProvider>
        </ThemeContext.Provider>
    )

}

export default UI;