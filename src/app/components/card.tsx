import React from "react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="text-purple-600 mb-4">{icon}</div>
    <h3 className="text-xl text-slate-400 font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export const BenefitCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-md">
    <div className="text-purple-600">{icon}</div>
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// Custom Card Components
interface CardProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderBaseProps {
  children: React.ReactNode;
  className?: string;
}

interface CardHeaderProps extends CardHeaderBaseProps {
  onClick?: () => void;
  clickable?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => (
  <div className={`bg-white shadow-md rounded-lg ${className}`}>{children}</div>
);

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  onClick,
  clickable = false,
}) => {
  const clickableClass =
    clickable || onClick ? "cursor-pointer hover:bg-gray-50" : "";

  return (
    <div
      className={`p-6 pb-0 transition-colors duration-200 ${clickableClass} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

export const CardTitle: React.FC<CardProps> = ({
  children,
  className = "",
}) => (
  <h2 className={`text-2xl font-semibold text-gray-900 ${className}`}>
    {children}
  </h2>
);

export const CardDescription: React.FC<CardProps> = ({
  children,
  className = "",
}) => <p className={`text-sm text-gray-500 mt-2 ${className}`}>{children}</p>;

export const CardContent: React.FC<CardProps> = ({
  children,
  className = "",
}) => <div className={`p-6 ${className}`}>{children}</div>;
