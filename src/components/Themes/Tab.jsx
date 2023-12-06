import React from "react";
import "./style.css";
const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = [
    "Physical Infrastructure Networks",
    "Artificial Intelligence",
    "Finance & Payments",
    "Gaming & Entertainment",
    "Mobile Consumer Apps",
    "Crypto Infrastructure",
    "DAOs & Network States",
  ];

  return (
    <div className="flex flex-wrap mx-24 pt-9 sle ">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <div className="w-full flex flex-basis sm:w-1/3  mb-6  bloop">
            <div className="text-white"></div>
            <div
              className={`cursor-pointer py-2 px-4 border rounded-md  ${
                activeTab === index ? "bg-white text-black" : "text-white "
              }`}
              style={{
                maxWidth: "100%",
              }}
              onClick={() => onTabClick(index)}
            >
              {tab}
            </div>
            <div className="text-white"></div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Tabs;