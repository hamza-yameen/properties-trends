import {useState, useEffect} from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface PropertyData {
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

interface SFProps {
  data: PropertyData[],
  
  loading?: boolean
}

const SF = ({ data, loading = false }: SFProps) => {
  const [sfData, setSFData] = useState(data)

  useEffect(() => {
    console.log(data)
    setSFData(data)
  }, [data])

  const getTrendingIcon = (trend: string) => {
    switch (trend) {
      case "↑":
        return <TrendingUp className="h-4 w-4 text-green-600" />;
      case "↓":
        return <TrendingDown className="h-4 w-4 text-red-600" />;
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
    if (!sfData || sfData.length === 0) {
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
      ...sfData.map(item => [
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
    link.setAttribute('download', `property-market-data-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <Card className="mb-12 bg-white/90 backdrop-blur-sm border border-gray-200/50 shadow-lg rounded-xl">
      <CardHeader className="pb-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle className="text-[12px] font-light font-montserrat text-slate-800 uppercase tracking-wide">River oaks | <span className='font-bold'>Single Family Homes</span></CardTitle>
          </div>
          <div className="flex items-center gap-3">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-black via-gray-700 to-gray-500 hover:from-gray-800 hover:via-gray-600 hover:to-gray-400 text-white transition-all duration-200 rounded-lg px-4 py-2"
              onClick={exportToCSV}
            >
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="flex flex-col items-center gap-4">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-200 border-t-blue-600"></div>
              <p className="text-slate-600 font-medium">Loading property market data...</p>
            </div>
          </div>
        ) : sfData && sfData.length > 0 ? (
          <div className="overflow-x-auto">
            <div className="max-h-[600px] overflow-y-auto">
              <Table className="w-full">
                <TableHeader className="sticky top-0 bg-white/95 backdrop-blur-sm z-10 border-b border-gray-200">
                  <TableRow className="border-none hover:bg-transparent">
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-left py-4 px-4 uppercase tracking-wide">PRICE RANGE</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">PENDING</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">ACTIVE</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">CLOSED</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">NEW</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">CHANGED</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">DOM</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">LAST MONTH</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">LAST QUARTER</TableHead>
                    <TableHead className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-4 px-2 uppercase tracking-wide">LAST YEAR</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sfData.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50/50 transition-colors duration-200 border-b border-gray-100">
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-800 text-left py-3 px-4 uppercase tracking-wide">
                        {item.pricerange}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Pending/ Signed Contract"] !== null ? item["Pending/ Signed Contract"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Total Actives"] !== null ? item["Total Actives"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Sold and Closed"] !== null ? item["Sold and Closed"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["New Listings"] !== null ? item["New Listings"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Price Adjustments"] !== null ? item["Price Adjustments"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["DOM"] !== null ? item["DOM"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Change from Last Month"] !== null ? item["Change from Last Month"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["Previous 3 Months Change"] !== null ? item["Previous 3 Months Change"] : '-'}
                      </TableCell>
                      <TableCell className="font-montserrat font-semibold text-[12px] text-slate-700 text-center py-3 px-2 uppercase tracking-wide">
                        {item["List to Close +/-"] !== null ? item["List to Close +/-"] : '-'}
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
              <p className="text-slate-500 text-lg">No property market data available</p>
              <p className="text-slate-400 text-sm mt-2">Try selecting different filters</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default SF
