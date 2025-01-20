import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const SalesChart = () => {
  const data = [
    { date: '01.09', value: 1250000 },
    { date: '01.10', value: 1500000 },
    { date: '01.11', value: 1750000 },
  ];

  return (
    <section className="bg-white p-6 rounded-lg shadow">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default SalesChart;