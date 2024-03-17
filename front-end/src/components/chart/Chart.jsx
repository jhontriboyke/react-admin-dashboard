import './Chart.css';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';

function Chart({ title, data, dataKey, grid, yAxis }) {
    return (
        <section className="chart" title="Chart">
            <h3 className="chart-title">{title}</h3>

            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid strokeDasharray="3 10" />}
                    <XAxis dataKey="name" fontSize={14} />
                    {yAxis && <YAxis />}
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey={dataKey}
                        stroke="#84abad"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </section>
    );
}

export default Chart;
