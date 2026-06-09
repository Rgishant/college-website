import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchFaculty = async () => {
    try {
      setLoading(true);
      const records = await pb.collection('faculty').getFullList({
        sort: 'name',
        $autoCancel: false
      });
      setFaculty(records);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFaculty();
  }, []);

  return {
    faculty,
    loading,
    error,
    refetch: fetchFaculty
  };
};
