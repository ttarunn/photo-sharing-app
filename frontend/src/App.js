import "./App.css";
import { AiOutlineCamera, AiFillCopyrightCircle } from "react-icons/ai";
import Routers from "./Routers";
import { Link } from "react-router-dom";
import { BsInstagram, BsSun } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { createContext, useState } from "react";


export const ThemeContext = createContext("light");
function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <Routers>
          <div className={theme === "light" ? "wrapper" : "wrapper-dark"}>
            <h1 className="h1">
              <Link
                to={"/"}
                className={theme === "light" ? "link" : "link-dark"}
              >
                <BsInstagram className="insta" />
                Insta Clone
              </Link>
            </h1>
            <div>
              {theme === "light" ? (
                <MdDarkMode onClick={toggleTheme} className="icon" />
              ) : (
                <BsSun onClick={toggleTheme} className="icon" />
              )}
              <Link to={"/createPost"} className="link">
                <AiOutlineCamera
                  className={theme === "light" ? "icon" : "icon-dark"}
                />
              </Link>
            </div>
          </div>
        </Routers>
        <div className="footer">
          <AiFillCopyrightCircle/> Made With ❤️!
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
