// import { createContext, useEffect, useState } from "react";

// const ThemeContext=createContext();
// const getTheme=()=>{
//     const theme=localStorage.getItem("theme");
//     return theme ? theme :"dark"
// };

// const ThemeProvider=({children})=>{
//     const [theme,setTheme]=useState(getTheme);
//     function toggleTheme(){
//         setTheme((prev)=>(prev === "dark" ? "light":"dark"));
//     }

//     useEffect(()=>{
        
//         if (theme === "dark") {
//             root.classList.add("dark")
//         }else{
//             root.classList.remove("dark")
//         }
//         localStorage.setItem("theme",theme);
//     },[theme]);

//     return (
//         <ThemeContext.Provider value={{theme,toggleTheme}}>
//             {children}
//         </ThemeContext.Provider>
//     )
// };

// export {ThemeContext,ThemeProvider}