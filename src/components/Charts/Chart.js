import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {

    const dataPointsArr = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumValue = Math.max(...dataPointsArr)
    return (
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => (
            <ChartBar
            key = {dataPoint.id}
            value = {dataPoint.value}
            maxValue = {maximumValue}
            label = {dataPoint.label}
            />
            ))}
    </div>
    )
}

export default Chart ;