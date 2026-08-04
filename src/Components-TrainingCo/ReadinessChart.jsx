import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import './ReadinessChart.css'

const data = [
    { name: 'Ready', value: 845, color: '#6ECEE9' },
    { name: 'Need Mock Interview', value: 215, color: '#B46BEA' },
    { name: 'Resume Pending', value: 145, color: '#7992E6' },
    { name: 'Other Pending', value: 65, color: '#6409FF' },
]

const ReadinessChart = () => {
    const total = data.reduce((sum, d) => sum + d.value, 0)

    return (
        <div className="readiness-card">
            <div className="readiness-body">
                <div className="readiness-donut">
                    <PieChart width={200} height={200}>
                        <Pie
                            data={data}
                            dataKey="value"
                            cx="50%"
                            cy="50%"
                            innerRadius={65}
                            outerRadius={80}
                            startAngle={90}
                            endAngle={-270}
                            paddingAngle={4}
                            cornerRadius={6}
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                    <div className="readiness-center">
                        <span className="readiness-count">{total.toLocaleString()}</span>
                        <span className="readiness-label">Total Students</span>
                    </div>
                </div>

                <ul className="readiness-legend">
                    {data.map((item) => (
                        <li key={item.name}>
                            <span className="dot" style={{ backgroundColor: item.color }} />
                            <div className="legend-text">
                                <p className="legend-name">{item.name}</p>
                                <p className="legend-value">
                                    {item.value.toLocaleString()}{' '}
                                    <span className="legend-percent">
                                        ({((item.value / total) * 100).toFixed(1)}%)
                                    </span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ReadinessChart