import {useState, useEffect} from 'react';
import Navbar from "@/components/containers/Navbar";
import SF from "@/components/Tables/SF";
import Condo from "@/components/Tables/Condo";

const Tables = () => {
  const [sfData, setSFData] = useState([])
  const [contraData, setContraData] = useState([])

  useEffect(() => {
    getSFDataHandler()
    getContraDataHandler()
  }, [])

  const getSFDataHandler = async () => {
    const data = [
      {
        "pricerange": "50–100K",
        "Pending/ Signed Contract": 8,
        "Price Adjustments": 3,
        "Sold and Closed": 8,
        "New Listings": 8,
        "DOM": 40.2,
        "List to Close +/-": -0.4,
        "Total Actives": 4,
        "Change from Last Month": "-4",
        "Previous 3 Months Change": 9,
        "Trending < >": "↓"
      },
      {
        "pricerange": "100–150K",
        "Pending/ Signed Contract": 40,
        "Price Adjustments": 22,
        "Sold and Closed": 40,
        "New Listings": 40,
        "DOM": 56.7,
        "List to Close +/-": -6.2,
        "Total Actives": 40,
        "Change from Last Month": "+8",
        "Previous 3 Months Change": 38,
        "Trending < >": "↑"
      },
      {
        "pricerange": "150–200K",
        "Pending/ Signed Contract": 117,
        "Price Adjustments": 67,
        "Sold and Closed": 117,
        "New Listings": 117,
        "DOM": 50,
        "List to Close +/-": -5.6,
        "Total Actives": 128,
        "Change from Last Month": "+14",
        "Previous 3 Months Change": 93,
        "Trending < >": "↑"
      },
      {
        "pricerange": "200–250K",
        "Pending/ Signed Contract": 219,
        "Price Adjustments": 120,
        "Sold and Closed": 219,
        "New Listings": 219,
        "DOM": 50.7,
        "List to Close +/-": -2.7,
        "Total Actives": 199,
        "Change from Last Month": "+43",
        "Previous 3 Months Change": 207.7,
        "Trending < >": "↑"
      },
      {
        "pricerange": "250–300K",
        "Pending/ Signed Contract": 230,
        "Price Adjustments": 122,
        "Sold and Closed": 230,
        "New Listings": 230,
        "DOM": 42.9,
        "List to Close +/-": -2.2,
        "Total Actives": 221,
        "Change from Last Month": "+10",
        "Previous 3 Months Change": 253.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "300–400K",
        "Pending/ Signed Contract": 307,
        "Price Adjustments": 142,
        "Sold and Closed": 307,
        "New Listings": 307,
        "DOM": 47.3,
        "List to Close +/-": -2.4,
        "Total Actives": 395,
        "Change from Last Month": "+43",
        "Previous 3 Months Change": 336.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "400–500K",
        "Pending/ Signed Contract": 154,
        "Price Adjustments": 76,
        "Sold and Closed": 154,
        "New Listings": 154,
        "DOM": 47.9,
        "List to Close +/-": -2.5,
        "Total Actives": 189,
        "Change from Last Month": "+12",
        "Previous 3 Months Change": 149.7,
        "Trending < >": "↑"
      },
      {
        "pricerange": "500–750K",
        "Pending/ Signed Contract": 184,
        "Price Adjustments": 59,
        "Sold and Closed": 184,
        "New Listings": 184,
        "DOM": 39.9,
        "List to Close +/-": -2.8,
        "Total Actives": 170,
        "Change from Last Month": "+56",
        "Previous 3 Months Change": 165.7,
        "Trending < >": "↑"
      },
      {
        "pricerange": "750K–1M",
        "Pending/ Signed Contract": 63,
        "Price Adjustments": 24,
        "Sold and Closed": 63,
        "New Listings": 63,
        "DOM": 40.9,
        "List to Close +/-": -2.4,
        "Total Actives": 64,
        "Change from Last Month": "+18",
        "Previous 3 Months Change": 61.7,
        "Trending < >": "↑"
      },
      {
        "pricerange": "1–1.5M",
        "Pending/ Signed Contract": 53,
        "Price Adjustments": 17,
        "Sold and Closed": 53,
        "New Listings": 53,
        "DOM": 54.7,
        "List to Close +/-": -3.5,
        "Total Actives": 50,
        "Change from Last Month": "+3",
        "Previous 3 Months Change": 56.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "1.5–2M",
        "Pending/ Signed Contract": 24,
        "Price Adjustments": 10,
        "Sold and Closed": 24,
        "New Listings": 24,
        "DOM": 49.5,
        "List to Close +/-": 0.5,
        "Total Actives": 36,
        "Change from Last Month": "+9",
        "Previous 3 Months Change": 28.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "2–3M",
        "Pending/ Signed Contract": 15,
        "Price Adjustments": 3,
        "Sold and Closed": 15,
        "New Listings": 15,
        "DOM": 59.3,
        "List to Close +/-": -5.7,
        "Total Actives": 25,
        "Change from Last Month": "+4",
        "Previous 3 Months Change": 15.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "3–5M",
        "Pending/ Signed Contract": 7,
        "Price Adjustments": 2,
        "Sold and Closed": 7,
        "New Listings": 7,
        "DOM": 68.3,
        "List to Close +/-": -5.8,
        "Total Actives": 15,
        "Change from Last Month": "+3",
        "Previous 3 Months Change": 8.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "5–10M",
        "Pending/ Signed Contract": 1,
        "Price Adjustments": 0,
        "Sold and Closed": 1,
        "New Listings": 1,
        "DOM": 626,
        "List to Close +/-": -17,
        "Total Actives": 8,
        "Change from Last Month": "-2",
        "Previous 3 Months Change": 2.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "10M+",
        "Pending/ Signed Contract": null,
        "Price Adjustments": null,
        "Sold and Closed": null,
        "New Listings": null,
        "DOM": null,
        "List to Close +/-": null,
        "Total Actives": 5,
        "Change from Last Month": "-",
        "Previous 3 Months Change": 1,
        "Trending < >": "-"
      }
    ]
    setSFData(data)
  }

  const getContraDataHandler = async () => {
    const data = [
      {
        "pricerange": "50–100K",
        "Pending/ Signed Contract": 16,
        "Price Adjustments": 10,
        "Sold and Closed": 16,
        "New Listings": 16,
        "DOM": 47.1,
        "List to Close +/-": -7.2,
        "Total Actives": 93,
        "Change from Last Month": "-7",
        "Previous 3 Months Change": 25.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "100–150K",
        "Pending/ Signed Contract": 29,
        "Price Adjustments": 14,
        "Sold and Closed": 29,
        "New Listings": 29,
        "DOM": 72.4,
        "List to Close +/-": -4.9,
        "Total Actives": 101,
        "Change from Last Month": "-11",
        "Previous 3 Months Change": 39.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "150–200K",
        "Pending/ Signed Contract": 25,
        "Price Adjustments": 17,
        "Sold and Closed": 25,
        "New Listings": 25,
        "DOM": 66.6,
        "List to Close +/-": -4.9,
        "Total Actives": 65,
        "Change from Last Month": "+2",
        "Previous 3 Months Change": 28.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "200–250K",
        "Pending/ Signed Contract": 16,
        "Price Adjustments": 8,
        "Sold and Closed": 16,
        "New Listings": 16,
        "DOM": 78.1,
        "List to Close +/-": -3,
        "Total Actives": 41,
        "Change from Last Month": "-11",
        "Previous 3 Months Change": 20.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "250–300K",
        "Pending/ Signed Contract": 8,
        "Price Adjustments": 2,
        "Sold and Closed": 8,
        "New Listings": 8,
        "DOM": 36,
        "List to Close +/-": -6.4,
        "Total Actives": 24,
        "Change from Last Month": "-1",
        "Previous 3 Months Change": 11.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "300–400K",
        "Pending/ Signed Contract": 15,
        "Price Adjustments": 8,
        "Sold and Closed": 15,
        "New Listings": 15,
        "DOM": 106.1,
        "List to Close +/-": -5,
        "Total Actives": 39,
        "Change from Last Month": "+6",
        "Previous 3 Months Change": 13.3,
        "Trending < >": "↑"
      },
      {
        "pricerange": "400–500K",
        "Pending/ Signed Contract": 4,
        "Price Adjustments": 1,
        "Sold and Closed": 4,
        "New Listings": 4,
        "DOM": 41.8,
        "List to Close +/-": -3.3,
        "Total Actives": 11,
        "Change from Last Month": "-4",
        "Previous 3 Months Change": 6.3,
        "Trending < >": "↓"
      },
      {
        "pricerange": "500–750K",
        "Pending/ Signed Contract": 5,
        "Price Adjustments": 3,
        "Sold and Closed": 5,
        "New Listings": 5,
        "DOM": 216.2,
        "List to Close +/-": -2.7,
        "Total Actives": 23,
        "Change from Last Month": "+2",
        "Previous 3 Months Change": 9,
        "Trending < >": "↓"
      },
      {
        "pricerange": "750K–1M",
        "Pending/ Signed Contract": 3,
        "Price Adjustments": 0,
        "Sold and Closed": 3,
        "New Listings": 3,
        "DOM": 11,
        "List to Close +/-": 0.9,
        "Total Actives": 9,
        "Change from Last Month": "+1",
        "Previous 3 Months Change": 2.7,
        "Trending < >": "↑"
      },
      {
        "pricerange": "1–1.5M",
        "Pending/ Signed Contract": 1,
        "Price Adjustments": 1,
        "Sold and Closed": 1,
        "New Listings": 1,
        "DOM": 75,
        "List to Close +/-": -11.9,
        "Total Actives": 11,
        "Change from Last Month": "-5",
        "Previous 3 Months Change": 3.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "1.5–2M",
        "Pending/ Signed Contract": 1,
        "Price Adjustments": 0,
        "Sold and Closed": 1,
        "New Listings": 1,
        "DOM": 0,
        "List to Close +/-": 0,
        "Total Actives": 7,
        "Change from Last Month": "+0",
        "Previous 3 Months Change": 1,
        "Trending < >": "→"
      },
      {
        "pricerange": "2–3M",
        "Pending/ Signed Contract": 1,
        "Price Adjustments": 0,
        "Sold and Closed": 1,
        "New Listings": 1,
        "DOM": 1,
        "List to Close +/-": 0,
        "Total Actives": 13,
        "Change from Last Month": "-2",
        "Previous 3 Months Change": 2.7,
        "Trending < >": "↓"
      },
      {
        "pricerange": "3–5M",
        "Pending/ Signed Contract": null,
        "Price Adjustments": null,
        "Sold and Closed": null,
        "New Listings": null,
        "DOM": null,
        "List to Close +/-": null,
        "Total Actives": 4,
        "Change from Last Month": "-",
        "Previous 3 Months Change": 2.3,
        "Trending < >": "-"
      },
      {
        "pricerange": "5–10M",
        "Pending/ Signed Contract": null,
        "Price Adjustments": null,
        "Sold and Closed": null,
        "New Listings": null,
        "DOM": null,
        "List to Close +/-": null,
        "Total Actives": 1,
        "Change from Last Month": "-",
        "Previous 3 Months Change": "-",
        "Trending < >": "-"
      },
      {
        "pricerange": "10M+",
        "Pending/ Signed Contract": null,
        "Price Adjustments": null,
        "Sold and Closed": null,
        "New Listings": null,
        "DOM": null,
        "List to Close +/-": null,
        "Total Actives": 0,
        "Change from Last Month": "-",
        "Previous 3 Months Change": "-",
        "Trending < >": "-"
      }
    ]
    setContraData(data)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Navigation */}
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

        <SF data={sfData} />
        <Condo data={contraData} />

        {/* <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-slate-800">Active Projects</CardTitle>
                <CardDescription className="text-slate-600">Track project progress and manage deliverables</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input 
                    placeholder="Search projects..." 
                    className="pl-10 bg-white/50 border-white/30 focus:bg-white/80 transition-all duration-200"
                  />
                </div>
                <Button variant="outline" size="sm" className="bg-white/50 hover:bg-white/80 transition-all duration-200">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-200">
                    <TableHead className="font-semibold text-slate-700">Project</TableHead>
                    <TableHead className="font-semibold text-slate-700">Client</TableHead>
                    <TableHead className="font-semibold text-slate-700">Status</TableHead>
                    <TableHead className="font-semibold text-slate-700">Progress</TableHead>
                    <TableHead className="font-semibold text-slate-700">Budget</TableHead>
                    <TableHead className="font-semibold text-slate-700">Team Size</TableHead>
                    <TableHead className="font-semibold text-slate-700">Deadline</TableHead>
                    <TableHead className="font-semibold text-slate-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {projectsData.map((project) => (
                    <TableRow key={project.id} className="hover:bg-white/50 transition-colors duration-200">
                      <TableCell>
                        <div>
                          <div className="font-medium text-slate-800">{project.name}</div>
                          <div className="text-sm text-slate-500">{project.id}</div>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-700">{project.client}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <div className="w-24 bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-300" 
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-slate-600">{project.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium text-slate-800">{project.budget}</TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-full h-8 w-8 flex items-center justify-center text-sm font-medium">
                            {project.team}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-slate-600">{project.deadline}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-blue-100">
                            <Eye className="h-4 w-4 text-blue-600" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-amber-100">
                            <Edit className="h-4 w-4 text-amber-600" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0 hover:bg-red-100">
                            <Trash2 className="h-4 w-4 text-red-600" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card> */}
      </div>
    </div>
  );
};

export default Tables;
