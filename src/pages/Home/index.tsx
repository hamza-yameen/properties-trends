import {useState, useEffect} from 'react';
import Navbar from "@/components/containers/Navbar";
import SF from "@/components/Tables/SF";
import Condo from "@/components/Tables/Condo";
import { apiService } from '@/services/apiServices';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Hero from "@/components/ui/Hero";
import Home_Des_Icon from "@/assets/des-icon.png"
import Footer from "@/components/containers/Footer";


const Tables = () => {
  const [sfData, setSFData] = useState([])
  const [contraData, setContraData] = useState([])
  const [city, setCity] = useState("Houston")
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString())
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
    <div className="min-h-screen bg-[#F1EFED]">
      <Navbar />
      {/* <AuroraBackground className="min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">  
          <div className="text-center mb-12 animate-fade-in z-10 relative">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animate-scale-in">
              Housing Market
              <span className="block bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent animate-pulse">
                Analytics Guide
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Understanding real estate market dynamics and key indicators for informed decision making
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 z-10 relative">
            <Card className="text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in backdrop-blur-sm" style={{ backgroundColor: '#000000cc' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Median Price</p>
                    <p className="text-3xl font-bold">$485K</p>
                    <p className="text-gray-400 text-xs">+5.2% YoY</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  The middle value of all home prices sold in the market, providing a balanced view of market pricing trends.
                </p>
              </CardContent>
            </Card>

            <Card className="text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-100 backdrop-blur-sm" style={{ backgroundColor: '#000000cc' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Sales Volume</p>
                    <p className="text-3xl font-bold">1,847</p>
                    <p className="text-gray-400 text-xs">+12.3% MTM</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Total number of home sales completed, indicating market activity and buyer/seller engagement levels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-200 backdrop-blur-sm" style={{ backgroundColor: '#000000cc' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Active Listings</p>
                    <p className="text-3xl font-bold">6,389</p>
                    <p className="text-gray-400 text-xs">-3.1% MTM</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Properties currently available for purchase, reflecting supply levels and market inventory.
                </p>
              </CardContent>
            </Card>

            <Card className="text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-300 backdrop-blur-sm" style={{ backgroundColor: '#000000cc' }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-gray-300 text-sm font-medium">Market Index</p>
                    <p className="text-3xl font-bold">75%</p>
                    <p className="text-gray-400 text-xs">Strong Market</p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Combined indicator measuring overall market health, considering supply, demand, and pricing trends.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </AuroraBackground> */}

      <Hero />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Form */}
        <div className="py-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* City Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-[#000000]">City</label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger className="shadow-lg">
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
              <label className="text-sm font-semibold text-[#000000]">Year</label>
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="shadow-lg">
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
              <label className="text-sm font-semibold text-[#000000]">Month</label>
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="shadow-lg">
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

        <div>
          <p className='text-[#3A3B40] text-[12px] font-normal uppercase'>*Market Area Information obtained from Houston Association of Realtors (HAR). Statistics are subject to change due to individual real estate company reporting disciplines. 2800 KIRBY DRIVE, SUITE A-206, HOUSTON, TEXAS 77098. 281.652.5588. © 2025 DOUGLAS ELLIMAN REAL ESTATE. ALL MATERIAL PRESENTED HEREIN IS INTENDED FOR INFORMATION PURPOSES ONLY. WHILE THIS INFORMATION IS BELIEVED TO BE CORRECT; IT IS REPRESENTED SUBJECT TO ERRORS, OMISSION, CHANGES, OR WITHDRAWAL WITHOUT NOTICE. ALL PROPERTY INFORMATION, INCLUDING, BUT NOT LIMITED TO SQUARE FOOTAGE, ROOM COUNT, NUMBER OF BEDROOMS AND THE SCHOOL DISTRICT IN PROPERTY LISTINGS ARE DEEMED RELIABLE, BUT SHOULD BE VERIFIED BY THE SALES ASSOCIATE'S OWN ATTORNEY, ARCHITECT OR ZONING EXPERT. EQUAL HOUSING OPPORTUNITY. <img src={Home_Des_Icon} alt="Home_Des_Icon" className="inline ml-1"/></p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Tables;
