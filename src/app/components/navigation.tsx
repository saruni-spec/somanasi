import Image from "next/image";
import Link from "next/link";

export const Navigation = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            prefetch={false}
            className="flex items-center space-x-2"
          >
            <Image
              width={64}
              height={64}
              src="/logo.png"
              alt="SomaNasi Logo"
              placeholder="empty"
              priority
              className="w-16 h-16"
            />
            <span className="text-2xl font-bold text-purple-600">SomaNasi</span>
          </Link>
        </div>
        <div className="flex items-center space-x-8">
          <Link
            href="/administrator"
            prefetch={false}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Administrators
          </Link>
          <Link
            href="/teacher"
            prefetch={false}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Teachers
          </Link>
          <Link
            href="/student"
            prefetch={false}
            className="text-gray-700 hover:text-purple-600 transition-colors"
          >
            Students
          </Link>
          <Link
            href="/demo"
            prefetch={false}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;
