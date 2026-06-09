import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const FacultyCard = ({ member, index = 0 }) => {
  const imageUrl = member.image 
    ? pb.files.getUrl(member, member.image)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-4 mb-4">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={member.name}
                className="w-20 h-20 rounded-xl object-cover"
              />
            ) : (
              <div className="w-20 h-20 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-2xl font-semibold">
                {member.name.charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
              {member.title && (
                <p className="text-sm text-primary font-medium">{member.title}</p>
              )}
              {member.department && (
                <p className="text-sm text-muted-foreground">{member.department}</p>
              )}
            </div>
          </div>
          {member.qualification && (
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-medium">Qualification:</span> {member.qualification}
            </p>
          )}
          {member.specialization && (
            <p className="text-sm text-muted-foreground mb-4">
              <span className="font-medium">Specialization:</span> {member.specialization}
            </p>
          )}
          {member.bio && (
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
              {member.bio}
            </p>
          )}
          <div className="space-y-1 text-sm text-muted-foreground">
            {member.email && (
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{member.email}</span>
              </div>
            )}
            {member.phone && (
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{member.phone}</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default FacultyCard;
