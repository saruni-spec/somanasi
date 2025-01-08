export const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">SomaNasi</h3>
          <p className="text-gray-400">
            Empowering Education, One Click at a Time
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <p className="text-gray-400">Email: info@somanasi.com</p>
          <p className="text-gray-400">Phone: +254 XXX XXX XXX</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Follow Us</h4>
          <div className="space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
