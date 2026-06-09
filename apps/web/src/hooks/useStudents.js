import { useState, useEffect } from 'react';
import pb from '@/lib/pocketbaseClient';

export const useStudents = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const records = await pb.collection('students').getFullList({
        sort: '-created',
        $autoCancel: false
      });
      setStudents(records);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createStudent = async (data) => {
    try {
      const record = await pb.collection('students').create(data, { $autoCancel: false });
      setStudents(prev => [record, ...prev]);
      return record;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  const updateStudent = async (id, data) => {
    try {
      const record = await pb.collection('students').update(id, data, { $autoCancel: false });
      setStudents(prev => prev.map(student => student.id === id ? record : student));
      return record;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  };

  useEffect(() => {
    if (pb.authStore.isValid) {
      fetchStudents();
    }
  }, []);

  return {
    students,
    loading,
    error,
    createStudent,
    updateStudent,
    refetch: fetchStudents
  };
};
