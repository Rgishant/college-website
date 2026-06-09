import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Calendar, FileText, Award, Library, Monitor } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AcademicsPage = () => {
  const programs = [
    {
      title: 'Bachelor of Arts (B.A.)',
      description: 'Comprehensive liberal arts program covering humanities, social sciences, and languages.',
      subjects: ['English', 'History', 'Political Science', 'Economics', 'Sociology', 'Psychology'],
      duration: '3 Years',
      eligibility: '12th Pass (Any Stream)'
    },
    {
      title: 'Bachelor of Commerce (B.Com.)',
      description: 'Professional commerce program focusing on accounting, finance, and business management.',
      subjects: ['Accounting', 'Business Law', 'Economics', 'Finance', 'Marketing', 'Taxation'],
      duration: '3 Years',
      eligibility: '12th Pass (Commerce/Science)'
    }
  ];

  const academicCalendar = [
    { month: 'June', event: 'Academic Year Begins' },
    { month: 'July', event: 'First Semester Classes Start' },
    { month: 'October', event: 'Mid-Semester Examinations' },
    { month: 'December', event: 'First Semester End Exams' },
    { month: 'January', event: 'Second Semester Begins' },
    { month: 'March', event: 'Mid-Semester Examinations' },
    { month: 'May', event: 'Final Examinations' }
  ];

  const scholarships = [
    { name: 'Merit Scholarship', criteria: 'Top 10% students based on academic performance', amount: 'Up to 50% fee waiver' },
    { name: 'Need-Based Scholarship', criteria: 'Students from economically disadvantaged backgrounds', amount: 'Up to 75% fee waiver' },
    { name: 'Sports Scholarship', criteria: 'State/National level sports achievers', amount: 'Up to 30% fee waiver' },
    { name: 'Minority Scholarship', criteria: 'Students from minority communities', amount: 'As per government norms' }
  ];

  const resources = [
    { icon: Library, title: 'Central Library', description: 'Over 10,000 books, journals, and digital resources' },
    { icon: Monitor, title: 'E-Learning Platform', description: 'Online lectures, study materials, and interactive sessions' },
    { icon: FileText, title: 'Study Materials', description: 'Comprehensive notes, question banks, and reference materials' }
  ];

  return (
    <>
      <Helmet>
        <title>{`Academics - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Explore our B.A. and B.Com. programs, academic calendar, examination information, scholarships, and learning resources." />
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
              Academic programs
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Comprehensive undergraduate programs designed to build strong foundations and career readiness.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-primary/20">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{program.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">{program.description}</p>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Core Subjects:</p>
                      <div className="flex flex-wrap gap-2">
                        {program.subjects.map((subject, i) => (
                          <span key={i} className="px-3 py-1 bg-muted rounded-lg text-sm text-foreground">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                      <div>
                        <p className="text-sm text-muted-foreground">Duration</p>
                        <p className="font-semibold text-foreground">{program.duration}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Eligibility</p>
                        <p className="font-semibold text-foreground">{program.eligibility}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Academic calendar</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  {academicCalendar.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-foreground">{item.month}</p>
                        <p className="text-sm text-muted-foreground">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Examination information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Exam Timetables</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Detailed schedules published 2 weeks before examinations
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Results</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Results declared within 30 days of examination completion
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">Notices</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Important updates and announcements posted on notice board
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Scholarship opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {scholarships.map((scholarship, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-lg mb-3 text-foreground">{scholarship.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{scholarship.criteria}</p>
                      <p className="text-sm font-medium text-primary">{scholarship.amount}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Learning resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {resources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <resource.icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3 text-foreground">{resource.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{resource.description}</p>
                    </CardContent>
                  </Card>
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

export default AcademicsPage;
