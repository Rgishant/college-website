import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import pb from '@/lib/pocketbaseClient';

const TestimonialCard = ({ testimonial, index = 0 }) => {
  const imageUrl = testimonial.image 
    ? pb.files.getUrl(testimonial, testimonial.image)
    : null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full">
        <CardContent className="p-6">
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < testimonial.rating
                    ? 'fill-secondary text-secondary'
                    : 'text-muted-foreground'
                }`}
              />
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed mb-6 italic">
            "{testimonial.message}"
          </p>
          <div className="flex items-center gap-3">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={testimonial.studentName}
                className="w-12 h-12 rounded-xl object-cover"
              />
            ) : (
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-semibold">
                {testimonial.studentName.charAt(0)}
              </div>
            )}
            <div>
              <p className="font-semibold text-foreground">{testimonial.studentName}</p>
              {testimonial.program && (
                <p className="text-sm text-muted-foreground">{testimonial.program}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
