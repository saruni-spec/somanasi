import {
  AnimatedHeader,
  PageTransition,
  FeatureCardAnimated,
} from "@/app/components/animated_header";
import { FileText, Settings, Shield } from "lucide-react";

const AdministratorPage = () => (
  <PageTransition>
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <AnimatedHeader
        headline="Complete School Management"
        text="Streamline operations, improve efficiency, and make data-driven decisions for your school."
        variant="admin"
      />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCardAnimated
              icon={<FileText className="w-8 h-8" />}
              title="Comprehensive Reporting"
              description="Generate detailed reports on academics, finances, and operations instantly."
              delay={0}
            />
            <FeatureCardAnimated
              icon={<Shield className="w-8 h-8" />}
              title="Data Security"
              description="Keep your school's data secure with role-based access control and backup systems."
              delay={200}
            />
            <FeatureCardAnimated
              icon={<Settings className="w-8 h-8" />}
              title="Customizable Settings"
              description="Configure the system to match your school's specific needs and processes."
              delay={400}
            />
          </div>
        </div>
      </section>
    </div>
  </PageTransition>
);

export default AdministratorPage;
