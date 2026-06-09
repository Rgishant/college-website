import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DepartmentCard from '@/components/DepartmentCard';
import { useDepartments } from '@/hooks/useDepartments';
import { Skeleton } from '@/components/ui/skeleton';

const DepartmentsPage = () => {
  const { departments, loading } = useDepartments();

  return (
    <>
      <Helmet>
        <title>{`Departments - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Explore our Arts and Commerce departments offering B.A. and B.Com. programs with experienced faculty and comprehensive curriculum." />
      </Helmet>

      <Header />

      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Our departments
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Discover our diverse academic programs designed to nurture talent and build successful careers.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-48 w-full rounded-2xl" />
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          ) : departments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <DepartmentCard key={dept.id} department={dept} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No departments available at the moment.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DepartmentsPage;
