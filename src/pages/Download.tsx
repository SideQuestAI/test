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
} from "lucide-react";
import { Link } from "react-router-dom";

const Download = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SQ</span>
              </div>
              <span className="font-display font-bold text-xl text-slate-900">
                SideQuestAI
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                Home
              </Link>
              <Badge
                variant="secondary"
                className="bg-brand-100 text-brand-700 border-brand-200"
              >
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-brand-100 text-brand-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <DownloadIcon className="w-4 h-4" />
            <span>Download SideQuestAI</span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-display font-bold text-slate-900 mb-6">
            Get the <span className="text-gradient">SideQuestAI</span> App
          </h1>

          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Start your side hustle journey today. Download our AI-powered app
            and get personalized step-by-step courses for any side hustle you
            can imagine.
          </p>

          {/* Download Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold">
                  Mobile App
                </CardTitle>
                <CardDescription className="text-lg">
                  iOS & Android
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg font-medium">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download for iOS
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-slate-300 hover:border-brand-300 py-6 text-lg font-medium"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download for Android
                  </Button>
                </div>
                <p className="text-sm text-slate-500 text-center">
                  Requires iOS 14.0+ or Android 8.0+
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-brand-200">
              <CardHeader className="text-center pb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-display font-bold">
                  Desktop App
                </CardTitle>
                <CardDescription className="text-lg">
                  Windows, Mac & Linux
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button className="w-full bg-gradient-brand hover:opacity-90 text-white py-6 text-lg font-medium">
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Download for Desktop
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-slate-300 hover:border-brand-300 py-6 text-lg font-medium"
                  >
                    <DownloadIcon className="w-5 h-5 mr-2" />
                    Web Version
                  </Button>
                </div>
                <p className="text-sm text-slate-500 text-center">
                  Available for all major operating systems
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
              Why Download SideQuestAI?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get the full experience with our feature-rich mobile and desktop
              applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">
                Offline Access
              </h3>
              <p className="text-slate-600">
                Download your courses and access them anywhere, even without
                internet connection
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">
                Premium Features
              </h3>
              <p className="text-slate-600">
                Unlock advanced AI capabilities, progress tracking, and
                personalized recommendations
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-display font-semibold text-slate-900 mb-2">
                Secure & Private
              </h3>
              <p className="text-slate-600">
                Your data is encrypted and stored securely. We respect your
                privacy completely
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brand-600 via-purple-600 to-pink-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-display font-bold text-white mb-6">
            Ready to Start Your Side Hustle Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who are already building successful
            side hustles with AI guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-brand-600 hover:bg-gray-50 py-6 px-8 text-lg font-medium"
            >
              <DownloadIcon className="w-5 h-5 mr-2" />
              Download Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 py-6 px-8 text-lg font-medium"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-brand rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SQ</span>
              </div>
              <span className="font-display font-bold text-xl">
                SideQuestAI
              </span>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Support
              </a>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 SideQuestAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Download;
