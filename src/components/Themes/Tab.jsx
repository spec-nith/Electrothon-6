import React from "react";
import "./style.css";
const Tabs = ({ activeTab, onTabClick }) => {
  const tabs = [
    "FoodTech",
    " Climate Emergency",
    " Healthcare",
    "Data Security and Blockchain",
    "EdTech",
    "Open Innovation",
  ];

  return (
    <div className="flex flex-wrap mx-24 pt-9 ">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <div className=" bloop">
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
