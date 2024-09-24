import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import "./graph.css";
import React, { useEffect, useState } from "react";

const ChartSection = () => {
  const dataElectrothon6 = [
    { value: 1500, label: "N&J" },
    { value: 63, label: "Fraser" },
    { value: 20, label: "Burgess" },
    { value: 85, label: "Burgess" },
  ];
  const dataElectrothon5 = [
    { value: 1159, label: "N&J" },
    { value: 52, label: "Fraser" },
    { value: 53, label: "Burgess" },
  ];
  const dataElectrothon4 = [
    { value: 2217, label: "N&J" },
    { value: 103, label: "Fraser" },
    { value: 310, label: "Burgess" },
  ];
  const dataElectrothon3 = [
    { value: 1711, label: "N&J" },
    { value: 66, label: "Fraser" },
    { value: 279, label: "Burgess" },
  ];
  const customColors = ["#009548", "#9ACD32", "#32CD32"];
  const customColorsElectrothon6 = ["#FED8B1", "#6F4E37", "#A67B5B", "#ECB176"];

  const legendPayload = [
    { value: "Total Applications", type: "disc", color: "#009548" },
    { value: "Total Projects", type: "disc", color: "#32CD32" },
    { value: "Total Teams", type: "disc", color: "#9ACD32 " },
  ];
  const legendPayloadElectrothon6 = [
    { value: "Total Applications", type: "disc", color: "#FED8B1" },
    { value: "Total Hardware Projects", type: "disc", color: "#6F4E37" },
    { value: "Total Software Projects", type: "disc", color: "#A67B5B" },
    { value: "Total Teams", type: "disc", color: "#ECB176" },
  ];

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const calculateHeight = () => {
    const windowHeight = window.innerHeight;

    if (windowWidth <= 600) {
      return windowHeight * 0.3;
    } else if (windowWidth <= 900) {
      return windowHeight * 0.4;
    } else if (windowWidth <= 1300) {
      return windowHeight * 0.5;
    } else {
      return windowHeight * 0.6;
    }
  };

  return (
    <div className="chart-container justify-center items-center flex flex-col sm:space-y-40 space-y-20">
      <div className="items-center flex sm:flex-row flex-col space-y-6 justify-around w-full">
        <div className="tit flex items-center w-full">
          <div className="font-bold text-center text-[30px] lg:text-[48px]">ELECTROTHON 6.0</div>
          <div className="online text-[20px] lg:text-[30px]">Offline </div>
        </div>

        <ResponsiveContainer className="shadow-2xl sm:text-[19px] sm:font-bold flex flex-col justify-center items-center" width="100%" height={calculateHeight()}>
          <PieChart >
            <Pie className="sm:text-[20px] outline-none group hover:scale-105 transition-transform duration-300"
              dataKey="value"
              data={dataElectrothon6}
              cx="50%"
              cy="50%"
              outerRadius={
                windowWidth <= 650
                  ? "100%"
                  : windowWidth <= 883
                    ? "50%"
                    : windowWidth <= 900
                      ? "60%"
                      : windowWidth <= 1300
                        ? "60%"
                        : "75%"
              }
              label
            >
              {dataElectrothon6.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={customColorsElectrothon6[index % customColorsElectrothon6.length]}
                />
              ))}
            </Pie>

            {/* {windowWidth <= 650 && ( */}
            <Legend
              payload={legendPayloadElectrothon6}
              align="center"
              verticalAlign="bottom"
              className=""
            >
              {legendPayloadElectrothon6.map((entry,index) => (
                <div></div>
              ))}
            </Legend>
            {/* )} */}
          </PieChart>
        </ResponsiveContainer>

      </div>
      <div className="chart-container">
        <div className="chart-section">
          <div className="tit">
            <div className="chart-title">ELECTROTHON 5.0</div>
            <div className="online">Offline</div>
          </div>

          <ResponsiveContainer width="100%" height={calculateHeight()}>
            <PieChart>
              <Pie
                dataKey="value"
                data={dataElectrothon5}
                cx="50%"
                cy="50%"
                outerRadius={
                  windowWidth <= 650
                    ? "100%"
                    : windowWidth <= 883
                      ? "50%"
                      : windowWidth <= 900
                        ? "60%"
                        : windowWidth <= 1300
                          ? "60%"
                          : "75%"
                }
                label
              >
                {dataElectrothon5.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={customColors[index % customColors.length]}
                  />
                ))}
              </Pie>
              {windowWidth <= 650 && (
                <Legend
                  payload={legendPayload}
                  align="center"
                  verticalAlign="bottom"
                />
              )}
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <div className="tit">
            <div className="chart-title">ELECTROTHON 4.0</div>
            <div className="online">Online</div>
          </div>

          <ResponsiveContainer width="100%" height={calculateHeight()}>
            <PieChart>
              <Pie
                dataKey="value"
                data={dataElectrothon4}
                cx="50%"
                cy="50%"
                outerRadius={
                  windowWidth <= 650
                    ? "100%"
                    : windowWidth <= 883
                      ? "50%"
                      : windowWidth <= 900
                        ? "60%"
                        : windowWidth <= 1300
                          ? "60%"
                          : "75%"
                }
                label
              >
                {dataElectrothon4.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={customColors[index % customColors.length]}
                  />
                ))}
              </Pie>
              {windowWidth <= 650 && (
                <Legend
                  payload={legendPayload}
                  align="center"
                  verticalAlign="bottom"
                />
              )}
            </PieChart>
          </ResponsiveContainer>

          {windowWidth > 1000 && (
            <Legend
              payload={legendPayload}
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ position: "absolute", bottom: "-5%", left: "35%" }}
            />
          )}
          {windowWidth < 1000 && windowWidth > 850 && (
            <Legend
              payload={legendPayload}
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ position: "absolute", bottom: "-5%", left: "25%" }}
            />
          )}
          {windowWidth <= 850 && windowWidth > 650 && (
            <Legend
              payload={legendPayload}
              align="center"
              verticalAlign="bottom"
              wrapperStyle={{ position: "absolute", bottom: "-5%", left: "20%" }}
            />
          )}
        </div>

        <div className="chart-section">
          <div className="tit">
            <div className="chart-title">ELECTROTHON 3.0</div>
            <div className="online">Online</div>
          </div>

          <ResponsiveContainer width="100%" height={calculateHeight()}>
            <PieChart style={{ marginBottom: 8 }}>
              <Pie
                dataKey="value"
                data={dataElectrothon3}
                cx="50%"
                cy="50%"
                outerRadius={
                  windowWidth <= 650
                    ? "100%"
                    : windowWidth <= 883
                      ? "50%"
                      : windowWidth <= 900
                        ? "60%"
                        : windowWidth <= 1300
                          ? "60%"
                          : "75%"
                }
                label
              >
                {dataElectrothon3.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={customColors[index % customColors.length]}
                  />
                ))}
              </Pie>
              {windowWidth <= 650 && (
                <Legend
                  payload={legendPayload}
                  align="center"
                  verticalAlign="bottom"
                />
              )}
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ChartSection;
