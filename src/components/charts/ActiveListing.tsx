import React, {useState, useEffect} from 'react';
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ActiveListingProps {
  data: any
}

const ActiveListing: React.FC<ActiveListingProps> = ({ data }) => {
  const [activeListingData, setActiveListingData] = useState<any[]>([]);
  const [years, setYears] = useState<string[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>('all');

  useEffect(() => {
    if (!data) return;
    console.log("data", data);

    // Process the data to add month names and format for charting
    const processedData = data.map((item: any) => ({
      ...item,
      monthName: new Date(item.Year, item.Month - 1).toLocaleDateString('en-US', { month: 'short' }),
      period: `${item.Year}-${item.Month.toString().padStart(2, '0')}`,
      year: item.Year,
      month: item.Month,
      activeListings: item.ActiveListings
    }));

    setActiveListingData(processedData);
    
    // Extract unique years
    const uniqueYears = [...new Set(processedData.map(item => item.Year))].sort();
    setYears(uniqueYears.map(year => year.toString()));
  }, [data]);

  // Filter data by selected year
  const filteredData = selectedYear === 'all' 
    ? activeListingData 
    : activeListingData.filter(item => item.Year.toString() === selectedYear);

  return (
    <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
        <div>
          <h3 className="text-slate-800 text-lg font-semibold">Active Listings Trend</h3>
          <p className="text-slate-600 text-sm">Monthly active listings over time</p>
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
            stroke="#10b981"
            label={{ 
              value: 'Active Listings', 
              angle: -90, 
              position: 'insideLeft',
              style: { textAnchor: 'middle', fill: '#10b981' }
            }}
          />
          <Tooltip 
            contentStyle={{ 
              background: 'rgba(255, 255, 255, 0.95)', 
              border: 'none', 
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value: any) => [`${value.toLocaleString()} listings`, 'Active Listings']}
            labelFormatter={(label) => `Month: ${label}`}
          />
          <Area 
            type="monotone" 
            dataKey="activeListings" 
            stroke="#10b981" 
            fill="url(#colorActiveListings)" 
            strokeWidth={2}
          />
          <defs>
            <linearGradient id="colorActiveListings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>

      {/* Active Listings Insights */}
      {filteredData.length > 0 && (
        <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-sm text-green-600 font-medium">Total Active</div>
            <div className="text-lg font-bold text-green-800">
              {filteredData.reduce((sum, item) => sum + item.activeListings, 0).toLocaleString()}
            </div>
          </div>
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm text-blue-600 font-medium">Average Monthly</div>
            <div className="text-lg font-bold text-blue-800">
              {Math.round(filteredData.reduce((sum, item) => sum + item.activeListings, 0) / filteredData.length).toLocaleString()}
            </div>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <div className="text-sm text-purple-600 font-medium">Peak Month</div>
            <div className="text-lg font-bold text-purple-800">
              {Math.max(...filteredData.map(item => item.activeListings)).toLocaleString()}
            </div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-sm text-orange-600 font-medium">Growth Rate</div>
            <div className="text-lg font-bold text-orange-800">
              {(() => {
                if (filteredData.length < 2) return 'N/A';
                const first = filteredData[0].activeListings;
                const last = filteredData[filteredData.length - 1].activeListings;
                const growth = ((last - first) / first * 100);
                return `${growth > 0 ? '+' : ''}${Math.round(growth)}%`;
              })()}
            </div>
          </div>
        </div>
      )}

      {/* Growth Analysis */}
      {filteredData.length > 0 && (
        <div className="mt-4 p-4 bg-slate-50 rounded-lg">
          <h4 className="text-sm font-semibold text-slate-700 mb-2">Growth Analysis</h4>
          <div className="text-xs text-slate-600 space-y-1">
            {(() => {
              const totalListings = filteredData.reduce((sum, item) => sum + item.activeListings, 0);
              const avgMonthly = Math.round(totalListings / filteredData.length);
              const peakMonth = Math.max(...filteredData.map(item => item.activeListings));
              const recentData = filteredData.slice(-3);
              const recentAvg = Math.round(recentData.reduce((sum, item) => sum + item.activeListings, 0) / recentData.length);
              const overallAvg = Math.round(filteredData.reduce((sum, item) => sum + item.activeListings, 0) / filteredData.length);
              
              const growthTrend = recentAvg > overallAvg ? 'accelerating' : 'decelerating';
              const isGrowing = recentAvg > overallAvg;
              
              return (
                <>
                  <p>• Total active listings: {totalListings.toLocaleString()}</p>
                  <p>• Average monthly listings: {avgMonthly.toLocaleString()}</p>
                  <p>• Peak month: {peakMonth.toLocaleString()} listings</p>
                  <p>• Recent trend: Growth is {growthTrend}</p>
                  {isGrowing && <p>• Strong growth: Recent months above average</p>}
                  {!isGrowing && <p>• Stabilizing: Recent months at or below average</p>}
                  {peakMonth > 1000 && <p>• High volume: Peak month exceeded 1,000 listings</p>}
                </>
              );
            })()}
          </div>
        </div>
      )}
    </div>
  )
}

export default ActiveListing
