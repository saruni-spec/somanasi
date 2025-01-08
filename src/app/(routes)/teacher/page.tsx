import {
  AnimatedHeader,
  FeatureCardAnimated,
  PageTransition,
} from "@/app/components/animated_header";
import { Calendar, PenTool, Users } from "lucide-react";

const TeacherPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <AnimatedHeader
        headline="Empower Your Teaching"
        text="Focus on what matters most - teaching. Let SomaNasi handle the rest."
        variant="teacher"
      />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCardAnimated
              icon={<PenTool className="w-8 h-8" />}
              title="Streamlined Grading"
              description="Grade assignments, track student progress, and generate reports efficiently."
              delay={0}
            />
            <FeatureCardAnimated
              icon={<Calendar className="w-8 h-8" />}
              title="Lesson Planning"
              description="Create and manage lesson plans, schedules, and resources in one place."
              delay={200}
            />
            <FeatureCardAnimated
              icon={<Users className="w-8 h-8" />}
              title="Student Management"
              description="Track attendance, behavior, and performance with powerful analytics tools."
              delay={400}
            />
          </div>
        </div>
      </section>
    </div>
  </PageTransition>
);

export default TeacherPage;
