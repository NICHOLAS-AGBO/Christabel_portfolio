import {useContext} from "react";
import UI, {ThemeContext} from "../components/UITheme";

const useTheme = () => ({ UI: UI, changeTheme: useContext(ThemeContext).toggleTheme, mode: useContext(ThemeContext).mode });

export default useTheme;