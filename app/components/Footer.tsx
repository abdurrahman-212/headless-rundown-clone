import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-12 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-3">The Rundown AI</h2>
          <p className="text-sm text-gray-400">
            Get the latest AI news, understand why it matters, and learn how to apply it in your work.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
            <li><Link href="/posts" className="hover:text-blue-400 transition-colors">Posts</Link></li>
            <li><Link href="/authors" className="hover:text-blue-400 transition-colors">Authors</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Publications</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/tech" className="hover:text-blue-400 transition-colors">The Rundown Tech</Link></li>
            <li><Link href="/ai" className="hover:text-blue-400 transition-colors">The Rundown AI</Link></li>
            <li><Link href="/robotics" className="hover:text-blue-400 transition-colors">The Rundown Robotics</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold mb-3">Join Our Newsletter</h3>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="px-3 py-2 text-black rounded-md flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-sm text-gray-400 flex justify-between">
        <p>© 2025 The Rundown AI, Inc.</p>
        <div className="space-x-4">
          <Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;