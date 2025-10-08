import { motion } from "motion/react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { 
  Lightbulb, 
  Target, 
  Users, 
  Star, 
  Smartphone,
  Sparkles,
  Shield,
  Zap
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export function HomePage({ onNavigate }: HomePageProps) {
  const featuredApps = [
    {
      name: "TaskFlow Pro",
      description: "Streamline your workflow with intelligent task management and team collaboration.",
      category: "Productivity",
      platforms: ["iOS", "Android", "Web"],
      image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5NzU4NTQwfDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "MindSpace",
      description: "Your personal wellness companion for meditation, mindfulness, and mental health.",
      category: "Lifestyle",
      platforms: ["iOS", "Android"],
      image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc1OTgyNjgwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "CodeSnap",
      description: "Beautiful code screenshots and snippets sharing for developers.",
      category: "Developer Tools",
      platforms: ["Web", "iOS", "Android"],
      image: "https://images.unsplash.com/photo-1515355252367-42ae86cb92f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5ODEyMTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const whyChooseUs = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "We push boundaries with cutting-edge technology and creative solutions."
    },
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Every app undergoes rigorous testing to ensure reliability and performance."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "We prioritize user experience in every decision we make."
    },
    {
      icon: Zap,
      title: "Fast & Efficient",
      description: "Our apps are optimized for speed and efficiency without compromise."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager at TechCorp",
      content: "TaskFlow Pro has transformed how our team collaborates. It's intuitive, powerful, and exactly what we needed.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Freelance Developer",
      content: "CodeSnap makes sharing code snippets beautiful and effortless. A must-have tool for any developer!",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Wellness Coach",
      content: "MindSpace is the most comprehensive meditation app I've used. It's helping thousands of my clients.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/80 to-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
              Building{" "}
              <motion.span 
                className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Digital
              </motion.span>
              {" "}Experiences That{" "}
              <motion.span 
                className="bg-gradient-to-r from-white via-white/90 to-white bg-clip-text text-transparent inline-block relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Inspire
                <motion.span
                  className="absolute -inset-1 bg-white/20 blur-xl rounded-full -z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 mb-8">
              We develop and publish innovative mobile and web applications that make a difference in people's lives.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-transform shadow-lg shadow-black/10"
                onClick={() => {
                  onNavigate("apps");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                <Smartphone className="mr-2" size={20} />
                View Our Apps
              </Button>
              <Button 
                size="lg" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary hover:scale-105 transition-all shadow-lg shadow-black/10"
                onClick={() => {
                  onNavigate("contact");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-primary" size={32} />
                <h2>Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                To create innovative digital solutions that empower individuals and businesses to achieve their full potential. We believe technology should be accessible, intuitive, and transformative.
              </p>
              
              <div className="flex items-center gap-3 mb-4 mt-8">
                <Lightbulb className="text-accent" size={32} />
                <h2>Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground">
                To become a leading force in mobile and web application development, recognized for our commitment to quality, innovation, and user satisfaction across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1665360755361-d8cd03c82b28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NTk3Nzk1ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Olena Group Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-2xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Apps */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Featured Apps</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular applications trusted by millions of users worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredApps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <ImageWithFallback
                      src={app.image}
                      alt={app.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3>{app.name}</h3>
                      <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                        {app.category}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">{app.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {app.platforms.map((platform) => (
                        <span
                          key={platform}
                          className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
                        >
                          {platform}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              size="lg"
              onClick={() => {
                onNavigate("apps");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              View All Apps
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Olena Group */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Why Choose Olena Group</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're committed to delivering exceptional digital experiences through innovation and excellence.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#5B6FDB] to-[#FF7A1F] flex items-center justify-center">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-secondary/50 to-secondary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">What Our Users Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by thousands of satisfied users worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={18} />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p>{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4">Ready to Download Our Apps?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join millions of users who trust Olena Group applications every day.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-blue-50"
              onClick={() => {
                onNavigate("apps");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Explore All Apps
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
