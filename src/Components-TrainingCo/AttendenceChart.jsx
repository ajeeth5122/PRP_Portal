import React from 'react'
import { PieChart, Pie, Cell } from 'recharts'

const AttendenceChart = () => {
      const present = 1182
      const absent = 49
      const total = present + absent
      const presentPercent = Math.round((present / total) * 100)
      const absentPercent = 100 - presentPercent
    
      const data = [
        { name: 'Present', value: presentPercent, color: '#00AC48' },
        { name: 'Absent', value: absentPercent, color: '#deacac' },
      ]
    
  return (
    <>
    <div className="todaysAttendence-gaugeWrap">
        <PieChart width={170} height={96}>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy={80}
            startAngle={180}
            endAngle={0}
            innerRadius={45}
            outerRadius={75}
            cornerRadius={0}
            stroke="none"
            isAnimationActive={false}
          >
            {data.map((entry) => (
              <Cell key={entry.name} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>

        <div className="todaysAttendence-gaugeCenter">
          <div className="todaysAttendence-percent">{presentPercent}%</div>
          <div className="todaysAttendence-percentLabel">Present</div>
        </div>
      </div>

      <div className="todaysAttendence-stats">
        <div className="todaysAttendence-stat">
          <div className="todaysAttendence-statNumber todaysAttendence-statNumber--present">
            {present.toLocaleString('en-IN')}
          </div>
          <div className="todaysAttendence-statLabel">Present</div>
        </div>

        <div className="todaysAttendence-stat">
          <div className="todaysAttendence-statNumber todaysAttendence-statNumber--absent">
            {absent}
          </div>
          <div className="todaysAttendence-statLabel">Absent</div>
        </div>
      </div>
      </>
  )
}

export default AttendenceChart