import {useState, useEffect} from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface CondoData {
  pricerange: string;
  "Pending/ Signed Contract": number | null;
  "Price Adjustments": number | null;
  "Sold and Closed": number | null;
  "New Listings": number | null;
  "DOM": number | null;
  "List to Close +/-": number | null;
  "Total Actives": number | null;
  "Change from Last Month": string;
  "Previous 3 Months Change": number | null;
  "Trending < >": string;
}

interface CondoProps {
  data: CondoData[]
  loading?: boolean
}

const  Condo = ({ data, loading = false }: CondoProps) => {
  const [condoData, setCondoData] = useState(data)

  useEffect(() => {
    console.log(data)
    setCondoData(data)
  }, [data])

  const getTrendingIcon = (trend: string) => {
    switch (trend) {
      case "↑":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "↓":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
      case "→":
        return <Minus className="h-4 w-4 text-blue-600" />;
      default:
        return <Minus className="h-4 w-4 text-gray-400" />;
    }
  }

  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-600';
    if (change.startsWith('-')) return 'text-red-600';
    return 'text-gray-600';
  }

  const exportToCSV = () => {
    if (!condoData || condoData.length === 0) {
      alert('No data to export');
      return;
    }

    // Define headers for CSV
    const headers = [
      'Price Range',
      'Pending/Signed Contract',
      'Price Adjustments',
      'Sold and Closed',
      'New Listings',
      'DOM',
      'List to Close +/-',
      'Total Actives',
      'Change from Last Month',
      'Previous 3 Months Change',
      'Trending'
    ];

    // Convert data to CSV format
    const csvContent = [
      headers.join(','),
      ...condoData.map(item => [
        `"${item.pricerange}"`,
        item["Pending/ Signed Contract"] !== null ? item["Pending/ Signed Contract"] : '',
        item["Price Adjustments"] !== null ? item["Price Adjustments"] : '',
        item["Sold and Closed"] !== null ? item["Sold and Closed"] : '',
        item["New Listings"] !== null ? item["New Listings"] : '',
        item["DOM"] !== null ? item["DOM"] : '',
        item["List to Close +/-"] !== null ? item["List to Close +/-"] : '',
        item["Total Actives"] !== null ? item["Total Actives"] : '',
        `"${item["Change from Last Month"]}"`,
        item["Previous 3 Months Change"] !== null ? item["Previous 3 Months Change"] : '',
        `"${item["Trending < >"]}"`
      ].join(','))
    ].join('\n');

    // Create and download the file
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `condo-market-data-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <Card className="mb-12 bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-2xl text-slate-800">Condo Market Analysis</CardTitle>
            <CardDescription className="text-slate-600">Comprehensive condo market data by price range</CardDescription>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              onClick={exportToCSV}
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-purple-200 border-t-purple-600"></div>
              <p className="text-slate-600 font-medium">Loading condo market data...</p>
            </div>
          </div>
        ) : condoData && condoData.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="max-h-[600px] overflow-y-auto border border-slate-200 rounded-lg">
              <Table>
                <TableHeader className="sticky top-0 bg-white/95 backdrop-blur-sm z-10">
                  <TableRow className="border-slate-200">
                    <TableHead className="font-semibold text-slate-700">Price Range</TableHead>
                    <TableHead className="font-semibold text-slate-700">Pending/Signed</TableHead>
                    <TableHead className="font-semibold text-slate-700">Price Adjustments</TableHead>
                    <TableHead className="font-semibold text-slate-700">Sold & Closed</TableHead>
                    <TableHead className="font-semibold text-slate-700">New Listings</TableHead>
                    <TableHead className="font-semibold text-slate-700">DOM</TableHead>
                    <TableHead className="font-semibold text-slate-700">List to Close +/-</TableHead>
                    <TableHead className="font-semibold text-slate-700">Total Actives</TableHead>
                    <TableHead className="font-semibold text-slate-700">Monthly Change</TableHead>
                    <TableHead className="font-semibold text-slate-700">3-Month Change</TableHead>
                    <TableHead className="font-semibold text-slate-700">Trend</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {condoData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-white/50 transition-colors duration-200">
                      <TableCell className="font-medium text-slate-800">
                        {item.pricerange}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["Pending/ Signed Contract"] !== null ? item["Pending/ Signed Contract"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["Price Adjustments"] !== null ? item["Price Adjustments"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["Sold and Closed"] !== null ? item["Sold and Closed"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["New Listings"] !== null ? item["New Listings"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["DOM"] !== null ? item["DOM"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["List to Close +/-"] !== null ? item["List to Close +/-"] : '-'}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["Total Actives"] !== null ? item["Total Actives"] : '-'}
                      </TableCell>
                      <TableCell className={getChangeColor(item["Change from Last Month"])}>
                        {item["Change from Last Month"]}
                      </TableCell>
                      <TableCell className="text-slate-700">
                        {item["Previous 3 Months Change"] !== null ? item["Previous 3 Months Change"] : '-'}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          {getTrendingIcon(item["Trending < >"])}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <p className="text-slate-500 text-lg">No condo market data available</p>
              <p className="text-slate-400 text-sm mt-2">Try selecting different filters</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default Condo
