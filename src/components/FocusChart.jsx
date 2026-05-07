import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function FocusChart({ studyTime, distractionTime }) {
  const data = [
    {
      name: 'Time (minutes)',
      Study: Math.floor(studyTime / 60),
      Distraction: Math.floor(distractionTime),
    },
  ];

  return (
    <div className="focus-chart">
      <h2>Study vs Distraction Time</h2>
      <BarChart width={400} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Study" fill="#8884d8" />
        <Bar dataKey="Distraction" fill="#82ca9d" />
      </BarChart>
    </div>
  );
}

export default FocusChart;