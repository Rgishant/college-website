import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Eye, Award, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    { icon: Target, title: 'Excellence', description: 'Striving for the highest standards in education and student development.' },
    { icon: Eye, title: 'Innovation', description: 'Embracing modern teaching methods and technology for effective learning.' },
    { icon: Award, title: 'Integrity', description: 'Upholding ethical values and fostering a culture of honesty and respect.' },
    { icon: Users, title: 'Inclusivity', description: 'Creating an environment where every student feels valued and supported.' }
  ];

  const achievements = [
    { year: '1999', title: 'College Established', description: 'Founded with a vision to provide quality education in rural Maharashtra.' },
    { year: '2005', title: 'Accreditation', description: 'Received recognition from the University Grants Commission (UGC).' },
    { year: '2012', title: 'Infrastructure Expansion', description: 'Inaugurated new academic blocks and modern laboratories.' },
    { year: '2018', title: 'Digital Campus', description: 'Implemented smart classrooms and e-learning platforms.' },
    { year: '2024', title: '5000+ Alumni', description: 'Celebrated milestone of graduating over 5000 successful students.' }
  ];

  return (
    <>
      <Helmet>
        <title>{`About Us - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Learn about Kakasaheb Chavan College's history, vision, mission, and commitment to providing quality education in Talmavale, Maharashtra." />
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
              About Kakasaheb Chavan College
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              A legacy of excellence in education, empowering students since 1999.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-foreground">Our history</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Established in 1999, Kakasaheb Chavan College has been a beacon of quality education in Talmavale, near Jalgaon, Maharashtra. Founded with the vision of making higher education accessible to students in rural areas, our college has grown from a small institution to a thriving academic community.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Over the past 25 years, we have consistently maintained our commitment to academic excellence, student welfare, and holistic development. Our dedicated faculty, modern infrastructure, and student-centric approach have helped thousands of students achieve their dreams.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, we stand proud as one of the leading colleges in the region, offering comprehensive programs in Arts and Commerce, with a strong focus on career readiness and personal growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585"
                alt="College campus historical view"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be a premier institution of higher learning that transforms lives through quality education, innovative teaching, and holistic development, preparing students to excel in a dynamic global environment.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Our mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and high-quality education that nurtures critical thinking, creativity, and ethical values, while fostering an inclusive learning environment that empowers every student to reach their full potential.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Core values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Principal's message</h2>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-32 h-32 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-16 h-16 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "Welcome to Kakasaheb Chavan College. As the Principal, I am honored to lead an institution that has been shaping young minds and building futures for over two decades. Our commitment to academic excellence, combined with our focus on character development and practical skills, ensures that our students are well-prepared for the challenges of tomorrow."
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    "We believe that education is not just about acquiring knowledge, but about developing critical thinking, creativity, and a sense of social responsibility. Our dedicated faculty, modern facilities, and comprehensive support systems create an environment where every student can thrive and achieve their aspirations."
                  </p>
                  <p className="text-muted-foreground leading-relaxed italic">
                    "I invite you to join our vibrant academic community and embark on a transformative educational journey that will open doors to endless possibilities."
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">Dr. Rajesh Kumar</p>
                    <p className="text-sm text-muted-foreground">Principal, Kakasaheb Chavan College</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Our achievements</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <Card>
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-primary mb-2">{achievement.year}</div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">{achievement.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutPage;
