import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Trophy, Users, Heart } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventCard from '@/components/EventCard';
import GalleryGrid from '@/components/GalleryGrid';
import { useEvents } from '@/hooks/useEvents';

const CampusLifePage = () => {
  const { events, loading } = useEvents();

  const activities = [
    { icon: Music, title: 'Cultural Events', description: 'Annual festivals, talent shows, and cultural programs celebrating diversity and creativity.' },
    { icon: Trophy, title: 'Competitions', description: 'Inter-college debates, quizzes, sports tournaments, and academic competitions.' },
    { icon: Users, title: 'Student Clubs', description: 'Active clubs for arts, literature, science, technology, and social service.' },
    { icon: Heart, title: 'Community Service', description: 'NSS activities, blood donation camps, and social awareness programs.' }
  ];

  const sports = [
    { category: 'Indoor Sports', items: ['Table Tennis', 'Chess', 'Carrom', 'Badminton'] },
    { category: 'Outdoor Sports', items: ['Cricket', 'Football', 'Volleyball', 'Athletics', 'Kabaddi'] }
  ];

  const clubs = [
    { name: 'NSS (National Service Scheme)', description: 'Community service and social development activities' },
    { name: 'Cultural Committee', description: 'Organizing cultural events, festivals, and talent shows' },
    { name: 'Student Development Cell', description: 'Personality development, soft skills, and career guidance' },
    { name: 'Literary Club', description: 'Debates, creative writing, and literary competitions' }
  ];

  const galleryImages = [
    { url: 'https://images.unsplash.com/photo-1549474978-525097e63da1', title: 'Annual Cultural Festival' },
    { url: 'https://images.unsplash.com/photo-1616388560850-89b6a8df572d', title: 'Sports Day Celebration' },
    { url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1', title: 'Academic Seminar' },
    { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87', title: 'Student Activities' },
    { url: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846', title: 'Campus Events' },
    { url: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644', title: 'Group Activities' }
  ];

  return (
    <>
      <Helmet>
        <title>{`Campus Life - Kakasaheb Chavan College`}</title>
        <meta name="description" content="Experience vibrant campus life with cultural events, sports, student clubs, and community service activities at Kakasaheb Chavan College." />
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
              Campus life
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              A vibrant community where learning extends beyond classrooms through diverse activities and experiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Student activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {activities.map((activity, index) => (
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
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{activity.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Sports facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {sports.map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-foreground">{sport.category}</h3>
                    <ul className="space-y-2">
                      {sport.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Student clubs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-2 text-foreground">{club.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{club.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {!loading && events.length > 0 && (
            <>
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Upcoming events</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                {events.slice(0, 3).map((event, index) => (
                  <EventCard key={event.id} event={event} index={index} />
                ))}
              </div>
            </>
          )}

          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">Campus gallery</h2>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CampusLifePage;
