import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, CheckCircle, DollarSign, Award, ArrowRight, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdmissionsPage = () => {
  const eligibility = [
    { program: 'B.A. (Bachelor of Arts)', requirement: '12th Pass from any recognized board (Any Stream)' },
    { program: 'B.Com. (Bachelor of Commerce)', requirement: '12th Pass from recognized board (Commerce/Science preferred)' }
  ];

  const documents = [
    '10th Mark Sheet and Certificate',
    '12th Mark Sheet and Certificate',
    'Transfer Certificate (TC)',
    'Migration Certificate (if applicable)',
    'Caste Certificate (for reserved category)',
    'Income Certificate (for scholarship)',
    'Passport Size Photographs (4 copies)',
    'Aadhar Card Copy'
  ];

  const feeStructure = [
    { category: 'General Category', tuition: '₹12,000', other: '₹3,000', total: '₹15,000' },
    { category: 'Reserved Category', tuition: '₹8,000', other: '₹3,000', total: '₹11,000' },
    { category: 'Management Quota', tuition: '₹18,000', other: '₹3,000', total: '₹21,000' }
  ];

  const scholarships = [
    'Merit-based scholarships for top performers',
    'Need-based financial assistance',
    'Government scholarships for SC/ST/OBC students',
    'Sports scholarships for state/national level players'
  ];

  const timeline = [
    { step: '1', title: 'Online Application', description: 'Fill the application form and upload required documents' },
    { step: '2', title: 'Document Verification', description: 'Submit original documents for verification at college office' },
    { step: '3', title: 'Fee Payment', description: 'Pay admission fees through online or offline mode' },
    { step: '4', title: 'Enrollment', description: 'Complete enrollment process and receive student ID' }
  ];

  return (
    <>
      <Helmet>
        <title>{`Admissions - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Apply for B.A. and B.Com. programs at Kakasaheb Chavan College. Learn about eligibility, documents, fees, and admission process." />
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
              Admissions
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed mb-8">
              Begin your journey towards academic excellence and personal growth.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8">
              <Link to="/apply-now">
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Admission process</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Our admission process is designed to be simple and transparent. We welcome students from all backgrounds who are passionate about learning and committed to their academic goals. Follow these steps to secure your place at Kakasaheb Chavan College.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="relative"
                    >
                      <div className="text-center">
                        <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                          {item.step}
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-1/2" />
                      )}
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Eligibility criteria</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {eligibility.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-semibold text-lg mb-2 text-foreground">{item.program}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.requirement}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Required documents</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {documents.map((doc, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{doc}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Fee structure</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Category</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Tuition Fee</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Other Fees</th>
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Total (Per Year)</th>
                  </tr>
                </thead>
                <tbody>
                  {feeStructure.map((fee, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="border-b border-border hover:bg-muted transition-colors"
                    >
                      <td className="py-4 px-4 text-muted-foreground">{fee.category}</td>
                      <td className="py-4 px-4 text-muted-foreground">{fee.tuition}</td>
                      <td className="py-4 px-4 text-muted-foreground">{fee.other}</td>
                      <td className="py-4 px-4 font-semibold text-foreground">{fee.total}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">Scholarship opportunities</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {scholarships.map((scholarship, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{scholarship}</span>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="inline-block border-2 border-primary/20">
              <CardContent className="p-12">
                <Calendar className="w-16 h-16 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to apply?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
                  Start your application today and take the first step towards a successful academic career.
                </p>
                <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                  <Link to="/apply-now">
                    Begin Application
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdmissionsPage;
