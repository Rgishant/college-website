import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { format } from 'date-fns';

const ConfirmationCard = ({ appointment }) => {
  const appointmentDate = new Date(appointment.date);

  return (
    <Card className="border-2 border-primary/20">
      <CardHeader>
        <CardTitle className="text-foreground">Appointment Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Calendar className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Date</p>
            <p className="text-sm">{format(appointmentDate, 'EEEE, MMMM d, yyyy')}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <Clock className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Time</p>
            <p className="text-sm">{appointment.time}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <User className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Name</p>
            <p className="text-sm">{appointment.firstName} {appointment.lastName}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-muted-foreground">
          <MapPin className="w-5 h-5 text-primary" />
          <div>
            <p className="text-sm font-medium text-foreground">Location</p>
            <p className="text-sm">Kakasaheb Chavan College, Talmavale</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConfirmationCard;
