import React from "react";
import { Book, GraduationCap, Settings } from "lucide-react";
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
          text="SomaNasi is Kenya's comprehensive school management system, designed to streamline administration, enhance learning, and connect your entire school community."
          action="Schedule a Demo"
        />

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl text-gray-300 font-bold text-center mb-12 opacity-0 animate-fadeSlideUp">
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
                  description="Manage your entire school efficiently with powerful tools."
                />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default MarketingPage;
