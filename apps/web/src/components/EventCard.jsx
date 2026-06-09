import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { format } from 'date-fns';
import pb from '@/lib/pocketbaseClient';

const EventCard = ({ event, index = 0 }) => {
  const imageUrl = event.image 
    ? pb.files.getUrl(event, event.image)
    : 'https://images.unsplash.com/photo-1540575467063-178a50c2df87';

  const eventDate = new Date(event.date);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={event.title}
            className="w-full h-full object-cover"
          />
          {event.category && (
            <Badge className="absolute top-4 right-4 bg-secondary text-secondary-foreground">
              {event.category}
            </Badge>
          )}
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-3 text-foreground">{event.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-2">
            {event.description}
          </p>
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(eventDate, 'MMMM d, yyyy')}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{event.time}</span>
              </div>
            )}
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default EventCard;
