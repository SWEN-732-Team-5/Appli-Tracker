import React from 'react';
import Plot from 'react-plotly.js';

const DataPlot2 = ({ data }) => {
    return (
        <div><center>
            <h2>Job Application Rate Plot</h2>
            <Plot
                data={[
                    {
                        x: data.x,
                        y: data.y,
                        type: 'scatter',
                        mode: 'lines+markers',
                        marker: { color: 'blue' },
                    }
                ]}
                layout={{ 
                    width: 720, 
                    height: 440, 
                    title: 'A Simple Plot: Click on points to see the value',
                    xaxis: {
                        title: 'Date',
                        showgrid: false,
                        zeroline: false
                    },
                    yaxis: {
                        title: 'Number of Applications',
                        showline: false
                    }
                }}
            /></center>
        </div>
    );
};

export default DataPlot2;
