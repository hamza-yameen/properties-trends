import React, {useState, useEffect} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface RentByCityProps {
  data: any
}

const RentByCity: React.FC<RentByCityProps> = ({ data }) => {
  const [rentByCityData, setRentByCityData] = useState<any[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('all');

  useEffect(() => {
    if (!data) return;

    // Process the data to add month names and format for charting
    const processedData = data.map((item: any) => ({
      ...item,
      monthName: new Date(item.Year, item.Month - 1).toLocaleDateString('en-US', { month: 'short', year: '2-digit' }),
      period: `${item.Year}-${item.Month.toString().padStart(2, '0')}`,
      year: item.Year,
      month: item.Month,
      medianRent: Math.round(item.MedianRent)
    }));

    setRentByCityData(processedData);
    
    // Extract unique years
    const uniqueYears = [...new Set(processedData.map(item => item.Year))].sort();
    setYears(uniqueYears.map(year => year.toString()));
  }, [data]);

  // Filter data by selected year
  const filteredData = selectedYear === 'all' 
    ? rentByCityData 
    : rentByCityData.filter(item => item.Year.toString() === selectedYear);

  return (
    <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h3 className="text-slate-800 text-lg font-semibold"> Rent Trends</h3>
          <p className="text-slate-600 text-sm">Monthly rent over time</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-slate-600">Year:</label>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-24">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {years.map((year) => (
                <SelectItem key={year} value={year}>
                  {year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={350}>
        <AreaChart data={filteredData} margin={{ top: 20, right: 40, left: 20, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="monthName" 
            stroke="#64748b"
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            stroke="#06b6d4"
            label={{ 
              value: 'Median Rent ($)', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#06b6d4' }
            }}
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.95)', 
              border: 'none', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: any) => [`$${value.toLocaleString()}`, 'Median Rent']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="medianRent" 
            stroke="#06b6d4" 
            fill="url(#colorRent)" 
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorRent" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>

      {/* Rent Insights */}
      {filteredData.length > 0 && (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-cyan-50 p-3 rounded-lg">
            <div className="text-sm text-cyan-600 font-medium">Current Rent</div>
            <div className="text-lg font-bold text-cyan-800">
              ${filteredData[filteredData.length - 1].medianRent.toLocaleString()}
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">Average Rent</div>
            <div className="text-lg font-bold text-blue-800">
              ${Math.round(filteredData.reduce((sum, item) => sum + item.medianRent, 0) / filteredData.length).toLocaleString()}
            </div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Peak Rent</div>
            <div className="text-lg font-bold text-green-800">
              ${Math.max(...filteredData.map(item => item.medianRent)).toLocaleString()}
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-sm text-orange-600 font-medium">Growth Rate</div>
            <div className="text-lg font-bold text-orange-800">
              {(() => {
                if (filteredData.length < 2) return 'N/A';
                const first = filteredData[0].medianRent;
                const last = filteredData[filteredData.length - 1].medianRent;
                const growth = ((last - first) / first * 100);
                return `${growth > 0 ? '+' : ''}${Math.round(growth)}%`;
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Rent Analysis */}
      {filteredData.length > 0 && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Rent Analysis</h4>
          <div className="text-xs text-slate-600 space-y-1">
            {(() => {
              const currentRent = filteredData[filteredData.length - 1].medianRent;
              const avgRent = Math.round(filteredData.reduce((sum, item) => sum + item.medianRent, 0) / filteredData.length);
              const peakRent = Math.max(...filteredData.map(item => item.medianRent));
              const minRent = Math.min(...filteredData.map(item => item.medianRent));
              const recentData = filteredData.slice(-3);
              const recentAvg = Math.round(recentData.reduce((sum, item) => sum + item.medianRent, 0) / recentData.length);
              
              const trend = recentAvg > avgRent ? 'increasing' : 'decreasing';
              const isHigh = currentRent > avgRent * 1.1;
              const isLow = currentRent < avgRent * 0.9;
              
              return (
                <>
                  <p>• Current median rent: ${currentRent.toLocaleString()}</p>
                  <p>• Average rent: ${avgRent.toLocaleString()}</p>
                  <p>• Peak rent: ${peakRent.toLocaleString()}</p>
                  <p>• Rent range: ${minRent.toLocaleString()} - ${peakRent.toLocaleString()}</p>
                  <p>• Recent trend: Rent is {trend}</p>
                  {isHigh && <p>• High rent: Current rent above average</p>}
                  {isLow && <p>• Lower rent: Current rent below average</p>}
                  {!isHigh && !isLow && <p>• Stable rent: Current rent near average</p>}
                  {currentRent > 2000 && <p>• Premium market: Rent exceeds $2,000</p>}
                  {currentRent < 1500 && <p>• Affordable market: Rent under $1,500</p>}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  )
}

export default RentByCity
