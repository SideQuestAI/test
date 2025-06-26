import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Monitor,
  Download as DownloadIcon,
  Star,
  Shield,
  Zap,
  ArrowRight,
  Apple,
  Palette,
  CheckCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Particles from "@/components/ui/particles";
import FloatingShapes from "@/components/ui/floating-shapes";
import MorphingButton from "@/components/ui/morphing-button";

const Download = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <Particles count={80} />
        <FloatingShapes count={10} />

        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 30% 70%, rgba(54, 172, 255, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Navigation */}
      <motion.nav
        className="sticky top-0 z-50 glass border-b border-white/10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center glow"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-sm">SQ</span>
                </motion.div>
                <span className="font-display font-bold text-xl text-neon animate-text-glow">
                  SideQuestAI
                </span>
              </Link>
            </motion.div>

            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }}>
                <Link
                  to="/"
                  className="text-slate-300 hover:text-white transition-colors font-medium relative group"
                >
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>

              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 animate-pulse-glow">
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 glass text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8 glow"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <DownloadIcon className="w-4 h-4" />
            </motion.div>
            <span>Download SideQuestAI</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl font-display font-bold mb-6"
          >
            Get the{" "}
            <motion.span
              className="text-gradient inline-block"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              SideQuestAI
            </motion.span>{" "}
            App
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Start your side hustle journey today. Download our AI-powered app
            and get personalized step-by-step courses for any side hustle you
            can imagine.
          </motion.p>

          {/* Download Cards */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={itemVariants}>
              <Card className="p-8 glass border-2 border-white/20 hover:border-white/40 hover-lift glow-purple h-full">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Smartphone className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-display font-bold text-white">
                    Mobile App
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400">
                    iOS & Android
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <MorphingButton className="w-full">
                      <Apple className="w-5 h-5" />
                      Download for iOS
                    </MorphingButton>
                    <MorphingButton variant="secondary" className="w-full">
                      <DownloadIcon className="w-5 h-5" />
                      Download for Android
                    </MorphingButton>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Requires iOS 14.0+ or Android 8.0+
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 glass border-2 border-white/20 hover:border-white/40 hover-lift glow-pink h-full">
                <CardHeader className="text-center pb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 glow"
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                  >
                    <Monitor className="w-8 h-8 text-white" />
                  </motion.div>
                  <CardTitle className="text-2xl font-display font-bold text-white">
                    Desktop App
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-400">
                    Windows, Mac & Linux
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <MorphingButton className="w-full">
                      <DownloadIcon className="w-5 h-5" />
                      Download for Desktop
                    </MorphingButton>
                    <MorphingButton variant="secondary" className="w-full">
                      <Palette className="w-5 h-5" />
                      Web Version
                    </MorphingButton>
                  </div>
                  <p className="text-sm text-slate-500 text-center">
                    Available for all major operating systems
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Why Download <span className="text-gradient">SideQuestAI?</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Get the full experience with our feature-rich mobile and desktop
              applications
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Zap,
                title: "Offline Access",
                description:
                  "Download your courses and access them anywhere, even without internet connection",
                color: "blue",
              },
              {
                icon: Star,
                title: "Premium Features",
                description:
                  "Unlock advanced AI capabilities, progress tracking, and personalized recommendations",
                color: "purple",
              },
              {
                icon: Shield,
                title: "Secure & Private",
                description:
                  "Your data is encrypted and stored securely. We respect your privacy completely",
                color: "pink",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={itemVariants}>
                <motion.div
                  className="text-center group"
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className={`w-12 h-12 bg-${feature.color}-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-${feature.color}-500/30 glow`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    <feature.icon
                      className={`w-6 h-6 text-${feature.color}-400`}
                    />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-display font-bold mb-4 text-white">
              Experience the Future of Learning
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Intuitive interface, powerful AI, seamless experience across all
              devices
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-display font-bold mb-6 text-white">
                Everything you need in one app
              </h3>
              <div className="space-y-4">
                {[
                  "AI-powered course generation",
                  "Progress tracking & analytics",
                  "Offline content access",
                  "Cross-device synchronization",
                  "Community features",
                  "24/7 AI assistance",
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div className="glass p-8 rounded-3xl border-2 border-white/20 glow">
                <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <Monitor className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                    <p className="text-slate-400">App Preview Coming Soon</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="glass p-16 rounded-3xl border-2 border-white/20 glow-pink relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10"
              animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <motion.h2
                className="text-4xl font-display font-bold mb-6 text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Ready to Start Your Side Hustle Journey?
              </motion.h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Join thousands of entrepreneurs who are already building
                successful side hustles with AI guidance
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <MorphingButton size="lg">
                  <DownloadIcon className="w-5 h-5" />
                  Download Now
                </MorphingButton>
                <MorphingButton variant="secondary" size="lg">
                  <ArrowRight className="w-5 h-5" />
                  Learn More
                </MorphingButton>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 glass border-t border-white/10 text-white py-12 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center space-x-2 mb-4 md:mb-0"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center glow">
                <span className="text-white font-bold text-sm">SQ</span>
              </div>
              <span className="font-display font-bold text-xl text-neon">
                SideQuestAI
              </span>
            </motion.div>

            <div className="flex space-x-6 text-sm text-slate-400">
              <Link
                to="/"
                className="hover:text-white transition-colors duration-300 hover:scale-110"
              >
                Home
              </Link>
              {["Privacy", "Terms", "Support"].map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <div className="border-t border-slate-700/50 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 SideQuestAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Download;
