"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Building2,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react";

import { Alert, AlertDescription } from "@/app/components/alert";
import { Card, CardContent } from "@/app/components/card";

const DemoScheduler = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "administrator",
    participantCount: "1-5",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Email sent successfully!");
        setSubmitted(true);
      } else {
        console.error("Failed to send email", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-xl">
          <CardContent className="pt-6">
            <Alert>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <AlertDescription className="text-xl font-semibold mb-2">
                  Demo Schedule Request Received!
                </AlertDescription>
                <p className="text-gray-600">
                  We&apos;ll contact you within 24 hours to confirm your demo
                  session. Check your email for further details.
                </p>
              </div>
            </Alert>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Schedule a Demo
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how SomaNasi can transform your educational institution.
            Schedule a personalized demo with our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <Card className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    title="Name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    title="Email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    title="Phone"
                    type="tel"
                    name="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Organization
                  </label>
                  <input
                    title="Organization"
                    type="text"
                    name="organization"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Your Role
                  </label>
                  <select
                    title="Role"
                    name="role"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.role}
                    onChange={handleChange}
                  >
                    <option value="administrator">Administrator</option>
                    <option value="teacher">Teacher</option>
                    <option value="head_teacher">Head Teacher</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Participants
                  </label>
                  <select
                    title="Number of Participants"
                    name="participantCount"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.participantCount}
                    onChange={handleChange}
                  >
                    <option value="1-5">1-5</option>
                    <option value="6-10">6-10</option>
                    <option value="11-20">11-20</option>
                    <option value="20+">20+</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Date
                  </label>
                  <input
                    title="Preferred Date"
                    type="date"
                    name="preferredDate"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time
                  </label>
                  <select
                    title="Preferred Time"
                    name="preferredTime"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (1PM - 4PM)</option>
                    <option value="evening">Evening (5PM - 7PM)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your specific needs or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>Schedule Demo</span>
              </button>
            </form>
          </Card>

          {/* Info Section */}
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span>45-minute personalized demonstration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span>Q&A session with our education specialists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Building2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span>Customized solutions for your institution</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Contact Options</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-6 h-6 text-purple-600" />
                  <span>demo@somanasi.edu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-600" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-purple-600" />
                  <span>Live chat available 9AM-5PM EST</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoScheduler;
