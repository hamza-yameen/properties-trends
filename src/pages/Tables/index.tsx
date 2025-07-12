import {useState, useEffect} from 'react';
import Navbar from "@/components/containers/Navbar";
import SF from "@/components/Tables/SF";
import Condo from "@/components/Tables/Condo";
import { apiService } from '@/services/apiServices';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


const Tables = () => {
  const [sfData, setSFData] = useState([])
  const [contraData, setContraData] = useState([])
  const [city, setCity] = useState("Bellaire Area")
  const [year, setYear] = useState("2024")
  const [month, setMonth] = useState("4")
  const [loading, setLoading] = useState(false)
  const [allLocations, setAllLocations] = useState([])

  useEffect(() => {
    getAllLocationsHandler()
  },[])

  useEffect(() => {
    getDataTableHandler()
  }, [city, year, month])

  const getAllLocationsHandler = async () => {
    const response = await apiService.getAllLocations()
    if (response.success) {
      setAllLocations(response.data?.locations)
    }
  }

  const getDataTableHandler = async () => {
    setLoading(true)
    const response = await apiService.getTableData(city, year, month)
    if (response.success) {
      setSFData(response.data.sf)
      setContraData(response.data.condo)
    }else{
      setSFData([])
      setContraData([])
    }
    setLoading(false)
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Housing Market
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Visualization
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore the housing market with interactive charts and data visualizations
          </p>
        </div>

        {/* Filter Form */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* City Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">City</label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="bg-white/70 border-purple-200 focus:border-purple-400 focus:ring-purple-400/20">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Houston">Houston</SelectItem>
                  {allLocations.filter((location: string) => location !== "Houston").map((location: string) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Year Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Year</label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="bg-white/70 border-purple-200 focus:border-purple-400 focus:ring-purple-400/20">
                  <SelectValue placeholder="Select year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Month Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Month</label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="bg-white/70 border-purple-200 focus:border-purple-400 focus:ring-purple-400/20">
                  <SelectValue placeholder="Select month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <SF data={sfData} loading={loading} />
        <Condo data={contraData} loading={loading} />

      </div>
    </div>
  );
};

export default Tables;
