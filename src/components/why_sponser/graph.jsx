import React, { useEffect } from 'react';
import './graph.css';

const ChartSection = () => {
  useEffect(() => {
    document.querySelectorAll(".chart_section").forEach((chartSection) => {
      const chart = chartSection.querySelector('ul');
      const chartBaseline = chart.dataset.baseline;

      Array.from(chart.querySelectorAll('li')).forEach((bar) => {
        const barShape = bar.querySelector('i');
        const barData = bar.dataset.value;

        
        const barTotal = Math.round((barData / chartBaseline) * 1000) + '%';
        

        barShape.style.flex = `0 0 ${barTotal}`;
      });
    });
  }, []);

  return (
    <section className="charts_bar">
      <article className="chart_section">
        <div className="chart_title">Electrothone 5.0</div>
        <ul data-baseline="100">
          <li data-value="120" data-label="N&J"><i></i></li>
          <li data-value="52" data-label="Fraser"><i></i></li>
          <li data-value="25" data-label="Burgess"><i></i></li>
         
        </ul>
      </article>

      <article className="chart_section">
        <div className="chart_title">Electrothone 4.0</div>
        <ul data-baseline="100">
          <li data-value="80" data-label="N&J"><i></i></li>
          <li data-value="50" data-label="Fraser"><i></i></li>
          <li data-value="30" data-label="Burgess"><i></i></li>
         
        </ul>
      </article>

      <article className="chart_section">
        <div className="chart_title">Electrothone 3.0</div>
        <ul data-baseline="100">
          <li data-value="50" data-label="N&J"><i></i></li>
          <li data-value="40" data-label="Fraser"><i></i></li>
          <li data-value="25" data-label="Burgess"><i></i></li>
          
        </ul>
      </article>

      {/* <article className="chart_section">
        <div className="chart_title">Electrothone 2.0</div>
        <ul data-baseline="100">
          <li data-value="20" data-label="N&J"><i></i></li>
          <li data-value="15" data-label="Fraser"><i></i></li>
          <li data-value="10" data-label="Burgess"><i></i></li>
          <li data-value="15" data-label="IYC"><i></i></li>
        </ul>
      </article> */}

      <div className="chart_key">
        <ul>
          <li>Total Applications</li>
          <li>Total Projects</li>
          <li>Total Teams</li>
        </ul>
      </div>
    </section>
  );
};

export default ChartSection;
