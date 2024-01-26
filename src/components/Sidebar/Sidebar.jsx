import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import navItems from "./SidebarData";
import "../Left_sidebar/sidebar.css";

const SocialMediaLG = (props) => {
  return (
    <a
      href={props.item.link}
      target="_blank"
      rel="noreferrer noopener"
      className="flex flex-row items-center py-2 text-gray-300 align-middle transition-all  duration-300 border-transparent xl:text-md"
    >
      <span className="relative flex items-center justify-center curs w-12 text-lg rounded-lg h-14 hover:text-blue-500 tooltip">
        <FontAwesomeIcon
          className="text-3xl"
          icon={props.item.icon}
          fixedWidth
        />
        <p className="tooltiptext2">{props.item.name}</p>
      </span>
    </a>
  );
};

const Sidebar = () => {
  return (
    <div
      className="fixed z-50 left-0 flex flex-wrap w-full h-full ml-6 lg:ml-12 social-handler"
      style={{ left: "92%" }}
    >
      <nav className="items-center my-auto h-1/2">
        <div className="z-50 flex-col items-center justify-center hidden h-full rounded-full md:flex">
          {navItems.map(
            (
              item // Change socialItems to navItems
            ) => (
              <SocialMediaLG item={item} key={item.link} />
            )
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
