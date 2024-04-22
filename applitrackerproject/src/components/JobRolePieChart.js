import React from 'react';
import Plot from 'react-plotly.js';
import PropTypes from 'prop-types'; // Import PropTypes

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

// PropTypes validation
JobRolePieChart.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            role: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired
        })
    ).isRequired
};
export default JobRolePieChart;
