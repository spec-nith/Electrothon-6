import React from "react";

const Design_copmponent = () => {
  const elements = Array.from({ length: 55 }, (_, index) => (
    <div
      key={index}
      className="flex flex-cols"
      style={{
        opacity: index >= 20 ? 0.5 : 1, // 20 for larger screens
        margin: "1px",
      }}
    >
      /
    </div>
  ));

  return (
    <>
      {/*tablet and larger views */}
      <div className="hidden  sm:flex flex-rows">{elements}</div>
      {/* mobile view */}
      <div className="sm:hidden flex flex-rows">
        {elements.slice(0, 30).map((x, index) => (
          <div
            key={index}
            className="flex flex-cols"
            style={{
              opacity: index >= 10 ? 0.5 : 1, // Decreased to 10 for mobile view
              margin: "1px",
            }}
          >
            /
          </div>
        ))}
      </div>
    </>
  );
};

export default Design_copmponent;
