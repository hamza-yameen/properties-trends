import {useEffect, useState} from 'react'
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
// import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';
// import { Link, useFetcher } from 'react-router-dom';
import Navbar from "@/components/containers/Navbar";
// import { getMedianSales } from '@/services/apiServices';
import MedianSalesChart from '@/components/charts/MedianSalesChart';
import SalesVolume from '@/components/charts/SalesVolume';
import HistoricalTrend from '@/components/charts/HistoricalTrend';
import DomTrend from '@/components/charts/DomTrend';
import ActiveListing from '@/components/charts/ActiveListing';
import WeeklyPending from '@/components/charts/WeeklyPending';
import WeeklyPriceReduction from '@/components/charts/WeeklyPriceReduction';
import RentByCity from '@/components/charts/RentByCity';
import BeroMetric from '@/components/charts/BeroMetric';
import SalesListRatio from '@/components/charts/SalesListRatio';

// const salesData = [
//   { month: 'Jan', sales: 4000, revenue: 2400 },
//   { month: 'Feb', sales: 3000, revenue: 1398 },
//   { month: 'Mar', sales: 2000, revenue: 9800 },
//   { month: 'Apr', sales: 2780, revenue: 3908 },
//   { month: 'May', sales: 1890, revenue: 4800 },
//   { month: 'Jun', sales: 2390, revenue: 3800 },
// ];

// const userGrowthData = [
//   { month: 'Jan', users: 1200 },
//   { month: 'Feb', users: 1900 },
//   { month: 'Mar', users: 2800 },
//   { month: 'Apr', users: 3200 },
//   { month: 'May', users: 4100 },
//   { month: 'Jun', users: 5200 },
// ];

