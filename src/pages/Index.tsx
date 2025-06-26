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
  ArrowRight,
  Brain,
  Target,
  Rocket,
  Download,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SQ</span>
              </div>
              <span className="font-display font-bold text-xl text-slate-900">
                SideQuestAI
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                to="/download"
                className="text-slate-600 hover:text-slate-900 transition-colors font-medium"
              >
                Download
              </Link>
              <Button className="bg-gradient-brand hover:opacity-90 text-white">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in-up">
              <Brain className="w-4 h-4" />
              <span>AI-Powered Side Hustle Education</span>
            </div>

            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-bold text-slate-900 mb-8 animate-fade-in-up">
              Your <span className="text-gradient">AI Mentor</span>
              <br />
              for Side Hustles
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
              Tell us your side hustle idea, and our AI will generate a complete
              step-by-step course with milestones to turn your vision into
              reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Button
                size="lg"
                className="bg-gradient-brand hover:opacity-90 text-white py-6 px-8 text-lg font-medium"
              >
                <Rocket className="mr-2 w-5 h-5" />
                Start Your Journey
              </Button>
              <Link to="/download">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-slate-300 hover:border-brand-300 py-6 px-8 text-lg font-medium"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download App
                </Button>
              </Link>
            </div>
          </div>

          {/* Demo Card */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-2xl border-2 border-white/50 backdrop-blur-sm animate-fade-in-up">
              <div className="text-center mb-6">
                <Badge
                  variant="secondary"
                  className="bg-green-100 text-green-700 border-green-200"
                >
                  Live Demo
                </Badge>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 mb-6">
                <p className="text-lg text-slate-700 mb-4">
                  <span className="font-medium text-brand-600">You:</span> "I
                  want to start a social media marketing agency"
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-brand-600 font-medium text-sm">
                        1
                      </span>
                    </div>
                    <p className="text-slate-700">
                      Build a professional portfolio with 3 sample campaigns
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-brand-600 font-medium text-sm">
                        2
                      </span>
                    </div>
                    <p className="text-slate-700">
                      Master Facebook Ads Manager and Google Ads fundamentals
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-brand-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-brand-600 font-medium text-sm">
                        3
                      </span>
                    </div>
                    <p className="text-slate-700">
                      Land your first 3 clients using cold outreach strategies
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-center text-slate-600">
                <span className="font-medium text-brand-600">SideQuestAI:</span>{" "}
                Generates a complete 12-week course with actionable milestones
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
              How <span className="text-gradient">SideQuestAI</span> Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three simple steps to transform any side hustle idea into a
              structured learning path
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                1. Share Your Idea
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Tell our AI about the side hustle you want to pursue. Be as
                specific or general as you like.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                2. AI Generates Course
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our AI analyzes your idea and creates a comprehensive course
                with clear milestones and action steps.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">
                3. Start Building
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Follow your personalized roadmap and track your progress as you
                build your side hustle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-bold text-slate-900 mb-6">
              Why Choose SideQuestAI?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Cutting-edge AI technology meets practical business education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-brand-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Instant Course Generation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Get a complete course outline in seconds, not weeks. Our AI
                  understands business fundamentals and market dynamics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Clear Milestones
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Break down complex business goals into achievable steps with
                  specific deadlines and success metrics.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-pink-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Personalized Learning
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Courses adapt to your experience level, available time, and
                  learning preferences for maximum effectiveness.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Market Intelligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Get insights into market trends, competition analysis, and
                  proven strategies for your specific niche.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Continuous Updates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Your course evolves as you progress, with new recommendations
                  and adjustments based on your achievements.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="p-6 border-2 border-white hover:border-brand-200 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-display font-semibold">
                  Action-Oriented
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  Every lesson includes specific tasks and deliverables to keep
                  you moving forward with real progress.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-brand">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-display font-bold text-white mb-6">
            Ready to Turn Your Idea Into Reality?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join the AI-powered revolution in entrepreneurial education. Your
            side hustle journey starts with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-50 py-6 px-8 text-lg font-medium"
            >
              <Rocket className="mr-2 w-5 h-5" />
              Start Your Course
            </Button>
            <Link to="/download">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 py-6 px-8 text-lg font-medium"
              >
                <Download className="mr-2 w-5 h-5" />
                Download App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">SQ</span>
                </div>
                <span className="font-display font-bold text-xl">
                  SideQuestAI
                </span>
              </div>
              <p className="text-slate-400 mb-4 max-w-sm">
                Empowering entrepreneurs with AI-driven education for successful
                side hustles.
              </p>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4">Product</h3>
              <div className="space-y-2 text-slate-400">
                <Link
                  to="/download"
                  className="block hover:text-white transition-colors"
                >
                  Download
                </Link>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Features
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  How it Works
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display font-semibold mb-4">Support</h3>
              <div className="space-y-2 text-slate-400">
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Contact
                </a>
                <a
                  href="#"
                  className="block hover:text-white transition-colors"
                >
                  Privacy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 SideQuestAI. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
