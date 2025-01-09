import React from "react";
import {
  BarChart,
  Book,
  CheckCircle,
  Clock,
  GraduationCap,
  MessageCircle,
  Settings,
  Shield,
} from "lucide-react";
import Link from "next/link";
import {
  AnimatedHeader,
  PageTransition,
  FeatureCardAnimated,
} from "./components/animated_header";

const MarketingPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <AnimatedHeader
          headline="Transform Your School's Digital Experience"
          text="SomaNasi is a comprehensive school management system, designed to streamline administration, enhance learning, and connect your entire school community."
          action="Schedule a Demo"
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12 opacity-0 animate-fadeSlideUp">
              Solutions for Everyone
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link href="/student" className="block">
                <FeatureCardAnimated
                  icon={<GraduationCap className="w-8 h-8" />}
                  title="For Students"
                  description="Access learning materials, track progress, and stay connected with teachers."
                />
              </Link>
              <Link href="/teacher" className="block">
                <FeatureCardAnimated
                  icon={<Book className="w-8 h-8" />}
                  title="For Teachers"
                  description="Streamline teaching tasks and focus on student success."
                />
              </Link>
              <Link href="/administrator" className="block">
                <FeatureCardAnimated
                  icon={<Settings className="w-8 h-8" />}
                  title="For Administrators"
                  description="Manage your entire school efficiently with powerful tools and AI."
                />
              </Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12 mt-14">
              Core Benefits
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400 font-semibold mb-2">
                      Time Savings
                    </h3>
                    <p className="text-gray-600">
                      Reduce administrative workload by up to 60% through
                      automation of routine tasks:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Automated attendance tracking and reporting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>
                          Instant grade calculations and report card generation
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>
                          Smart timetable creation with conflict detection
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400 font-semibold mb-2">
                      Enhanced Security
                    </h3>
                    <p className="text-gray-600">
                      Protect sensitive information with enterprise-grade
                      security:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Role-based access control</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Regular automated backups</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Audit trails for all critical actions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400 font-semibold mb-2">
                      Data-Driven Insights
                    </h3>
                    <p className="text-gray-600">
                      Make informed decisions with comprehensive analytics:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>
                          Performance tracking across subjects and classes
                        </span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Financial analysis and forecasting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Attendance and engagement patterns</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-400 font-semibold mb-2">
                      Improved Communication
                    </h3>
                    <p className="text-gray-600">
                      Foster stronger school community relationships:
                    </p>
                    <ul className="mt-2 space-y-2 text-gray-600">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Automated parent notifications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>Digital homework and assignment tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        <span>School announcements and events management</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-purple-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12">
              Your Digital Transformation Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCardAnimated
                icon={<Clock className="w-8 h-8" />}
                title="Quick Implementation"
                description="Get up and running in weeks, not months. Our team handles data migration, setup, and staff training."
              />
              <FeatureCardAnimated
                icon={<Settings className="w-8 h-8" />}
                title="Seamless Integration"
                description="Integrate with your existing processes while gradually transitioning to more efficient digital workflows."
              />
              <FeatureCardAnimated
                icon={<Shield className="w-8 h-8" />}
                title="Continuous Support"
                description="Ongoing training, technical support, and system updates to ensure long-term success."
              />
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-400 font-bold text-center mb-12">
              Comprehensive Feature Set
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-purple-50">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Feature Category
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Included Features
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      Benefits
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Academic Management
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Curriculum planning, assessment tracking, report
                      generation
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Streamlined academic operations, better learning outcomes
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Administrative Tools
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Attendance tracking, fee management, resource allocation
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Reduced administrative burden, improved efficiency
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      Communication Platform
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Announcements, messaging, event management
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      Enhanced community engagement, better information flow
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your School?
            </h2>
            <p className="text-xl mb-8">
              Join our early partner program and help shape the future of
              education management in Kenya.
            </p>
            <div className="space-x-4">
              <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
                Schedule a Demo
              </button>
              <a
                href="mailto:somanasi@protonmail.com"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default MarketingPage;
