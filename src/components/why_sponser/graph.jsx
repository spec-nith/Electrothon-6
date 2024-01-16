import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import "./graph.css";
import React, { useEffect, useState } from "react";

const ChartSection = () => {
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
  const customColors = ["#009548", "#32CD32", "#9ACD32"];

  const legendPayload = [
    { value: "Total Applications", type: "disc", color: "#009548" },
    { value: "Total Projects", type: "disc", color: "#32CD32" },
    { value: "Total Participants", type: "disc", color: "#9ACD32 " },
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
    <div className="chart-container">
      <div className="chart-section">
        <div className="tit">
          <div className="chart-title">ELECTROTHON 5.0</div>
          <div className="online">offline</div>
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
          <div className="online">online</div>
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
          <div className="online">online</div>
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
  );
};

export default ChartSection;
