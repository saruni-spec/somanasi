import React from "react";

interface HeaderProps {
  headline: string;
  text: string;
  action?: string;
}

export const Header: React.FC<HeaderProps> = ({ headline, text, action }) => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">{headline}</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">{text}</p>
          {action && (
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors">
              {action}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
