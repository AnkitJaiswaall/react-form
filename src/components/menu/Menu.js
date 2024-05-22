import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Menu.module.css"; // Adjust path if necessary

const Menu = () => {
  const [expanded, setExpanded] = useState("");

  const handleToggle = (menu) => {
    setExpanded(expanded === menu ? "" : menu);
  };

  return (
    <div className={style.sideMenu}>
      <ul>
        <li>
          <Link to="/">
            <div className={style.name}>
              <div>
                <img
                  className={style.icon}
                  src="speedometer-icon.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                Dashboard
              </div>
              <span>{">"}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/company">
            <div className={style.name}>
              <div>
                <img
                  className={style.icon}
                  src="building-icon.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                Company
              </div>
              <span>{">"}</span>
            </div>
          </Link>
        </li>
        <li>
          <div className={style.name} onClick={() => handleToggle("projects")}>
            <div>
              <img
                className={style.icon}
                src="rocket-launch-icon.svg"
                height={20}
                width={20}
                alt=""
              />
              Projects
            </div>
            <span>{expanded === "projects" ? "v" : ">"}</span>
          </div>
          {expanded === "projects" && (
            <ul className={style.subMenu}>
              <li>
                <Link to="/projects/create">
                  <div className={style.project} style={{ paddingTop: "20px" }}>
                    Create Project
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/projects/manage">
                  <div
                    className={style.project}
                    style={{ paddingTop: "0px", textDecoration: "none" }}
                  >
                    Manage Projects
                  </div>
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/reporting">
            <div className={style.name}>
              <div>
                <img
                  className={style.icon}
                  src="application-approved-icon.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                Reporting
              </div>
              <span>{">"}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/administration">
            <div className={style.name}>
              <div>
                <img
                  className={style.icon}
                  src="management-icon.svg"
                  height={20}
                  width={20}
                  alt=""
                />
                Administration
              </div>
              <span>{">"}</span>
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
