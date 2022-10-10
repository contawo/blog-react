import { createContext, useState, useEffect } from "react";

export const BlogContext = createContext();

const BlogContextProvider = ({children}) => {
    const [theme, setTheme] = useState("light");
    const [isClicked, setIsClicked] = useState(true);
    const [languageData, setLanguageData] = useState([]);
    const [language, setLanguage] = useState("")
    const [userLogin, setUserLogin] = useState(false);
    const [username, setUsername] = useState("username");
    const [userEmail, setUserEmail] = useState("user@gmail.com");

    useEffect(() => {
        window.localStorage.setItem('THEME', JSON.stringify(theme));
        window.localStorage.setItem('CLICKED', JSON.stringify(isClicked))
    }, [theme, isClicked])
    
    useEffect(() => {
        const data = window.localStorage.getItem('THEME')
        const result = window.localStorage.getItem('CLICKED')
        setTheme(JSON.parse(data))
        setIsClicked(JSON.parse(result))
    }, [])

    const values = {
        theme, 
        setTheme,
        isClicked,
        setIsClicked,
        languageData,
        setLanguageData,
        language,
        setLanguage,
        userLogin,
        setUserLogin,
        username,
        setUsername,
        userEmail,
        setUserEmail
    }

    return (
        <BlogContext.Provider value={values}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContextProvider;