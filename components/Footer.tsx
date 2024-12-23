import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Harneshwar Multispecialty Hospital</h3>
            <p className="text-gray-300 text-sm">Providing quality healthcare since 1990</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact</h3>
            <p className="text-gray-300 text-sm">
              50, Harneshwar Society, Talegaon Dabhade, <br />
              Tal: Maval, Dist: Pune, Maharashtra 410507 <br />
              Phone: +91 - 8042782180
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/appointments" className="text-gray-300 hover:text-white text-sm">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-gray-300 hover:text-white text-sm">
                  Emergency Care
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-white text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Opening Hours</h3>
            <ul className="space-y-1">
              <li className="text-gray-300 text-sm">Mon : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Tue : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Wed : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Thu : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Fri : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Sat : 7:00 AM - 11:30 PM</li>
              <li className="text-gray-300 text-sm">Sun : 7:00 AM - 11:30 PM</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}