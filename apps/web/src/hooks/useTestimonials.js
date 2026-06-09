import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const records = await pb.collection('testimonials').getFullList({
        filter: 'verified = true',
        sort: '-created',
        $autoCancel: false
      });
      setTestimonials(records);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  return {
    testimonials,
    loading,
    error,
    refetch: fetchTestimonials
  };
};
