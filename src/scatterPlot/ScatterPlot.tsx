import ReactECharts from 'echarts-for-react';
import useScatterPlot from './useScatterPlot';

const ScatterPlot = () => {
  const {scatterPlotOptions} = useScatterPlot();
  return (
    <div className='chart_wrapper'>
      <ReactECharts option={scatterPlotOptions} style={{height: '400px'}}/>
    </div>
  )
}

export default ScatterPlot