import React, { ReactNode } from "react";
import {
  Book,
  GraduationCap,
  PenTool,
  LineChart,
  Calendar,
  Users,
  Shield,
  Settings,
  FileText,
  Target,
  Network,
  LightbulbIcon,
  Brain,
  Compass,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

interface AnimatedHeaderProps {
  headline: string;
  text: string;
  action?: string;
  variant?: "default" | "student" | "teacher" | "admin";
}

export const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({
  headline,
  text,
  action,
  variant = "default",
}) => {
  const renderAnimation = () => {
    switch (variant) {
      case "student":
        return <StudentAnimation />;
      case "teacher":
        return <TeacherAnimation />;
      case "admin":
        return <AdminAnimation />;
      default:
        return <DefaultAnimation />;
    }
  };

  return (
    <header className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-bold mb-6 opacity-0 animate-fadeSlideUp">
            {headline}
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-0 animate-fadeSlideUp animation-delay-200">
            {text}
          </p>
          {action && (
            <Link
              href="/demo"
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold 
                             hover:bg-purple-50 transition-colors opacity-0 animate-fadeSlideUp animation-delay-400"
            >
              {action}
            </Link>
          )}
        </div>
        <div className="absolute inset-0 z-0">{renderAnimation()}</div>
      </div>
    </header>
  );
};

const DefaultAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    <div className="relative w-96 h-96">
      <div className="absolute inset-0 animate-spin-slow">
        <Network className="w-full h-full text-white/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <Brain className="w-32 h-32 animate-pulse" />
      </div>
      <div className="absolute inset-0">
        <Sparkles className="absolute top-0 left-1/4 w-8 h-8 animate-float" />
        <Sparkles className="absolute bottom-1/4 right-0 w-8 h-8 animate-float animation-delay-200" />
        <Sparkles className="absolute bottom-0 left-1/3 w-8 h-8 animate-float animation-delay-400" />
      </div>
    </div>
  </div>
);

const StudentAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    <div className="relative w-96 h-96">
      <div className="absolute inset-0 animate-spin-slow">
        <Compass className="w-full h-full text-white/20" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center scale-75 animate-float">
        <div className="relative">
          <Brain className="w-32 h-32" />
          <LightbulbIcon className="absolute -top-8 -right-8 w-16 h-16 animate-pulse" />
          <Book className="absolute -bottom-8 -left-8 w-16 h-16 animate-bounce" />
          <GraduationCap className="absolute -bottom-8 -right-8 w-16 h-16 animate-bounce animation-delay-200" />
        </div>
      </div>
    </div>
  </div>
);

const TeacherAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    <div className="relative w-96 h-96">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-spin-slow">
          <Network className="w-full h-full text-white/20" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative group">
          <Users className="w-32 h-32 animate-float" />
          <div className="absolute -top-16 -left-16 animate-orbit">
            <Book className="w-16 h-16" />
          </div>
          <div className="absolute -top-16 -right-16 animate-orbit animation-delay-200">
            <Calendar className="w-16 h-16" />
          </div>
          <div className="absolute -bottom-16 -left-16 animate-orbit animation-delay-400">
            <PenTool className="w-16 h-16" />
          </div>
          <div className="absolute -bottom-16 -right-16 animate-orbit animation-delay-600">
            <Target className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AdminAnimation = () => (
  <div className="absolute inset-0 flex items-center justify-center opacity-30">
    <div className="relative w-96 h-96">
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-spin-slow">
          <Settings className="w-full h-full text-white/20" />
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center scale-90">
        <div className="relative">
          <Shield className="w-32 h-32 animate-pulse" />
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 animate-float">
            <LineChart className="w-16 h-16" />
          </div>
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 animate-float animation-delay-200">
            <FileText className="w-16 h-16" />
          </div>
          <div className="absolute top-1/2 -left-16 transform -translate-y-1/2 animate-float animation-delay-400">
            <Users className="w-16 h-16" />
          </div>
          <div className="absolute top-1/2 -right-16 transform -translate-y-1/2 animate-float animation-delay-600">
            <Target className="w-16 h-16" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Animation utilities for page transitions
export const PageTransition = ({ children }: { children: ReactNode }) => (
  <div className="animate-fadeIn">{children}</div>
);

interface FeatureCardAnimatedProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const FeatureCardAnimated: React.FC<FeatureCardAnimatedProps> = ({
  icon,
  title,
  description,
  delay = 0,
}) => (
  <div
    className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all 
                   transform hover:-translate-y-1 opacity-0 animate-fadeSlideUp`}
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl text-gray-400 font-semibold mb-2">{title}</h3>
    <p className="text-gray-800">{description}</p>
  </div>
);
