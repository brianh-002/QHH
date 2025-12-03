import Link from "next/link";
import"../../Assets/TextLogo.png";

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-4">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 flex items-center">
          <img src="../../Assets/TextLogo.png" alt="QHH Logo" className="h-8 w-8 mr-2" />
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          Home
        </Link>
        <Link
          href="/blog"
          className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
        >
          Blog
        </Link>
      </div>
    </nav>
  );
}