import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-blue-600">
            Harneshwar Multispecialty Hospital
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/departments" className="text-gray-700 hover:text-blue-600">Departments</Link>
            <Link href="/doctors" className="text-gray-700 hover:text-blue-600">Doctors</Link>
            <Link href="/appointments" className="text-gray-700 hover:text-blue-600">Appointments</Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}