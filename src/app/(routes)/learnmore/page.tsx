import { Header } from "@/app/components/header";
import {
  BarChart,
  CheckCircle,
  Clock,
  MessageCircle,
  Shield,
} from "lucide-react";

// Learn More Page
export const LearnMorePage = () => (
  <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
    {/* Hero Section */}
    <Header
      headline="Transforming Education in Kenya"
      text="Discover how SomaNasi is revolutionizing school management and enhancing educational outcomes across Kenya."
    />

    {/* Core Benefits */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Core Benefits</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Time Savings</h3>
                <p className="text-gray-600">
                  Reduce administrative workload by up to 60% through automation
                  of routine tasks:
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
                <h3 className="text-xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-600">
                  Protect sensitive information with enterprise-grade security:
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
                <h3 className="text-xl font-semibold mb-2">
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
                <h3 className="text-xl font-semibold mb-2">
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

    {/* Digital Transformation Journey */}
    <section className="py-16 bg-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Your Digital Transformation Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-4">1</div>
            <h3 className="text-xl font-semibold mb-4">Quick Implementation</h3>
            <p className="text-gray-600">
              Get up and running in weeks, not months. Our team handles data
              migration, setup, and staff training.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-4">2</div>
            <h3 className="text-xl font-semibold mb-4">Seamless Integration</h3>
            <p className="text-gray-600">
              Integrate with your existing processes while gradually
              transitioning to more efficient digital workflows.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-purple-600 mb-4">3</div>
            <h3 className="text-xl font-semibold mb-4">Continuous Support</h3>
            <p className="text-gray-600">
              Ongoing training, technical support, and system updates to ensure
              long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Feature Comparison */}
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
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
                  Curriculum planning, assessment tracking, report generation
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
          Join our early partner program and help shape the future of education
          management in Kenya.
        </p>
        <div className="space-x-4">
          <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
            Schedule a Demo
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  </div>
);

export default LearnMorePage;
