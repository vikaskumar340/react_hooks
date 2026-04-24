import { useContext } from "react";
import Themecontext from "./ThemeContext";
export default function ThemeButton() {
  const {theme, setTheme} = useContext(Themecontext);
  const themeCss = {
    darkCss: {backgroundColor: "#333", color: "#fff"},
    lightCss: {backgroundColor: "#fff", color: "#333"},
  }
  return (
    <div>
      <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={theme === "light" ? theme.lightCss : themeCss.darkCss}
      >Current theme : {theme}</button>
    </div>
  )

}