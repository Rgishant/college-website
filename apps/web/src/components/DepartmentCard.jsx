import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import pb from '@/lib/pocketbaseClient';

const DepartmentCard = ({ department, index = 0 }) => {
  const imageUrl = department.image 
    ? pb.files.getUrl(department, department.image)
    : 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={department.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <CardContent className="flex-1 p-6">
          <h3 className="text-2xl font-semibold mb-3 text-foreground">{department.name}</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">{department.description}</p>
          {department.programs && (
            <p className="text-sm text-primary font-medium">{department.programs}</p>
          )}
        </CardContent>
        <CardFooter className="p-6 pt-0 mt-auto">
          <Button asChild className="w-full group">
            <Link to={`/departments/${department.id}`}>
              Learn More
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default DepartmentCard;