// const pieData = [
//   { name: 'Desktop', value: 60, color: '#8884d8' },
//   { name: 'Mobile', value: 30, color: '#82ca9d' },
//   { name: 'Tablet', value: 10, color: '#ffc658' },
// ];

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
    getMedianSalesDataHandler();
    getSalesVolumeDataHandler();
    getHistoricalTrendDataHandler();
    getDomTrendDataHandler();
    getActiveListingDataHandler();
    getWeeklyPendingDataHandler();
    getWeeklyPriceReductionDataHandler();
    getRentByCityDataHandler();
    getSalesListRatioDataHandler();
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

  const getMedianSalesDataHandler = async () => {
    // const response = await getMedianSales(selectedCity);
    // console.log(response);
    const data = {
      "1": { "2020": 270000, "2021": 275000, "2022": 303000, "2023": 300000, "2024": 306000, "2025": 310000 },
      "2": { "2020": 279995, "2021": 275000, "2022": 307500, "2023": 299800, "2024": 302250, "2025": 315225 },
      "3": { "2020": 260000, "2021": 294245, "2022": 320000, "2023": 315000, "2024": 325000, "2025": 325000 },
      "4": { "2020": 278000, "2021": 300000, "2022": 323500, "2023": 310000, "2024": 319900, "2025": 335000 },
      "5": { "2020": 280000, "2021": 289000, "2022": 312000, "2023": 315000, "2024": 320000, "2025": 335000 },
      "6": { "2020": 263000, "2021": 285000, "2022": 310000, "2023": 310000, "2024": 315000, "2025": 647500 },
      "7": { "2020": 255000, "2021": 280000, "2022": 298000, "2023": 300000, "2024": 305000, "2025": null },
      "8": { "2020": 250000, "2021": 280000, "2022": 285000, "2023": 300000, "2024": 314900, "2025": null },
      "9": { "2020": 261109, "2021": 285000, "2022": 295000, "2023": 295000, "2024": 305650, "2025": null },
      "10": { "2020": 258000, "2021": 284850, "2022": 289900, "2023": 300000, "2024": 310000, "2025": null },
      "11": { "2020": 250000, "2021": 285000, "2022": 281000, "2023": 300000, "2024": 309990, "2025": null },
      "12": { "2020": 250000, "2021": 280000, "2022": 280000, "2023": 293450, "2024": 296500, "2025": null }
    }
    setMedianSalesChartData(data)
  }

  const getSalesVolumeDataHandler = async () => {
    // const response = await getSalesVolume(selectedCity);
    // console.log(response);
    const data = [
      {
        "year": 2020,
        "month": 6,
        "salesvolume": 508
      },
      {
        "year": 2020,
        "month": 7,
        "salesvolume": 3356
      },
      {
        "year": 2020,
        "month": 8,
        "salesvolume": 4601
      },
      {
        "year": 2020,
        "month": 9,
        "salesvolume": 4583
      },
      {
        "year": 2020,
        "month": 10,
        "salesvolume": 4735
      },
      {
        "year": 2020,
        "month": 11,
        "salesvolume": 4179
      },
      {
        "year": 2020,
        "month": 12,
        "salesvolume": 4858
      },
      {
        "year": 2021,
        "month": 1,
        "salesvolume": 3781
      },
      {
        "year": 2021,
        "month": 2,
        "salesvolume": 3581
      },
      {
        "year": 2021,
        "month": 3,
        "salesvolume": 5224
      },
      {
        "year": 2021,
        "month": 4,
        "salesvolume": 5209
      },
      {
        "year": 2021,
        "month": 5,
        "salesvolume": 5397
      },
      {
        "year": 2021,
        "month": 6,
        "salesvolume": 5882
      },
      {
        "year": 2021,
        "month": 7,
        "salesvolume": 5543
      },
      {
        "year": 2021,
        "month": 8,
        "salesvolume": 5424
      },
      {
        "year": 2021,
        "month": 9,
        "salesvolume": 4887
      },
      {
        "year": 2021,
        "month": 10,
        "salesvolume": 4727
      },
      {
        "year": 2021,
        "month": 11,
        "salesvolume": 4561
      },
      {
        "year": 2021,
        "month": 12,
        "salesvolume": 4839
      },
      {
        "year": 2022,
        "month": 1,
        "salesvolume": 4003
      },
      {
        "year": 2022,
        "month": 2,
        "salesvolume": 4322
      },
      {
        "year": 2022,
        "month": 3,
        "salesvolume": 5636
      },
      {
        "year": 2022,
        "month": 4,
        "salesvolume": 5177
      },
      {
        "year": 2022,
        "month": 5,
        "salesvolume": 5506
      },
      {
        "year": 2022,
        "month": 6,
        "salesvolume": 5404
      },
      {
        "year": 2022,
        "month": 7,
        "salesvolume": 4833
      },
      {
        "year": 2022,
        "month": 8,
        "salesvolume": 4919
      },
      {
        "year": 2022,
        "month": 9,
        "salesvolume": 4550
      },
      {
        "year": 2022,
        "month": 10,
        "salesvolume": 4127
      },
      {
        "year": 2022,
        "month": 11,
        "salesvolume": 3543
      },
      {
        "year": 2022,
        "month": 12,
        "salesvolume": 3689
      },
      {
        "year": 2023,
        "month": 1,
        "salesvolume": 3182
      },
      {
        "year": 2023,
        "month": 2,
        "salesvolume": 3691
      },
      {
        "year": 2023,
        "month": 3,
        "salesvolume": 4683
      },
      {
        "year": 2023,
        "month": 4,
        "salesvolume": 4400
      },
      {
        "year": 2023,
        "month": 5,
        "salesvolume": 5168
      },
      {
        "year": 2023,
        "month": 6,
        "salesvolume": 5229
      },
      {
        "year": 2023,
        "month": 7,
        "salesvolume": 4859
      },
      {
        "year": 2023,
        "month": 8,
        "salesvolume": 4967
      },
      {
        "year": 2023,
        "month": 9,
        "salesvolume": 4318
      },
      {
        "year": 2023,
        "month": 10,
        "salesvolume": 3902
      },
      {
        "year": 2023,
        "month": 11,
        "salesvolume": 3724
      },
      {
        "year": 2023,
        "month": 12,
        "salesvolume": 3717
      },
      {
        "year": 2024,
        "month": 1,
        "salesvolume": 3360
      },
      {
        "year": 2024,
        "month": 2,
        "salesvolume": 3927
      },
      {
        "year": 2024,
        "month": 3,
        "salesvolume": 4530
      },
      {
        "year": 2024,
        "month": 4,
        "salesvolume": 4844
      },
      {
        "year": 2024,
        "month": 5,
        "salesvolume": 5089
      },
      {
        "year": 2024,
        "month": 6,
        "salesvolume": 4645
      },
      {
        "year": 2024,
        "month": 7,
        "salesvolume": 4645
      },
      {
        "year": 2024,
        "month": 8,
        "salesvolume": 4795
      },
      {
        "year": 2024,
        "month": 9,
        "salesvolume": 4033
      },
      {
        "year": 2024,
        "month": 10,
        "salesvolume": 4226
      },
      {
        "year": 2024,
        "month": 11,
        "salesvolume": 3704
      },
      {
        "year": 2024,
        "month": 12,
        "salesvolume": 3817
      },
      {
        "year": 2025,
        "month": 1,
        "salesvolume": 3485
      },
      {
        "year": 2025,
        "month": 2,
        "salesvolume": 3777
      },
      {
        "year": 2025,
        "month": 3,
        "salesvolume": 4413
      },
      {
        "year": 2025,
        "month": 4,
        "salesvolume": 4559
      },
      {
        "year": 2025,
        "month": 5,
        "salesvolume": 5035
      },
      {
        "year": 2025,
        "month": 6,
        "salesvolume": 2117
      }
    ]
    setSalesVolumeChartData(data)
  }

  const getHistoricalTrendDataHandler = async () => {
    const data = [
      {
        "month": "2020-05-31",
        "year": 2020,
        "month_num": 6,
        "sales_volume": 762,
        "avg_price": 31927.69,
        "median_price": 1600,
        "avg_ppsf": 13.84,
        "avg_dom": 41.9
      },
      {
        "month": "2020-06-30",
        "year": 2020,
        "month_num": 7,
        "sales_volume": 3596,
        "avg_price": 154099.71,
        "median_price": 2799.5,
        "avg_ppsf": 66.62,
        "avg_dom": 41.2
      },
      {
        "month": "2020-07-31",
        "year": 2020,
        "month_num": 8,
        "sales_volume": 4470,
        "avg_price": 201253.48,
        "median_price": 153000,
        "avg_ppsf": 88.13,
        "avg_dom": 39.1
      },
      {
        "month": "2020-08-31",
        "year": 2020,
        "month_num": 9,
        "sales_volume": 4370,
        "avg_price": 212058.35,
        "median_price": 167000,
        "avg_ppsf": 93.06,
        "avg_dom": 40.5
      },
      {
        "month": "2020-09-30",
        "year": 2020,
        "month_num": 10,
        "sales_volume": 4568,
        "avg_price": 222523.89,
        "median_price": 175500,
        "avg_ppsf": 98.23,
        "avg_dom": 40.6
      },
      {
        "month": "2020-10-31",
        "year": 2020,
        "month_num": 11,
        "sales_volume": 4000,
        "avg_price": 229678.07,
        "median_price": 180000,
        "avg_ppsf": 98.75,
        "avg_dom": 40.4
      },
      {
        "month": "2020-11-30",
        "year": 2020,
        "month_num": 12,
        "sales_volume": 4657,
        "avg_price": 255389.09,
        "median_price": 194000,
        "avg_ppsf": 108.91,
        "avg_dom": 42.2
      },
      {
        "month": "2020-12-31",
        "year": 2021,
        "month_num": 1,
        "sales_volume": 3626,
        "avg_price": 188579.32,
        "median_price": 140000,
        "avg_ppsf": 84.63,
        "avg_dom": 42.9
      },
      {
        "month": "2021-01-31",
        "year": 2021,
        "month_num": 2,
        "sales_volume": 3437,
        "avg_price": 214704.28,
        "median_price": 159900,
        "avg_ppsf": 92.95,
        "avg_dom": 42.8
      },
      {
        "month": "2021-02-28",
        "year": 2021,
        "month_num": 3,
        "sales_volume": 5034,
        "avg_price": 256660.64,
        "median_price": 190000,
        "avg_ppsf": 106.75,
        "avg_dom": 43.6
      },
      {
        "month": "2021-03-31",
        "year": 2021,
        "month_num": 4,
        "sales_volume": 4991,
        "avg_price": 256083.57,
        "median_price": 200000,
        "avg_ppsf": 111.06,
        "avg_dom": 39.7
      },
      {
        "month": "2021-04-30",
        "year": 2021,
        "month_num": 5,
        "sales_volume": 5207,
        "avg_price": 262361.97,
        "median_price": 204100,
        "avg_ppsf": 112.39,
        "avg_dom": 34.9
      },
      {
        "month": "2021-05-31",
        "year": 2021,
        "month_num": 6,
        "sales_volume": 5651,
        "avg_price": 269271.34,
        "median_price": 210000,
        "avg_ppsf": 115.01,
        "avg_dom": 30.8
      },
      {
        "month": "2021-06-30",
        "year": 2021,
        "month_num": 7,
        "sales_volume": 5347,
        "avg_price": 251722.25,
        "median_price": 199900,
        "avg_ppsf": 109.05,
        "avg_dom": 28
      },
      {
        "month": "2021-07-31",
        "year": 2021,
        "month_num": 8,
        "sales_volume": 5234,
        "avg_price": 243114.14,
        "median_price": 197050,
        "avg_ppsf": 107.62,
        "avg_dom": 28
      },
      {
        "month": "2021-08-31",
        "year": 2021,
        "month_num": 9,
        "sales_volume": 4429,
        "avg_price": 251460.23,
        "median_price": 210000,
        "avg_ppsf": 111.21,
        "avg_dom": 29.3
      },
      {
        "month": "2021-09-30",
        "year": 2021,
        "month_num": 10,
        "sales_volume": 4540,
        "avg_price": 252651.35,
        "median_price": 210000,
        "avg_ppsf": 111.7,
        "avg_dom": 30.8
      },
      {
        "month": "2021-10-31",
        "year": 2021,
        "month_num": 11,
        "sales_volume": 4713,
        "avg_price": 262860.48,
        "median_price": 220000,
        "avg_ppsf": 116.55,
        "avg_dom": 32.9
      },
      {
        "month": "2021-11-30",
        "year": 2021,
        "month_num": 12,
        "sales_volume": 4651,
        "avg_price": 284450.92,
        "median_price": 230490,
        "avg_ppsf": 125.05,
        "avg_dom": 34.8
      },
      {
        "month": "2021-12-31",
        "year": 2022,
        "month_num": 1,
        "sales_volume": 3836,
        "avg_price": 228075.65,
        "median_price": 189000,
        "avg_ppsf": 102.28,
        "avg_dom": 35.9
      },
      {
        "month": "2022-01-31",
        "year": 2022,
        "month_num": 2,
        "sales_volume": 4141,
        "avg_price": 251960.8,
        "median_price": 215000,
        "avg_ppsf": 114.58,
        "avg_dom": 36.7
      },
      {
        "month": "2022-02-28",
        "year": 2022,
        "month_num": 3,
        "sales_volume": 5406,
        "avg_price": 265111.79,
        "median_price": 219900,
        "avg_ppsf": 117.83,
        "avg_dom": 34.1
      },
      {
        "month": "2022-03-31",
        "year": 2022,
        "month_num": 4,
        "sales_volume": 4962,
        "avg_price": 282296.35,
        "median_price": 232500,
        "avg_ppsf": 124.68,
        "avg_dom": 29.3
      },
      {
        "month": "2022-04-30",
        "year": 2022,
        "month_num": 5,
        "sales_volume": 5323,
        "avg_price": 284012.66,
        "median_price": 230000,
        "avg_ppsf": 125.42,
        "avg_dom": 26.7
      },
      {
        "month": "2022-05-31",
        "year": 2022,
        "month_num": 6,
        "sales_volume": 5247,
        "avg_price": 273630.6,
        "median_price": 226500,
        "avg_ppsf": 121.26,
        "avg_dom": 26
      },
      {
        "month": "2022-06-30",
        "year": 2022,
        "month_num": 7,
        "sales_volume": 4675,
        "avg_price": 243862.65,
        "median_price": 190000,
        "avg_ppsf": 108.61,
        "avg_dom": 23.5
      },
      {
        "month": "2022-07-31",
        "year": 2022,
        "month_num": 8,
        "sales_volume": 4752,
        "avg_price": 222942.49,
        "median_price": 169000,
        "avg_ppsf": 103.33,
        "avg_dom": 26.2
      },
      {
        "month": "2022-08-31",
        "year": 2022,
        "month_num": 9,
        "sales_volume": 4391,
        "avg_price": 228691.62,
        "median_price": 182000,
        "avg_ppsf": 104.47,
        "avg_dom": 30.4
      },
      {
        "month": "2022-09-30",
        "year": 2022,
        "month_num": 10,
        "sales_volume": 3981,
        "avg_price": 232222.07,
        "median_price": 175900,
        "avg_ppsf": 104.46,
        "avg_dom": 32.5
      },
      {
        "month": "2022-10-31",
        "year": 2022,
        "month_num": 11,
        "sales_volume": 3431,
        "avg_price": 220655.81,
        "median_price": 140000,
        "avg_ppsf": 98.94,
        "avg_dom": 34
      },
      {
        "month": "2022-11-30",
        "year": 2022,
        "month_num": 12,
        "sales_volume": 3583,
        "avg_price": 224220.5,
        "median_price": 134200,
        "avg_ppsf": 98.91,
        "avg_dom": 39.9
      },
      {
        "month": "2022-12-31",
        "year": 2023,
        "month_num": 1,
        "sales_volume": 3078,
        "avg_price": 175538.65,
        "median_price": 3285,
        "avg_ppsf": 80.59,
        "avg_dom": 46.6
      },
      {
        "month": "2023-01-31",
        "year": 2023,
        "month_num": 2,
        "sales_volume": 3558,
        "avg_price": 201573.89,
        "median_price": 97000,
        "avg_ppsf": 92.48,
        "avg_dom": 44.5
      },
      {
        "month": "2023-02-28",
        "year": 2023,
        "month_num": 3,
        "sales_volume": 4511,
        "avg_price": 241083.89,
        "median_price": 150000,
        "avg_ppsf": 103.67,
        "avg_dom": 41.3
      },
      {
        "month": "2023-03-31",
        "year": 2023,
        "month_num": 4,
        "sales_volume": 4224,
        "avg_price": 241695.79,
        "median_price": 150000,
        "avg_ppsf": 106.49,
        "avg_dom": 39.4
      },
      {
        "month": "2023-04-30",
        "year": 2023,
        "month_num": 5,
        "sales_volume": 4978,
        "avg_price": 248110.56,
        "median_price": 163000,
        "avg_ppsf": 107.35,
        "avg_dom": 34.8
      },
      {
        "month": "2023-05-31",
        "year": 2023,
        "month_num": 6,
        "sales_volume": 5017,
        "avg_price": 240111.21,
        "median_price": 137900,
        "avg_ppsf": 105.45,
        "avg_dom": 33.1
      },
      {
        "month": "2023-06-30",
        "year": 2023,
        "month_num": 7,
        "sales_volume": 4673,
        "avg_price": 215851.25,
        "median_price": 45000,
        "avg_ppsf": 96.25,
        "avg_dom": 30.2
      },
      {
        "month": "2023-07-31",
        "year": 2023,
        "month_num": 8,
        "sales_volume": 4774,
        "avg_price": 231849.7,
        "median_price": 143000,
        "avg_ppsf": 102.68,
        "avg_dom": 29.6
      },
      {
        "month": "2023-08-31",
        "year": 2023,
        "month_num": 9,
        "sales_volume": 4163,
        "avg_price": 224387.65,
        "median_price": 110833,
        "avg_ppsf": 99.68,
        "avg_dom": 33
      },
      {
        "month": "2023-09-30",
        "year": 2023,
        "month_num": 10,
        "sales_volume": 3732,
        "avg_price": 219862.15,
        "median_price": 115000,
        "avg_ppsf": 99.59,
        "avg_dom": 34.3
      },
      {
        "month": "2023-10-31",
        "year": 2023,
        "month_num": 11,
        "sales_volume": 3585,
        "avg_price": 218654.65,
        "median_price": 60000,
        "avg_ppsf": 96.44,
        "avg_dom": 37.2
      },
      {
        "month": "2023-11-30",
        "year": 2023,
        "month_num": 12,
        "sales_volume": 3546,
        "avg_price": 230176.61,
        "median_price": 139000,
        "avg_ppsf": 102.82,
        "avg_dom": 41.1
      },
      {
        "month": "2023-12-31",
        "year": 2024,
        "month_num": 1,
        "sales_volume": 3229,
        "avg_price": 189882.95,
        "median_price": 3500,
        "avg_ppsf": 86.23,
        "avg_dom": 43.2
      },
      {
        "month": "2024-01-31",
        "year": 2024,
        "month_num": 2,
        "sales_volume": 3763,
        "avg_price": 198795.65,
        "median_price": 3800,
        "avg_ppsf": 91.19,
        "avg_dom": 43.5
      },
      {
        "month": "2024-02-29",
        "year": 2024,
        "month_num": 3,
        "sales_volume": 4363,
        "avg_price": 232390.52,
        "median_price": 105000,
        "avg_ppsf": 101.99,
        "avg_dom": 40.3
      },
      {
        "month": "2024-03-31",
        "year": 2024,
        "month_num": 4,
        "sales_volume": 4676,
        "avg_price": 250700.82,
        "median_price": 150000,
        "avg_ppsf": 107.78,
        "avg_dom": 39.4
      },
      {
        "month": "2024-04-30",
        "year": 2024,
        "month_num": 5,
        "sales_volume": 4907,
        "avg_price": 244376.63,
        "median_price": 110000,
        "avg_ppsf": 106.27,
        "avg_dom": 38.3
      },
      {
        "month": "2024-05-31",
        "year": 2024,
        "month_num": 6,
        "sales_volume": 4494,
        "avg_price": 218709.3,
        "median_price": 5200,
        "avg_ppsf": 96.44,
        "avg_dom": 36.2
      },
      {
        "month": "2024-06-30",
        "year": 2024,
        "month_num": 7,
        "sales_volume": 4493,
        "avg_price": 224187.11,
        "median_price": 4500,
        "avg_ppsf": 95.51,
        "avg_dom": 37.6
      },
      {
        "month": "2024-07-31",
        "year": 2024,
        "month_num": 8,
        "sales_volume": 4616,
        "avg_price": 199522.17,
        "median_price": 3500,
        "avg_ppsf": 88.22,
        "avg_dom": 37.7
      },
      {
        "month": "2024-08-31",
        "year": 2024,
        "month_num": 9,
        "sales_volume": 3871,
        "avg_price": 220980.97,
        "median_price": 73000,
        "avg_ppsf": 99.28,
        "avg_dom": 40
      },
      {
        "month": "2024-09-30",
        "year": 2024,
        "month_num": 10,
        "sales_volume": 4052,
        "avg_price": 247431.18,
        "median_price": 150000,
        "avg_ppsf": 106.73,
        "avg_dom": 39.2
      },
      {
        "month": "2024-10-31",
        "year": 2024,
        "month_num": 11,
        "sales_volume": 3548,
        "avg_price": 237220.95,
        "median_price": 110000,
        "avg_ppsf": 101.34,
        "avg_dom": 40.6
      },
      {
        "month": "2024-11-30",
        "year": 2024,
        "month_num": 12,
        "sales_volume": 3648,
        "avg_price": 252893.66,
        "median_price": 150000,
        "avg_ppsf": 108.81,
        "avg_dom": 44.7
      },
      {
        "month": "2024-12-31",
        "year": 2025,
        "month_num": 1,
        "sales_volume": 3314,
        "avg_price": 196081.63,
        "median_price": 3500,
        "avg_ppsf": 90.39,
        "avg_dom": 50.6
      },
      {
        "month": "2025-01-31",
        "year": 2025,
        "month_num": 2,
        "sales_volume": 3610,
        "avg_price": 206565.94,
        "median_price": 3750,
        "avg_ppsf": 92.55,
        "avg_dom": 47.1
      },
      {
        "month": "2025-02-28",
        "year": 2025,
        "month_num": 3,
        "sales_volume": 4226,
        "avg_price": 234033.71,
        "median_price": 6900,
        "avg_ppsf": 100.08,
        "avg_dom": 46.9
      },
      {
        "month": "2025-03-31",
        "year": 2025,
        "month_num": 4,
        "sales_volume": 4388,
        "avg_price": 254834.44,
        "median_price": 101000,
        "avg_ppsf": 104.35,
        "avg_dom": 43.2
      },
      {
        "month": "2025-04-30",
        "year": 2025,
        "month_num": 5,
        "sales_volume": 4863,
        "avg_price": 243231.15,
        "median_price": 110000,
        "avg_ppsf": 103.51,
        "avg_dom": 40.2
      },
      {
        "month": "2025-05-31",
        "year": 2025,
        "month_num": 6,
        "sales_volume": 1675,
        "avg_price": 215114.12,
        "median_price": 3000,
        "avg_ppsf": 90.56,
        "avg_dom": 38.2
      }
    ]
    setHistoricalTrendData(data)
  }

  const getDomTrendDataHandler = async () => {
    const data = [
      {
        "year": 2020,
        "month": 1,
        "mediandom": 191.5,
        "listings": 328
      },
      {
        "year": 2020,
        "month": 2,
        "mediandom": 153,
        "listings": 396
      },
      {
        "year": 2020,
        "month": 3,
        "mediandom": 131,
        "listings": 617
      },
      {
        "year": 2020,
        "month": 4,
        "mediandom": 87,
        "listings": 651
      },
      {
        "year": 2020,
        "month": 5,
        "mediandom": 64.5,
        "listings": 1178
      },
      {
        "year": 2020,
        "month": 6,
        "mediandom": 26,
        "listings": 2434
      },
      {
        "year": 2020,
        "month": 7,
        "mediandom": 17,
        "listings": 3067
      },
      {
        "year": 2020,
        "month": 8,
        "mediandom": 20,
        "listings": 2892
      },
      {
        "year": 2020,
        "month": 9,
        "mediandom": 19,
        "listings": 2733
      },
      {
        "year": 2020,
        "month": 10,
        "mediandom": 20,
        "listings": 3008
      },
      {
        "year": 2020,
        "month": 11,
        "mediandom": 21,
        "listings": 2440
      },
      {
        "year": 2020,
        "month": 12,
        "mediandom": 21,
        "listings": 2071
      },
      {
        "year": 2021,
        "month": 1,
        "mediandom": 17.5,
        "listings": 2968
      },
      {
        "year": 2021,
        "month": 2,
        "mediandom": 15,
        "listings": 2280
      },
      {
        "year": 2021,
        "month": 3,
        "mediandom": 12,
        "listings": 3281
      },
      {
        "year": 2021,
        "month": 4,
        "mediandom": 10,
        "listings": 3479
      },
      {
        "year": 2021,
        "month": 5,
        "mediandom": 10,
        "listings": 3309
      },
      {
        "year": 2021,
        "month": 6,
        "mediandom": 13,
        "listings": 3566
      },
      {
        "year": 2021,
        "month": 7,
        "mediandom": 15,
        "listings": 3650
      },
      {
        "year": 2021,
        "month": 8,
        "mediandom": 18,
        "listings": 3317
      },
      {
        "year": 2021,
        "month": 9,
        "mediandom": 17,
        "listings": 3108
      },
      {
        "year": 2021,
        "month": 10,
        "mediandom": 16,
        "listings": 3035
      },
      {
        "year": 2021,
        "month": 11,
        "mediandom": 16,
        "listings": 2566
      },
      {
        "year": 2021,
        "month": 12,
        "mediandom": 16,
        "listings": 2148
      },
      {
        "year": 2022,
        "month": 1,
        "mediandom": 11,
        "listings": 2919
      },
      {
        "year": 2022,
        "month": 2,
        "mediandom": 10,
        "listings": 2796
      },
      {
        "year": 2022,
        "month": 3,
        "mediandom": 8,
        "listings": 3207
      },
      {
        "year": 2022,
        "month": 4,
        "mediandom": 8,
        "listings": 3190
      },
      {
        "year": 2022,
        "month": 5,
        "mediandom": 9,
        "listings": 2961
      },
      {
        "year": 2022,
        "month": 6,
        "mediandom": 14,
        "listings": 3074
      },
      {
        "year": 2022,
        "month": 7,
        "mediandom": 19,
        "listings": 2849
      },
      {
        "year": 2022,
        "month": 8,
        "mediandom": 19,
        "listings": 2444
      },
      {
        "year": 2022,
        "month": 9,
        "mediandom": 20,
        "listings": 2347
      },
      {
        "year": 2022,
        "month": 10,
        "mediandom": 26,
        "listings": 2026
      },
      {
        "year": 2022,
        "month": 11,
        "mediandom": 30,
        "listings": 1747
      },
      {
        "year": 2022,
        "month": 12,
        "mediandom": 31,
        "listings": 1403
      },
      {
        "year": 2023,
        "month": 1,
        "mediandom": 24,
        "listings": 2165
      },
      {
        "year": 2023,
        "month": 2,
        "mediandom": 18,
        "listings": 1975
      },
      {
        "year": 2023,
        "month": 3,
        "mediandom": 15,
        "listings": 2749
      },
      {
        "year": 2023,
        "month": 4,
        "mediandom": 13,
        "listings": 2488
      },
      {
        "year": 2023,
        "month": 5,
        "mediandom": 14,
        "listings": 2593
      },
      {
        "year": 2023,
        "month": 6,
        "mediandom": 15,
        "listings": 2563
      },
      {
        "year": 2023,
        "month": 7,
        "mediandom": 17,
        "listings": 2456
      },
      {
        "year": 2023,
        "month": 8,
        "mediandom": 20,
        "listings": 2295
      },
      {
        "year": 2023,
        "month": 9,
        "mediandom": 22,
        "listings": 2012
      },
      {
        "year": 2023,
        "month": 10,
        "mediandom": 27,
        "listings": 1996
      },
      {
        "year": 2023,
        "month": 11,
        "mediandom": 31,
        "listings": 1818
      },
      {
        "year": 2023,
        "month": 12,
        "mediandom": 31,
        "listings": 1429
      },
      {
        "year": 2024,
        "month": 1,
        "mediandom": 25,
        "listings": 2147
      },
      {
        "year": 2024,
        "month": 2,
        "mediandom": 20,
        "listings": 2289
      },
      {
        "year": 2024,
        "month": 3,
        "mediandom": 18,
        "listings": 2432
      },
      {
        "year": 2024,
        "month": 4,
        "mediandom": 18,
        "listings": 2461
      },
      {
        "year": 2024,
        "month": 5,
        "mediandom": 20,
        "listings": 2462
      },
      {
        "year": 2024,
        "month": 6,
        "mediandom": 25,
        "listings": 2249
      },
      {
        "year": 2024,
        "month": 7,
        "mediandom": 28,
        "listings": 1851
      },
      {
        "year": 2024,
        "month": 8,
        "mediandom": 25,
        "listings": 2343
      },
      {
        "year": 2024,
        "month": 9,
        "mediandom": 25,
        "listings": 2047
      },
      {
        "year": 2024,
        "month": 10,
        "mediandom": 27,
        "listings": 2124
      },
      {
        "year": 2024,
        "month": 11,
        "mediandom": 30,
        "listings": 1616
      },
      {
        "year": 2024,
        "month": 12,
        "mediandom": 33,
        "listings": 1328
      },
      {
        "year": 2025,
        "month": 1,
        "mediandom": 25,
        "listings": 1809
      },
      {
        "year": 2025,
        "month": 2,
        "mediandom": 19,
        "listings": 1719
      },
      {
        "year": 2025,
        "month": 3,
        "mediandom": 14,
        "listings": 1877
      },
      {
        "year": 2025,
        "month": 4,
        "mediandom": 9,
        "listings": 1242
      },
      {
        "year": 2025,
        "month": 5,
        "mediandom": 6,
        "listings": 319
      }
    ]

    setDomTrendData(data)
  }

  const getActiveListingDataHandler = async () => {
    const data = [
      {
        "Year": 2019,
        "Month": 7,
        "ActiveListings": 1
      },
      {
        "Year": 2019,
        "Month": 8,
        "ActiveListings": 2
      },
      {
        "Year": 2020,
        "Month": 5,
        "ActiveListings": 1
      },
      {
        "Year": 2020,
        "Month": 8,
        "ActiveListings": 2
      },
      {
        "Year": 2021,
        "Month": 5,
        "ActiveListings": 2
      },
      {
        "Year": 2021,
        "Month": 6,
        "ActiveListings": 1
      },
      {
        "Year": 2021,
        "Month": 7,
        "ActiveListings": 2
      },
      {
        "Year": 2021,
        "Month": 8,
        "ActiveListings": 2
      },
      {
        "Year": 2021,
        "Month": 9,
        "ActiveListings": 3
      },
      {
        "Year": 2021,
        "Month": 10,
        "ActiveListings": 1
      },
      {
        "Year": 2021,
        "Month": 11,
        "ActiveListings": 1
      },
      {
        "Year": 2022,
        "Month": 2,
        "ActiveListings": 3
      },
      {
        "Year": 2022,
        "Month": 3,
        "ActiveListings": 2
      },
      {
        "Year": 2022,
        "Month": 4,
        "ActiveListings": 1
      },
      {
        "Year": 2022,
        "Month": 5,
        "ActiveListings": 4
      },
      {
        "Year": 2022,
        "Month": 6,
        "ActiveListings": 6
      },
      {
        "Year": 2022,
        "Month": 7,
        "ActiveListings": 3
      },
      {
        "Year": 2022,
        "Month": 8,
        "ActiveListings": 4
      },
      {
        "Year": 2022,
        "Month": 9,
        "ActiveListings": 2
      },
      {
        "Year": 2022,
        "Month": 10,
        "ActiveListings": 2
      },
      {
        "Year": 2022,
        "Month": 11,
        "ActiveListings": 2
      },
      {
        "Year": 2022,
        "Month": 12,
        "ActiveListings": 1
      },
      {
        "Year": 2023,
        "Month": 1,
        "ActiveListings": 6
      },
      {
        "Year": 2023,
        "Month": 2,
        "ActiveListings": 6
      },
      {
        "Year": 2023,
        "Month": 3,
        "ActiveListings": 15
      },
      {
        "Year": 2023,
        "Month": 4,
        "ActiveListings": 8
      },
      {
        "Year": 2023,
        "Month": 5,
        "ActiveListings": 17
      },
      {
        "Year": 2023,
        "Month": 6,
        "ActiveListings": 16
      },
      {
        "Year": 2023,
        "Month": 7,
        "ActiveListings": 28
      },
      {
        "Year": 2023,
        "Month": 8,
        "ActiveListings": 7
      },
      {
        "Year": 2023,
        "Month": 9,
        "ActiveListings": 12
      },
      {
        "Year": 2023,
        "Month": 10,
        "ActiveListings": 25
      },
      {
        "Year": 2023,
        "Month": 11,
        "ActiveListings": 13
      },
      {
        "Year": 2023,
        "Month": 12,
        "ActiveListings": 17
      },
      {
        "Year": 2024,
        "Month": 1,
        "ActiveListings": 46
      },
      {
        "Year": 2024,
        "Month": 2,
        "ActiveListings": 35
      },
      {
        "Year": 2024,
        "Month": 3,
        "ActiveListings": 28
      },
      {
        "Year": 2024,
        "Month": 4,
        "ActiveListings": 61
      },
      {
        "Year": 2024,
        "Month": 5,
        "ActiveListings": 74
      },
      {
        "Year": 2024,
        "Month": 6,
        "ActiveListings": 167
      },
      {
        "Year": 2024,
        "Month": 7,
        "ActiveListings": 117
      },
      {
        "Year": 2024,
        "Month": 8,
        "ActiveListings": 209
      },
      {
        "Year": 2024,
        "Month": 9,
        "ActiveListings": 357
      },
      {
        "Year": 2024,
        "Month": 10,
        "ActiveListings": 570
      },
      {
        "Year": 2024,
        "Month": 11,
        "ActiveListings": 317
      },
      {
        "Year": 2024,
        "Month": 12,
        "ActiveListings": 443
      },
      {
        "Year": 2025,
        "Month": 1,
        "ActiveListings": 977
      },
      {
        "Year": 2025,
        "Month": 2,
        "ActiveListings": 1218
      },
      {
        "Year": 2025,
        "Month": 3,
        "ActiveListings": 2154
      },
      {
        "Year": 2025,
        "Month": 4,
        "ActiveListings": 3609
      },
      {
        "Year": 2025,
        "Month": 5,
        "ActiveListings": 6646
      },
      {
        "Year": 2025,
        "Month": 6,
        "ActiveListings": 4166
      }
    ]

    setActiveListingData(data)
  }

  const getWeeklyPendingDataHandler = async () => {
    const data = {
      "latest_week": 25,
      "data": {
        "13": {
          "2020": 0,
          "2021": 1162,
          "2022": 1368,
          "2023": 1195,
          "2024": 1123,
          "2025": 1220
        },
        "14": {
          "2020": 0,
          "2021": 1222,
          "2022": 1244,
          "2023": 1062,
          "2024": 1131,
          "2025": 1131
        },
        "15": {
          "2020": 0,
          "2021": 1332,
          "2022": 1212,
          "2023": 1078,
          "2024": 1122,
          "2025": 1150
        },
        "16": {
          "2020": 0,
          "2021": 1380,
          "2022": 1164,
          "2023": 1223,
          "2024": 1180,
          "2025": 1098
        },
        "17": {
          "2020": 0,
          "2021": 1417,
          "2022": 1292,
          "2023": 1233,
          "2024": 1109,
          "2025": 1077
        },
        "18": {
          "2020": 0,
          "2021": 1264,
          "2022": 1192,
          "2023": 1212,
          "2024": 1065,
          "2025": 1245
        },
        "19": {
          "2020": 0,
          "2021": 1334,
          "2022": 1230,
          "2023": 1141,
          "2024": 1131,
          "2025": 1174
        },
        "20": {
          "2020": 0,
          "2021": 1349,
          "2022": 1250,
          "2023": 1181,
          "2024": 1076,
          "2025": 1143
        },
        "21": {
          "2020": 0,
          "2021": 1231,
          "2022": 1243,
          "2023": 1186,
          "2024": 1143,
          "2025": 1173
        },
        "22": {
          "2020": 0,
          "2021": 1201,
          "2022": 1034,
          "2023": 1036,
          "2024": 1021,
          "2025": 1153
        },
        "23": {
          "2020": 0,
          "2021": 1308,
          "2022": 1099,
          "2023": 1107,
          "2024": 1136,
          "2025": 1073
        },
        "24": {
          "2020": 0,
          "2021": 1262,
          "2022": 1147,
          "2023": 1112,
          "2024": 1139,
          "2025": 1007
        },
        "25": {
          "2020": 629,
          "2021": 1206,
          "2022": 1090,
          "2023": 1127,
          "2024": 1061,
          "2025": 2
        }
      }
    }

    setWeeklyPendingData(data)
  }

  const getWeeklyPriceReductionDataHandler = async () => {
    const data = {
      "latest_week": 25,
      "data": {
        "13": {
          "2021": 539,
          "2022": 510,
          "2023": 545,
          "2024": 504,
          "2025": 758
        },
        "14": {
          "2021": 574,
          "2022": 561,
          "2023": 489,
          "2024": 612,
          "2025": 801
        },
        "15": {
          "2021": 577,
          "2022": 477,
          "2023": 519,
          "2024": 559,
          "2025": 796
        },
        "16": {
          "2021": 533,
          "2022": 489,
          "2023": 513,
          "2024": 535,
          "2025": 781
        },
        "17": {
          "2021": 571,
          "2022": 453,
          "2023": 479,
          "2024": 537,
          "2025": 914
        },
        "18": {
          "2021": 571,
          "2022": 540,
          "2023": 570,
          "2024": 596,
          "2025": 1075
        },
        "19": {
          "2021": 558,
          "2022": 491,
          "2023": 456,
          "2024": 550,
          "2025": 1087
        },
        "20": {
          "2021": 509,
          "2022": 445,
          "2023": 497,
          "2024": 537,
          "2025": 1240
        },
        "21": {
          "2021": 455,
          "2022": 464,
          "2023": 498,
          "2024": 508,
          "2025": 1295
        },
        "22": {
          "2021": 586,
          "2022": 433,
          "2023": 440,
          "2024": 488,
          "2025": 1556
        },
        "23": {
          "2021": 589,
          "2022": 485,
          "2023": 520,
          "2024": 623,
          "2025": 1880
        },
        "24": {
          "2021": 516,
          "2022": 510,
          "2023": 520,
          "2024": 570,
          "2025": 2238
        },
        "25": {
          "2021": 548,
          "2022": 484,
          "2023": 525,
          "2024": 561,
          "2025": 9
        }
      }
    }

    setWeeklyPriceReductionData(data)
  }

  const getRentByCityDataHandler = async () => {
    const data = [
      {
        "Year": 2017,
        "Month": 10,
        "MedianRent": 800
      },
      {
        "Year": 2017,
        "Month": 11,
        "MedianRent": 1500
      },
      {
        "Year": 2018,
        "Month": 12,
        "MedianRent": 850
      },
      {
        "Year": 2019,
        "Month": 1,
        "MedianRent": 1350
      },
      {
        "Year": 2019,
        "Month": 4,
        "MedianRent": 1500
      },
      {
        "Year": 2019,
        "Month": 5,
        "MedianRent": 1700
      },
      {
        "Year": 2019,
        "Month": 6,
        "MedianRent": 1562.5
      },
      {
        "Year": 2019,
        "Month": 7,
        "MedianRent": 1525
      },
      {
        "Year": 2019,
        "Month": 8,
        "MedianRent": 1825
      },
      {
        "Year": 2019,
        "Month": 9,
        "MedianRent": 2025
      },
      {
        "Year": 2019,
        "Month": 10,
        "MedianRent": 1350
      },
      {
        "Year": 2019,
        "Month": 11,
        "MedianRent": 1250
      },
      {
        "Year": 2019,
        "Month": 12,
        "MedianRent": 1822.5
      },
      {
        "Year": 2020,
        "Month": 1,
        "MedianRent": 1662.5
      },
      {
        "Year": 2020,
        "Month": 2,
        "MedianRent": 1600
      },
      {
        "Year": 2020,
        "Month": 3,
        "MedianRent": 1495
      },
      {
        "Year": 2020,
        "Month": 4,
        "MedianRent": 1680
      },
      {
        "Year": 2020,
        "Month": 5,
        "MedianRent": 1600
      },
      {
        "Year": 2020,
        "Month": 6,
        "MedianRent": 1600
      },
      {
        "Year": 2020,
        "Month": 7,
        "MedianRent": 1625
      },
      {
        "Year": 2020,
        "Month": 8,
        "MedianRent": 1550
      },
      {
        "Year": 2020,
        "Month": 9,
        "MedianRent": 1550
      },
      {
        "Year": 2020,
        "Month": 10,
        "MedianRent": 1550
      },
      {
        "Year": 2020,
        "Month": 11,
        "MedianRent": 1525
      },
      {
        "Year": 2020,
        "Month": 12,
        "MedianRent": 1550
      },
      {
        "Year": 2021,
        "Month": 1,
        "MedianRent": 1595
      },
      {
        "Year": 2021,
        "Month": 2,
        "MedianRent": 1595
      },
      {
        "Year": 2021,
        "Month": 3,
        "MedianRent": 1600
      },
      {
        "Year": 2021,
        "Month": 4,
        "MedianRent": 1650
      },
      {
        "Year": 2021,
        "Month": 5,
        "MedianRent": 1700
      },
      {
        "Year": 2021,
        "Month": 6,
        "MedianRent": 1750
      },
      {
        "Year": 2021,
        "Month": 7,
        "MedianRent": 1747
      },
      {
        "Year": 2021,
        "Month": 8,
        "MedianRent": 1700
      },
      {
        "Year": 2021,
        "Month": 9,
        "MedianRent": 1700
      },
      {
        "Year": 2021,
        "Month": 10,
        "MedianRent": 1725
      },
      {
        "Year": 2021,
        "Month": 11,
        "MedianRent": 1700
      },
      {
        "Year": 2021,
        "Month": 12,
        "MedianRent": 1700
      },
      {
        "Year": 2022,
        "Month": 1,
        "MedianRent": 1720
      },
      {
        "Year": 2022,
        "Month": 2,
        "MedianRent": 1750
      },
      {
        "Year": 2022,
        "Month": 3,
        "MedianRent": 1800
      },
      {
        "Year": 2022,
        "Month": 4,
        "MedianRent": 1800
      },
      {
        "Year": 2022,
        "Month": 5,
        "MedianRent": 1845
      },
      {
        "Year": 2022,
        "Month": 6,
        "MedianRent": 1900
      },
      {
        "Year": 2022,
        "Month": 7,
        "MedianRent": 1850
      },
      {
        "Year": 2022,
        "Month": 8,
        "MedianRent": 1850
      },
      {
        "Year": 2022,
        "Month": 9,
        "MedianRent": 1850
      },
      {
        "Year": 2022,
        "Month": 10,
        "MedianRent": 1820
      },
      {
        "Year": 2022,
        "Month": 11,
        "MedianRent": 1800
      },
      {
        "Year": 2022,
        "Month": 12,
        "MedianRent": 1800
      },
      {
        "Year": 2023,
        "Month": 1,
        "MedianRent": 1800
      },
      {
        "Year": 2023,
        "Month": 2,
        "MedianRent": 1850
      },
      {
        "Year": 2023,
        "Month": 3,
        "MedianRent": 1875
      },
      {
        "Year": 2023,
        "Month": 4,
        "MedianRent": 1900
      },
      {
        "Year": 2023,
        "Month": 5,
        "MedianRent": 1950
      },
      {
        "Year": 2023,
        "Month": 6,
        "MedianRent": 1900
      },
      {
        "Year": 2023,
        "Month": 7,
        "MedianRent": 1950
      },
      {
        "Year": 2023,
        "Month": 8,
        "MedianRent": 1875
      },
      {
        "Year": 2023,
        "Month": 9,
        "MedianRent": 1895
      },
      {
        "Year": 2023,
        "Month": 10,
        "MedianRent": 1855
      },
      {
        "Year": 2023,
        "Month": 11,
        "MedianRent": 1850
      },
      {
        "Year": 2023,
        "Month": 12,
        "MedianRent": 1850
      },
      {
        "Year": 2024,
        "Month": 1,
        "MedianRent": 1895
      },
      {
        "Year": 2024,
        "Month": 2,
        "MedianRent": 1875
      },
      {
        "Year": 2024,
        "Month": 3,
        "MedianRent": 1900
      },
      {
        "Year": 2024,
        "Month": 4,
        "MedianRent": 1950
      },
      {
        "Year": 2024,
        "Month": 5,
        "MedianRent": 2000
      },
      {
        "Year": 2024,
        "Month": 6,
        "MedianRent": 1975
      },
      {
        "Year": 2024,
        "Month": 7,
        "MedianRent": 1950
      },
      {
        "Year": 2024,
        "Month": 8,
        "MedianRent": 1900
      },
      {
        "Year": 2024,
        "Month": 9,
        "MedianRent": 1850
      },
      {
        "Year": 2024,
        "Month": 10,
        "MedianRent": 1850
      },
      {
        "Year": 2024,
        "Month": 11,
        "MedianRent": 1880
      },
      {
        "Year": 2024,
        "Month": 12,
        "MedianRent": 1895
      },
      {
        "Year": 2025,
        "Month": 1,
        "MedianRent": 1900
      },
      {
        "Year": 2025,
        "Month": 2,
        "MedianRent": 1900
      },
      {
        "Year": 2025,
        "Month": 3,
        "MedianRent": 1900
      },
      {
        "Year": 2025,
        "Month": 4,
        "MedianRent": 2000
      },
      {
        "Year": 2025,
        "Month": 5,
        "MedianRent": 2000
      },
      {
        "Year": 2025,
        "Month": 6,
        "MedianRent": 1900
      }
    ]

    setRentByCityData(data)
  }

  const getSalesListRatioDataHandler = async () => {
    const data = [
      {
        "Year": 2020,
        "Month": 6,
        "SLPR": 96.15
      },
      {
        "Year": 2020,
        "Month": 7,
        "SLPR": 97.99
      },
      {
        "Year": 2020,
        "Month": 8,
        "SLPR": 98.12
      },
      {
        "Year": 2020,
        "Month": 9,
        "SLPR": 98.21
      },
      {
        "Year": 2020,
        "Month": 10,
        "SLPR": 98.29
      },
      {
        "Year": 2020,
        "Month": 11,
        "SLPR": 98.36
      },
      {
        "Year": 2020,
        "Month": 12,
        "SLPR": 98.21
      },
      {
        "Year": 2021,
        "Month": 1,
        "SLPR": 98.22
      },
      {
        "Year": 2021,
        "Month": 2,
        "SLPR": 98.32
      },
      {
        "Year": 2021,
        "Month": 3,
        "SLPR": 98.67
      },
      {
        "Year": 2021,
        "Month": 4,
        "SLPR": 99.29
      },
      {
        "Year": 2021,
        "Month": 5,
        "SLPR": 100
      },
      {
        "Year": 2021,
        "Month": 6,
        "SLPR": 100
      },
      {
        "Year": 2021,
        "Month": 7,
        "SLPR": 100
      },
      {
        "Year": 2021,
        "Month": 8,
        "SLPR": 99.82
      },
      {
        "Year": 2021,
        "Month": 9,
        "SLPR": 99.61
      },
      {
        "Year": 2021,
        "Month": 10,
        "SLPR": 99.32
      },
      {
        "Year": 2021,
        "Month": 11,
        "SLPR": 99.14
      },
      {
        "Year": 2021,
        "Month": 12,
        "SLPR": 99.04
      },
      {
        "Year": 2022,
        "Month": 1,
        "SLPR": 99.17
      },
      {
        "Year": 2022,
        "Month": 2,
        "SLPR": 99.8
      },
      {
        "Year": 2022,
        "Month": 3,
        "SLPR": 100
      },
      {
        "Year": 2022,
        "Month": 4,
        "SLPR": 100
      },
      {
        "Year": 2022,
        "Month": 5,
        "SLPR": 100
      },
      {
        "Year": 2022,
        "Month": 6,
        "SLPR": 100
      },
      {
        "Year": 2022,
        "Month": 7,
        "SLPR": 100
      },
      {
        "Year": 2022,
        "Month": 8,
        "SLPR": 99.61
      },
      {
        "Year": 2022,
        "Month": 9,
        "SLPR": 98.82
      },
      {
        "Year": 2022,
        "Month": 10,
        "SLPR": 98.66
      },
      {
        "Year": 2022,
        "Month": 11,
        "SLPR": 98.18
      },
      {
        "Year": 2022,
        "Month": 12,
        "SLPR": 97.93
      },
      {
        "Year": 2023,
        "Month": 1,
        "SLPR": 97.76
      },
      {
        "Year": 2023,
        "Month": 2,
        "SLPR": 98.21
      },
      {
        "Year": 2023,
        "Month": 3,
        "SLPR": 98.67
      },
      {
        "Year": 2023,
        "Month": 4,
        "SLPR": 99.09
      },
      {
        "Year": 2023,
        "Month": 5,
        "SLPR": 99.11
      },
      {
        "Year": 2023,
        "Month": 6,
        "SLPR": 98.92
      },
      {
        "Year": 2023,
        "Month": 7,
        "SLPR": 99.06
      },
      {
        "Year": 2023,
        "Month": 8,
        "SLPR": 98.74
      },
      {
        "Year": 2023,
        "Month": 9,
        "SLPR": 98.38
      },
      {
        "Year": 2023,
        "Month": 10,
        "SLPR": 98.36
      },
      {
        "Year": 2023,
        "Month": 11,
        "SLPR": 98.25
      },
      {
        "Year": 2023,
        "Month": 12,
        "SLPR": 98.23
      },
      {
        "Year": 2024,
        "Month": 1,
        "SLPR": 97.78
      },
      {
        "Year": 2024,
        "Month": 2,
        "SLPR": 98.12
      },
      {
        "Year": 2024,
        "Month": 3,
        "SLPR": 98.28
      },
      {
        "Year": 2024,
        "Month": 4,
        "SLPR": 98.71
      },
      {
        "Year": 2024,
        "Month": 5,
        "SLPR": 98.64
      },
      {
        "Year": 2024,
        "Month": 6,
        "SLPR": 98.46
      },
      {
        "Year": 2024,
        "Month": 7,
        "SLPR": 98.45
      },
      {
        "Year": 2024,
        "Month": 8,
        "SLPR": 98.36
      },
      {
        "Year": 2024,
        "Month": 9,
        "SLPR": 97.99
      },
      {
        "Year": 2024,
        "Month": 10,
        "SLPR": 98.22
      },
      {
        "Year": 2024,
        "Month": 11,
        "SLPR": 98.22
      },
      {
        "Year": 2024,
        "Month": 12,
        "SLPR": 97.96
      },
      {
        "Year": 2025,
        "Month": 1,
        "SLPR": 97.68
      },
      {
        "Year": 2025,
        "Month": 2,
        "SLPR": 98.04
      },
      {
        "Year": 2025,
        "Month": 3,
        "SLPR": 98.15
      },
      {
        "Year": 2025,
        "Month": 4,
        "SLPR": 98.36
      },
      {
        "Year": 2025,
        "Month": 5,
        "SLPR": 98.41
      },
      {
        "Year": 2025,
        "Month": 6,
        "SLPR": 98.08
      }
    ]
    setSalesListRatioData(data)
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

        {/* Dropdown for city selection */}
        <div className="flex justify-center mb-4">
          <Select value={selectedCity} onValueChange={setSelectedCity}>
            <SelectTrigger className="w-[280px] bg-white/70 backdrop-blur-sm">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Houston">Houston</SelectItem>
              <SelectItem value="Austin">Austin</SelectItem>
              <SelectItem value="Dallas">Dallas</SelectItem>
              <SelectItem value="San Antonio">San Antonio</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Median Sales and Sales Volume Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <BeroMetric data={beroMetricData} />
          <HistoricalTrend data={historicalTrendData} />
          <MedianSalesChart data={medianSalesChartData} />
          <DomTrend data={domTrendData} />
          <SalesVolume data={salesVolumeChartData} />   
          <ActiveListing data={activeListingData} />
          <WeeklyPending data={weeklyPendingData} />
          <WeeklyPriceReduction data={weeklyPriceReductionData} />
          <RentByCity data={rentByCityData} />
          <SalesListRatio data={salesListRatioData} />
        </div>
        
        {/* Performance, User Growth, Sales & Revenue, and Device Usage Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          {/* <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-800 text-lg font-semibold">Performance Metrics</h3>
            <p className="text-slate-600 text-sm mb-4">Real-time system performance</p>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
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
                <Line 
                  type="monotone" 
                  dataKey="sales" 
                  stroke="#f59e0b" 
                  strokeWidth={3}
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#f59e0b', strokeWidth: 2 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div> */}

          {/* <div className="bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-800 text-lg font-semibold">User Growth Trend</h3>
            <p className="text-slate-600 text-sm mb-4">Active users over time</p>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={userGrowthData}>
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
                <Area 
                  type="monotone" 
                  dataKey="users" 
                  stroke="#06b6d4" 
                  fill="url(#colorUsers)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div> */}

          {/* <div className="bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-800 text-lg font-semibold">Sales & Revenue Overview</h3>
            <p className="text-slate-600 text-sm mb-4">Monthly performance metrics</p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={salesData}>
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
                <Bar dataKey="sales" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div> */}

          {/* <div className="lg:col-span-2 bg-white/70 backdrop-blur-sm border-white/20 rounded-lg p-6 hover:shadow-xl transition-all duration-300">
            <h3 className="text-slate-800 text-lg font-semibold">Device Usage</h3>
            <p className="text-slate-600 text-sm mb-4">Traffic by device type</p>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
