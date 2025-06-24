import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface SalesVolumeProps {
  data: {
    year: number;
    month: number;
    salesvolume: number;
  }[];
}

const monthMap: { [key: number]: string } = {
  1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun',
  7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec'
};

const lineColors = ['#8884d8', '#82ca9d', '#ffc658', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

const SalesVolume: React.FC<SalesVolumeProps> = ({ data }) => {
  const [chartData, setChartData] = useState<any[]>([]);
  const [years, setYears] = useState<string[]>([]);

  useEffect(() => {
    if (!data || data.length === 0) return;

    const uniqueYears = [...new Set(data.map(item => item.year.toString()))].sort();
    setYears(uniqueYears);

    const groupedData: { [key: string]: any } = {};

    // Initialize with all months
    for (let i = 1; i <= 12; i++) {
      groupedData[monthMap[i]] = { month: monthMap[i] };
    }

    data.forEach(item => {
      const monthName = monthMap[item.month];
      if (groupedData[monthName]) {
        groupedData[monthName][item.year] = item.salesvolume;
      }
    });

    const finalChartData = Object.values(groupedData);
    setChartData(finalChartData);
  }, [data]);

  return (
    <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <h3 className="text-slate-800 text-lg font-semibold">Sales Volume</h3>
      <p className="text-slate-600 text-sm mb-4">Monthly sales volume by year</p>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip
            contentStyle={{
              background: 'rgba(255, 255, 255, 0.95)',
              border: 'none',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
          />
          <Legend />
          {years.map((year, index) => (
            <Line
              key={year}
              type="monotone"
              dataKey={year}
              stroke={lineColors[index % lineColors.length]}
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesVolume;
