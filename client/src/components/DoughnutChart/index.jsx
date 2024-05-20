import React, {useEffect, useRef} from 'react';
import Chart from "chart.js/auto";

const DoughnutChart = ({available, planned, used}) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const thisChartRef = chartRef.current.getContext("2d");

        Chart.defaults.plugins.legend.display = false;

        chartInstance.current = new Chart(thisChartRef, {
            type: 'doughnut',
            data: {
                labels: [
                    'Доступно сейчас',
                    'Использовано/недоступно',
                    'Запланировано'
                ],
                datasets: [{
                    data: [available, used, planned],
                    backgroundColor: [
                        'rgb(37, 130, 79)',
                        'rgb(219, 69, 70)',
                        'rgb(255, 182, 73)'
                    ],
                    borderWidth: 0
                }],
            },
            options: {
                cutout: 70,
            }
        });
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, []);

    return (
        <div className='relative justify-center w-[160px] h-[160px]'>
            <canvas ref={chartRef}/>
            <div className='flex flex-col justify-center text-center mt-[-110px] space-y-1'>
                <span className='font-normal text-3xl text-text-primary select-none'>{available}</span>
                <span className='font-medium text-sm text-text-tertiary select-none'>дня</span>
            </div>
        </div>
    );
};

export default DoughnutChart;