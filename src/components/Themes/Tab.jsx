// import React from "react";
// import "./style.css";

// const Tabs = ({ activeTab, onTabClick }) => {
//   const tabs = [
//     "Physical Infrastructure Networks",
//     "Artificial Intelligence",
//     "Finance & Payments",
//     "Gaming & Entertainment",
//     "Mobile Consumer Apps",
//     "Crypto Infrastructure",
//     "DAOs & Network States",
//   ];

//   return (
//     <div className="flex flex-wrap mx-24 pt-9 sle bloop2 ">
//       {tabs.map((tab, index) => (
//         <React.Fragment key={index}>
//           <div className="w-full flex flex-basis sm:w-1/3  mb-6  bloop">
//             <div className="text-white"></div>
//             <div
//               className={`cursor-pointer py-2 px-4 relative rounded-md  ${
//                 activeTab === index ? "bg-white text-black" : "text-white "
//               }`}
//               style={{
//                 maxWidth: "100%",
//               }}
//               onClick={() => onTabClick(index)}
//             >
//               {tab}
//               <div
//                 className="absolute inset-0 border rounded-md"
//                 style={{
//                   borderImage:
//                     "linear-gradient(95deg, #29E1FF -12.14%, #FFF61D 91.11%)",
//                   borderImageSlice: "1",
//                 }}
//               ></div>
//             </div>
//             <div className="text-white"></div>
//           </div>
//         </React.Fragment>
//       ))}
//     </div>
//   );
// };

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
    <div className="flex flex-wrap mx-24 pt-9 sle bloop2 ">
      {tabs.map((tab, index) => (
        <React.Fragment key={index}>
          <div className="w-full flex flex-basis sm:w-1/3  mb-6  bloop">
            <div className="text-white"></div>
            <div
              className={`cursor-pointer py-2 px-4 border  rounded-md  ${
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
