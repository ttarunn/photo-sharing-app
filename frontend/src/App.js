import "./App.css";
import { AiOutlineCamera } from "react-icons/ai";
import Routers from "./Routers";
import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
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
            <h1 style={{ marginLeft: "2rem" }}>
              <Link
                to={"/"}
                className={theme === "light" ? "link" : "link-dark"}
              >
                <BsInstagram fontSize={"1.5rem"} />
                Insta Clone
              </Link>
            </h1>
            <div>
              {theme === "light" ? (
                <MdOutlineDarkMode onClick={toggleTheme} className="icon" />
              ) : (
                <MdDarkMode onClick={toggleTheme} className="icon" />
              )}
              <Link to={"/createPost"} className="link">
                <AiOutlineCamera
                  className={theme === "light" ? "icon" : "icon-dark"}
                />
              </Link>
            </div>
          </div>
        </Routers>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
