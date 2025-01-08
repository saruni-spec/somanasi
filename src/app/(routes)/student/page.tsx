import React from "react";
import { BarChart, MessageCircle, Book } from "lucide-react";
import {
  AnimatedHeader,
  FeatureCardAnimated,
  PageTransition,
} from "@/app/components/animated_header";

// pages/student.tsx
const StudentPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <AnimatedHeader
        headline="Your Learning Journey, Simplified"
        text="Access your coursework, track your progress, and collaborate with classmates - all in one place."
        variant="student"
      />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCardAnimated
              icon={<Book className="w-8 h-8" />}
              title="Digital Learning Resources"
              description="Access all your course materials, assignments, and resources in one organized platform."
            />
            <FeatureCardAnimated
              icon={<BarChart className="w-8 h-8" />}
              title="Track Your Progress"
              description="Monitor your grades, attendance, and performance analytics in real-time."
            />
            <FeatureCardAnimated
              icon={<MessageCircle className="w-8 h-8" />}
              title="Collaborate & Connect"
              description="Engage with teachers and classmates through built-in communication tools."
            />
          </div>
        </div>
      </section>
    </div>
  </PageTransition>
);

export default StudentPage;
