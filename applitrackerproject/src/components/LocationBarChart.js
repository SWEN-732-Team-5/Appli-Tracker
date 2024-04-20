import React from 'react';
import Plot from 'react-plotly.js';

const LocationBarChart = ({ data }) => {
    const locations = data.map(item => item.location);
    const values = data.map(item => item.count);

    return (
        <Plot
            data={[
                {
                    x: locations,
                    y: values,
                    type: 'bar',
                    marker: {
                        color: 'green', // Customizable color
                        line: {
                            color: 'black',
                            width: 1.5
                        }
                    }
                }
            ]}
            layout={{
                title: 'Number of Applications by Location',
                xaxis: {
                    title: 'Location'
                },
                yaxis: {
                    title: 'Number of Applications'
                },
                height: 400,
                width: 500
            }}
        />
    );
};

export default LocationBarChart;
