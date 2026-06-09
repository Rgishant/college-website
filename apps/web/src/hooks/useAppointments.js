import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const records = await pb.collection('appointments').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setAppointments(records);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createAppointment = async (data) => {
    try {
      const record = await pb.collection('appointments').create(data, { $autoCancel: false });
      setAppointments(prev => [record, ...prev]);
      return record;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateAppointment = async (id, data) => {
    try {
      const record = await pb.collection('appointments').update(id, data, { $autoCancel: false });
      setAppointments(prev => prev.map(apt => apt.id === id ? record : apt));
      return record;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const deleteAppointment = async (id) => {
    try {
      await pb.collection('appointments').delete(id, { $autoCancel: false });
      setAppointments(prev => prev.filter(apt => apt.id !== id));
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    if (pb.authStore.isValid) {
      fetchAppointments();
    }
  }, []);

  return {
    appointments,
    loading,
    error,
    createAppointment,
    updateAppointment,
    deleteAppointment,
    refetch: fetchAppointments
  };
};
