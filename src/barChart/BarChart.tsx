import ReactEChart from 'echarts-for-react';
import useBarChart from './useBarChart';

const BarChart = () => {
  const {barChartOptions} = useBarChart();
  return (
    <div className='chart_wrapper'>
      <ReactEChart option={barChartOptions} style={{width: '100%', height: '400px'}}/>
    </div>
  )
}

export default BarChart;