import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FormField from '@/components/FormField';
import TimeSlotSelector from '@/components/TimeSlotSelector';
import ConfirmationCard from '@/components/ConfirmationCard';
import pb from '@/lib/pocketbaseClient';

const ApplyNowPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [appointmentId, setAppointmentId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    degree: '',
    department: '',
    currentQualification: '',
    preferredCommunication: '',
    questions: ''
  });

  const timeSlots = [
    { value: '11:00', time: '11:00 AM', duration: '30 Minutes' },
    { value: '11:30', time: '11:30 AM', duration: '30 Minutes' },
    { value: '12:00', time: '12:00 PM', duration: '30 Minutes' },
    { value: '12:30', time: '12:30 PM', duration: '30 Minutes' },
    { value: '14:00', time: '2:00 PM', duration: '30 Minutes' },
    { value: '14:30', time: '2:30 PM', duration: '30 Minutes' }
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    if (currentStep === 1 && (!selectedDate || !selectedTime)) {
      toast('Please select both date and time.');
      return;
    }
    if (currentStep === 2) {
      const required = ['firstName', 'lastName', 'email', 'phone', 'degree', 'department'];
      const missing = required.filter(field => !formData[field]);
      if (missing.length > 0) {
        toast('Please fill all required fields.');
        return;
      }
    }
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    if (!confirmed) {
      toast('Please confirm that the information is accurate.');
      return;
    }

    setLoading(true);
    try {
      const record = await pb.collection('appointments').create({
        date: format(selectedDate, 'yyyy-MM-dd'),
        time: selectedTime,
        duration: '30 Minutes',
        ...formData,
        status: 'Confirmed'
      }, { $autoCancel: false });

      setAppointmentId(record.id);
      setCurrentStep(4);
      toast('Appointment confirmed successfully.');
    } catch (error) {
      toast('Failed to book appointment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const createGoogleCalendarEvent = () => {
    const eventDate = format(selectedDate, 'yyyyMMdd');
    const startTime = selectedTime.replace(':', '');
    const title = encodeURIComponent('Kakasaheb Chavan College Admission Consultation');
    const location = encodeURIComponent('Kakasaheb Chavan College, Talmavale, Near Jalgaon');
    const description = encodeURIComponent('Admission guidance session');
    
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${eventDate}T${startTime}00/${eventDate}T${startTime}00&location=${location}&details=${description}`;
    window.open(url, '_blank');
  };

  const progress = (currentStep / 4) * 100;

  return (
    <>
      <Helmet>
        <title>{`Apply Now - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Book your admission consultation appointment at Kakasaheb Chavan College. Simple 4-step process to schedule your visit." />
      </Helmet>

      <Header />

      <section className="py-12 bg-background min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
              Book your appointment
            </h1>
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Step {currentStep} of 4</span>
              <span>{progress.toFixed(0)}% Complete</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Select date and time</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <Label className="text-foreground mb-2 block">Choose a date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date() || date.getDay() === 0}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {selectedDate && (
                      <div>
                        <Label className="text-foreground mb-4 block">Select time slot</Label>
                        <TimeSlotSelector
                          slots={timeSlots}
                          selectedSlot={selectedTime}
                          onSelect={setSelectedTime}
                        />
                      </div>
                    )}

                    {selectedDate && selectedTime && (
                      <Card className="bg-muted">
                        <CardContent className="p-4">
                          <p className="text-sm font-medium text-foreground mb-2">Appointment Summary</p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Date:</span> {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Time:</span> {timeSlots.find(s => s.value === selectedTime)?.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium">Duration:</span> 30 Minutes
                          </p>
                        </CardContent>
                      </Card>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Tell us about yourself</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="First Name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your first name"
                      />
                      <FormField
                        label="Last Name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        placeholder="Enter your last name"
                      />
                    </div>

                    <FormField
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />

                    <FormField
                      label="Mobile Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 1234567890"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        label="Degree"
                        name="degree"
                        type="select"
                        value={formData.degree}
                        onChange={handleChange}
                        required
                        placeholder="Select degree"
                        options={[
                          { value: 'B.A.', label: 'B.A.' },
                          { value: 'B.Com.', label: 'B.Com.' }
                        ]}
                      />
                      <FormField
                        label="Department"
                        name="department"
                        type="select"
                        value={formData.department}
                        onChange={handleChange}
                        required
                        placeholder="Select department"
                        options={[
                          { value: 'Arts', label: 'Arts' },
                          { value: 'Commerce', label: 'Commerce' }
                        ]}
                      />
                    </div>

                    <FormField
                      label="Current Qualification"
                      name="currentQualification"
                      value={formData.currentQualification}
                      onChange={handleChange}
                      placeholder="e.g., 12th Pass, Diploma"
                    />

                    <FormField
                      label="Preferred Communication"
                      name="preferredCommunication"
                      type="select"
                      value={formData.preferredCommunication}
                      onChange={handleChange}
                      placeholder="Select preference"
                      options={[
                        { value: 'Email', label: 'Email' },
                        { value: 'Phone', label: 'Phone' },
                        { value: 'WhatsApp', label: 'WhatsApp' }
                      ]}
                    />

                    <FormField
                      label="Questions or Comments"
                      name="questions"
                      type="textarea"
                      value={formData.questions}
                      onChange={handleChange}
                      placeholder="Any specific questions or topics you'd like to discuss?"
                      rows={4}
                    />
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-foreground">Review your appointment</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Appointment Details</p>
                        <div className="bg-muted p-4 rounded-xl space-y-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Date:</span> {format(selectedDate, 'EEEE, MMMM d, yyyy')}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Time:</span> {timeSlots.find(s => s.value === selectedTime)?.time}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Duration:</span> 30 Minutes
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-foreground mb-2">Personal Information</p>
                        <div className="bg-muted p-4 rounded-xl space-y-2">
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Name:</span> {formData.firstName} {formData.lastName}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Email:</span> {formData.email}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Phone:</span> {formData.phone}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Degree:</span> {formData.degree}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-medium text-foreground">Department:</span> {formData.department}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 bg-muted rounded-xl">
                      <Checkbox
                        id="confirm"
                        checked={confirmed}
                        onCheckedChange={setConfirmed}
                      />
                      <Label htmlFor="confirm" className="text-sm text-muted-foreground cursor-pointer">
                        I confirm that the information provided is accurate and I understand that this appointment is for admission consultation.
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {currentStep === 4 && appointmentId && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="text-center">
                  <CardContent className="p-12">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                      className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle2 className="w-12 h-12 text-primary" />
                    </motion.div>

                    <h2 className="text-3xl font-bold mb-4 text-foreground">Appointment confirmed</h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Thank you for scheduling your appointment with Kakasaheb Chavan College. We look forward to meeting you.
                    </p>

                    <div className="max-w-md mx-auto mb-8">
                      <ConfirmationCard appointment={{
                        date: format(selectedDate, 'yyyy-MM-dd'),
                        time: timeSlots.find(s => s.value === selectedTime)?.time,
                        firstName: formData.firstName,
                        lastName: formData.lastName
                      }} />
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      A confirmation email has been sent to {formData.email}. You will also receive a reminder 24 hours before your appointment.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button onClick={createGoogleCalendarEvent} variant="outline">
                        Add to Google Calendar
                      </Button>
                      <Button onClick={() => navigate('/')}>
                        Back to Home
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>

          {currentStep < 4 && (
            <div className="flex justify-between mt-8">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              {currentStep < 3 ? (
                <Button onClick={handleNext}>
                  Continue
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button onClick={handleSubmit} disabled={loading || !confirmed}>
                  {loading ? 'Confirming...' : 'Confirm Booking'}
                </Button>
              )}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ApplyNowPage;
