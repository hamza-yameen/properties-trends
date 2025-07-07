import {useEffect, useState} from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import Navbar from "@/components/containers/Navbar";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState<string>("Houston");
  const [medianSalesChartData, setMedianSalesChartData] = useState<any>(null);
  const [salesVolumeChartData, setSalesVolumeChartData] = useState<any>(null);
  const [historicalTrendData, setHistoricalTrendData] = useState<any>(null);
  const [domTrendData, setDomTrendData] = useState<any>(null);
  const [activeListingData, setActiveListingData] = useState<any>(null);
  const [weeklyPendingData, setWeeklyPendingData] = useState<any>(null);
  const [weeklyPriceReductionData, setWeeklyPriceReductionData] = useState<any>(null);
  const [rentByCityData, setRentByCityData] = useState<any>(null);
  const [beroMetricData, setBeroMetricData] = useState<any>(null);
  const [salesListRatioData, setSalesListRatioData] = useState<any>(null);

  useEffect(() => {
    getBeroMetricDataHandler();
  }, []);

  const getBeroMetricDataHandler = async () => {
    const data = {
      "matched_by": "city",
      "ActiveListings": 6389,
      "NewListings": 7113,
      "PendingSales": 582,
      "ClosedSales": 142,
      "BarometerIndex": 0.05
    }

    setBeroMetricData(data)
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Housing Market
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Visualization
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore the housing market with interactive charts and data visualizations
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
