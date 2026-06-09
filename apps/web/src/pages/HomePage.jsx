import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, BookOpen, Award, Target, DollarSign, Briefcase } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatCounter from '@/components/StatCounter';
import FeatureCard from '@/components/FeatureCard';
import DepartmentCard from '@/components/DepartmentCard';
import TestimonialCard from '@/components/TestimonialCard';
import { useDepartments } from '@/hooks/useDepartments';
import { useTestimonials } from '@/hooks/useTestimonials';

const HomePage = () => {
  const { departments, loading: deptLoading } = useDepartments();
  const { testimonials, loading: testLoading } = useTestimonials();

  const features = [
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from highly qualified and dedicated educators committed to your success.'
    },
    {
      icon: BookOpen,
      title: 'Modern Learning',
      description: 'State-of-the-art facilities and contemporary teaching methodologies for effective education.'
    },
    {
      icon: Target,
      title: 'Career Guidance',
      description: 'Comprehensive career counseling and placement support to shape your future.'
    },
    {
      icon: Award,
      title: 'Student-Centric',
      description: 'Personalized attention and holistic development programs for every student.'
    },
    {
      icon: DollarSign,
      title: 'Scholarships',
      description: 'Merit-based and need-based financial assistance to support deserving students.'
    },
    {
      icon: Briefcase,
      title: 'Industry Exposure',
      description: 'Regular workshops, seminars, and internship opportunities with leading organizations.'
    }
  ];

  const campusImages = [
    { url: 'https://images.unsplash.com/photo-1679316481049-4f6549df499f', title: 'Modern Classrooms' },
    { url: 'https://images.unsplash.com/photo-1701282557983-a5e42df83f4d', title: 'Well-Stocked Library' },
    { url: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba', title: 'Advanced Laboratories' },
    { url: 'https://images.unsplash.com/photo-1694917758847-245109d89d06', title: 'Sports Facilities' }
  ];

  return (
    <>
      <Helmet>
        <title>Kakasaheb Chavan College - Empowering Students, Building Futures</title>
        <meta name="description" content="Premier educational institution in Talmavale offering B.A. and B.Com. programs with experienced faculty, modern facilities, and comprehensive career guidance." />
      </Helmet>

      <Header />

      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1692906785597-29f285c308a4"
            alt="Campus building with students"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" style={{ letterSpacing: '-0.02em' }}>
              Empowering Students.<br />Building Futures.
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join Kakasaheb Chavan College for quality education, experienced faculty, and a pathway to success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
                <Link to="/apply-now">
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-white/10 text-white border-white/30 hover:bg-white/20">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { value: 25, suffix: '+', label: 'Years of Excellence' },
              { value: 5000, suffix: '+', label: 'Students Enrolled' },
              { value: 50, suffix: '+', label: 'Expert Faculty' },
              { value: 100, suffix: '%', label: 'Commitment' }
            ].map((stat, index) => (
              <div key={index} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <StatCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm md:text-base text-white/80">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Why choose us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Discover what makes Kakasaheb Chavan College the ideal choice for your academic journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our departments</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our diverse academic programs designed to nurture talent and build careers.
            </p>
          </div>

          {deptLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div key={i} className="h-96 bg-card rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.slice(0, 2).map((dept, index) => (
                <DepartmentCard key={dept.id} department={dept} index={index} />
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link to="/departments">
                View All Departments
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Campus highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experience our world-class infrastructure and facilities designed for holistic learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer h-64"
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Student testimonials</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hear from our students about their transformative experiences at our college.
            </p>
          </div>

          {testLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-64 bg-card rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : testimonials.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.slice(0, 3).map((testimonial, index) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">No testimonials available yet.</p>
          )}
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Start your academic journey today</h2>
            <p className="text-lg opacity-90 mb-8 leading-relaxed max-w-2xl mx-auto">
              Take the first step towards a brighter future. Apply now and join our community of learners.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
              <Link to="/apply-now">
                Apply for Admission
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default HomePage;
