import "./sidebar.css";
import { sidebarData } from "./sidebarData";
import { NavLink } from "react-router-dom";

import TwitterIcon from "@mui/icons-material/Twitter";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__contents">
        <TwitterIcon className="icon" />

        {sidebarData.map((item) => (
          <NavLink
            to={`/${item.links}`}
            className="links"
            style={({ isActive }) => ({
              fontWeight: isActive ? "800" : undefined,
            })}
          >
            <div className="sidebar__content" key={item.id}>
              <p>{item.icon}</p>
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}

        <button>Tweet</button>
      </div>
    </div>
  );
};

export default Sidebar;
