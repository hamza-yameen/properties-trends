
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Search, Filter, Download, Eye, Edit, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from "@/components/containers/Navbar";

const employeesData = [
  {
    id: 1,
    name: "Sarah Johnson",
    email: "sarah.johnson@company.com",
    role: "Senior Developer",
    department: "Engineering",
    status: "Active",
    salary: "$95,000",
    joinDate: "2021-03-15",
    avatar: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@company.com",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    salary: "$105,000",
    joinDate: "2020-08-22",
    avatar: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Emily Davis",
    email: "emily.davis@company.com",
    role: "UX Designer",
    department: "Design",
    status: "On Leave",
    salary: "$78,000",
    joinDate: "2022-01-10",
    avatar: "/placeholder.svg"
  },
  {
    id: 4,
    name: "Robert Wilson",
    email: "robert.wilson@company.com",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "Active",
    salary: "$88,000",
    joinDate: "2021-11-05",
    avatar: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    email: "lisa.anderson@company.com",
    role: "Marketing Director",
    department: "Marketing",
    status: "Active",
    salary: "$120,000",
    joinDate: "2019-04-18",
    avatar: "/placeholder.svg"
  }
];

const projectsData = [
  {
    id: "PRJ-001",
    name: "E-commerce Platform",
    client: "TechCorp Inc.",
    status: "In Progress",
    progress: 75,
    budget: "$250,000",
    deadline: "2024-02-15",
    team: 8
  },
  {
    id: "PRJ-002",
    name: "Mobile Banking App",
    client: "FinanceBank",
    status: "Completed",
    progress: 100,
    budget: "$180,000",
    deadline: "2023-12-01",
    team: 6
  },
  {
    id: "PRJ-003",
    name: "CRM System",
    client: "SalesForce Pro",
    status: "Planning",
    progress: 25,
    budget: "$320,000",
    deadline: "2024-06-30",
    team: 12
  },
  {
    id: "PRJ-004",
    name: "Analytics Dashboard",
    client: "DataViz Solutions",
    status: "In Progress",
    progress: 45,
    budget: "$95,000",
    deadline: "2024-03-20",
    team: 4
  }
];

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'active':
    case 'completed':
      return 'bg-green-100 text-green-800 hover:bg-green-200';
    case 'on leave':
    case 'planning':
      return 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200';
    case 'in progress':
      return 'bg-blue-100 text-blue-800 hover:bg-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 hover:bg-gray-200';
  }
};

const Tables = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100">
      {/* Navigation */}
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Data Management
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
              Made Beautiful
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Organize and manage your data with elegant, interactive tables designed for modern workflows
          </p>
        </div>

        {/* Employee Table */}
        <Card className="mb-12 bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300">
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <CardTitle className="text-2xl text-slate-800">Employee Directory</CardTitle>
                <CardDescription className="text-slate-600">Manage your team members and their information</CardDescription>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                  <Input 
                    placeholder="Search employees..." 
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
                    <TableHead className="font-semibold text-slate-700">Employee</TableHead>
                    <TableHead className="font-semibold text-slate-700">Role & Department</TableHead>
                    <TableHead className="font-semibold text-slate-700">Status</TableHead>
                    <TableHead className="font-semibold text-slate-700">Salary</TableHead>
                    <TableHead className="font-semibold text-slate-700">Join Date</TableHead>
                    <TableHead className="font-semibold text-slate-700">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {employeesData.map((employee) => (
                    <TableRow key={employee.id} className="hover:bg-white/50 transition-colors duration-200">
                      <TableCell>
                        <div className="flex items-center space-x-3">
                          <Avatar className="h-10 w-10">
                            <AvatarImage src={employee.avatar} alt={employee.name} />
                            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white">
                              {employee.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium text-slate-800">{employee.name}</div>
                            <div className="text-sm text-slate-500">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium text-slate-800">{employee.role}</div>
                          <div className="text-sm text-slate-500">{employee.department}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(employee.status)}>
                          {employee.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="font-medium text-slate-800">{employee.salary}</TableCell>
                      <TableCell className="text-slate-600">{employee.joinDate}</TableCell>
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
        </Card>

        {/* Projects Table */}
        <Card className="bg-white/70 backdrop-blur-sm border-white/20 hover:shadow-2xl transition-all duration-300">
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
        </Card>
      </div>
    </div>
  );
};

export default Tables;
