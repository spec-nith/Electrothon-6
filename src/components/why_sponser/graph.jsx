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

        
        const barTotal = Math.round((barData / chartBaseline) * 60) + '%';
        

        barShape.style.flex = `0 0 ${barTotal}`;
      });
    });
  }, []);

  return (
    <section className="charts_bar ">
      <article className="chart_section">
        <div className="chart_title">Electrothon 5.0</div>
        <ul data-baseline="100">
          <li data-value="1159" data-label="N&J"><i></i></li>
          <li data-value="52" data-label="Fraser"><i></i></li>
          <li data-value="53" data-label="Burgess"><i></i></li>
         
        </ul>
      </article>

      <article className="chart_section">
        <div className="chart_title">Electrothon 4.0</div>
        <ul data-baseline="100">
          <li data-value="2217" data-label="N&J"><i></i></li>
          <li data-value="103" data-label="Fraser"><i></i></li>
          <li data-value="310" data-label="Burgess"><i></i></li>
         
        </ul>
      </article>

      <article className="chart_section">
        <div className="chart_title">Electrothon 3.0</div>
        <ul data-baseline="100">
          <li data-value="1711" data-label="N&J"><i></i></li>
          <li data-value="66" data-label="Fraser"><i></i></li>
          <li data-value=" 279" data-label="Burgess"><i></i></li>
          
        </ul>
      </article>
 
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
