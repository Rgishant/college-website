import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Search, Download, LogOut, GraduationCap } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { useAppointments } from '@/hooks/useAppointments';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { appointments, loading, updateAppointment } = useAppointments();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  useEffect(() => {
    if (appointments) {
      const filtered = appointments.filter(apt =>
        apt.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        apt.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredAppointments(filtered);
    }
  }, [appointments, searchTerm]);

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateAppointment(id, { status: newStatus });
      toast('Appointment status updated.');
    } catch (error) {
      toast('Failed to update status.');
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const exportCSV = () => {
    const headers = ['Date', 'Time', 'Name', 'Email', 'Phone', 'Degree', 'Department', 'Status'];
    const rows = filteredAppointments.map(apt => [
      format(new Date(apt.date), 'yyyy-MM-dd'),
      apt.time,
      `${apt.firstName} ${apt.lastName}`,
      apt.email,
      apt.phone,
      apt.degree,
      apt.department,
      apt.status
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `appointments-${format(new Date(), 'yyyy-MM-dd')}.csv`;
    a.click();
    toast('CSV exported successfully.');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed': return 'bg-green-500/10 text-green-700 dark:text-green-400';
      case 'Pending': return 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400';
      case 'Cancelled': return 'bg-red-500/10 text-red-700 dark:text-red-400';
      case 'Completed': return 'bg-blue-500/10 text-blue-700 dark:text-blue-400';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <>
      <Helmet>
        <title>{`Admin Dashboard - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Manage appointment bookings and student inquiries." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <header className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                  <p className="text-sm text-muted-foreground">Kakasaheb Chavan College</p>
                </div>
              </div>
              <Button onClick={handleLogout} variant="outline">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6 text-foreground">Appointment bookings</h2>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button onClick={exportCSV} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Export CSV
              </Button>
            </div>

            {loading ? (
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-card rounded-xl animate-pulse" />
                ))}
              </div>
            ) : filteredAppointments.length > 0 ? (
              <div className="space-y-4">
                {filteredAppointments.map((appointment, index) => (
                  <motion.div
                    key={appointment.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="font-semibold text-lg text-foreground">
                                {appointment.firstName} {appointment.lastName}
                              </h3>
                              <Badge className={getStatusColor(appointment.status)}>
                                {appointment.status}
                              </Badge>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>{format(new Date(appointment.date), 'MMM d, yyyy')} at {appointment.time}</span>
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Email:</span> {appointment.email}
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Phone:</span> {appointment.phone}
                              </div>
                              <div>
                                <span className="font-medium text-foreground">Program:</span> {appointment.degree} - {appointment.department}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2">
                            <Select
                              value={appointment.status}
                              onValueChange={(value) => handleStatusChange(appointment.id, value)}
                            >
                              <SelectTrigger className="w-full lg:w-40">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Confirmed">Confirmed</SelectItem>
                                <SelectItem value="Completed">Completed</SelectItem>
                                <SelectItem value="Cancelled">Cancelled</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <Calendar className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No appointments found.</p>
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminDashboard;
