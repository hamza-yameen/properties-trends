import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/containers/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8 relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 animate-scale-in">
            Housing Market
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Analytics Guide
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Understanding real estate market dynamics and key indicators for informed decision making
          </p>
        </div>

        {/* Key Metrics Explanation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-blue-100 text-sm font-medium">Median Price</p>
                  <p className="text-3xl font-bold">$485K</p>
                  <p className="text-blue-200 text-xs">+5.2% YoY</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
              </div>
              <p className="text-blue-100 text-xs leading-relaxed">
                The middle value of all home prices sold in the market, providing a balanced view of market pricing trends.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-100">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-purple-100 text-sm font-medium">Sales Volume</p>
                  <p className="text-3xl font-bold">1,847</p>
                  <p className="text-purple-200 text-xs">+12.3% MTM</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
              </div>
              <p className="text-purple-100 text-xs leading-relaxed">
                Total number of home sales completed, indicating market activity and buyer/seller engagement levels.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-indigo-100 text-sm font-medium">Active Listings</p>
                  <p className="text-3xl font-bold">6,389</p>
                  <p className="text-indigo-200 text-xs">-3.1% MTM</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
              <p className="text-indigo-100 text-xs leading-relaxed">
                Properties currently available for purchase, reflecting supply levels and market inventory.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in delay-300">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-cyan-100 text-sm font-medium">Market Index</p>
                  <p className="text-3xl font-bold">75%</p>
                  <p className="text-cyan-200 text-xs">Strong Market</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <p className="text-cyan-100 text-xs leading-relaxed">
                Combined indicator measuring overall market health, considering supply, demand, and pricing trends.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Understanding Market Trends */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in delay-500">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                Understanding Market Trends
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Price Appreciation</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Housing prices typically follow seasonal patterns and economic cycles. Year-over-year growth of 5-7% is considered healthy, while rapid increases above 10% may indicate overheating.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Seasonal Variations</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Spring and summer months typically see increased activity, with peak sales occurring in May-July. Winter months often show slower activity but may present better opportunities for buyers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Market Indicators Explained */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in delay-600">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
                Key Market Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-indigo-50 to-cyan-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Days on Market (DOM)</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Average time properties spend listed before selling. Under 30 days indicates a seller's market, while over 60 days suggests a buyer's market.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-cyan-50 to-teal-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Inventory Levels</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Measured in months of supply. 6 months is considered balanced, below 3 months favors sellers, above 6 months favors buyers.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Investment Considerations */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in delay-700">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                Investment Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Timing the Market</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  While timing can be important, long-term real estate investment typically benefits from holding periods of 5+ years, allowing time to weather market cycles.
                </p>
              </div>
              <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-2">Location Factors</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Proximity to employment centers, schools, transportation, and amenities significantly impacts property values and appreciation potential.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Market Types & Strategies */}
          <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in delay-800">
            <CardHeader>
              <CardTitle className="text-slate-800 flex items-center gap-2">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"></div>
                Market Types & Strategies
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-slate-800 text-sm">Hot Market (Seller's)</h5>
                    <p className="text-slate-600 text-xs">Low inventory, bidding wars, cash offers common</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-slate-800 text-sm">Balanced Market</h5>
                    <p className="text-slate-600 text-xs">Fair conditions for both buyers and sellers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <h5 className="font-medium text-slate-800 text-sm">Cold Market (Buyer's)</h5>
                    <p className="text-slate-600 text-xs">High inventory, negotiation power, price reductions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Comprehensive Market Analysis */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/20 shadow-xl animate-fade-in delay-900">
          <CardHeader>
            <CardTitle className="text-center text-slate-800 text-xl">Comprehensive Market Analysis Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-b from-slate-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Supply & Demand</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Monitor active listings, new construction, and buyer activity to gauge market balance and predict price movements.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-slate-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Economic Factors</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Consider interest rates, employment levels, population growth, and local economic indicators affecting housing demand.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-b from-slate-50 to-white rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-800 mb-2">Local Dynamics</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Analyze neighborhood trends, infrastructure development, zoning changes, and community factors influencing property values.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Home;
