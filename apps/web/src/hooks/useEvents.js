import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      const records = await pb.collection('events').getFullList({
        sort: '-date',
        $autoCancel: false
      });
      setEvents(records);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents
  };
};
