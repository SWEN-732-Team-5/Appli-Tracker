import React from 'react';
import Plot from 'react-plotly.js';

const JobRolePieChart = ({ data }) => {
    const labels = data.map(item => item.role);
    const values = data.map(item => item.count);

    return (
        <Plot
            data={[
                {
                    labels: labels,
                    values: values,
                    type: 'pie',
                    textinfo: 'label+percent',
                    insidetextorientation: 'radial'
                }
            ]}
            layout={{
                height: 400,
                width: 720,
                title: 'Job Application by Role'
            }}
        />
    );
};

export default JobRolePieChart;
