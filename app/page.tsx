import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from './layout';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <Head>
        <title>Harneshwar Multispecialty Hospital</title>
        <meta name="description" content="Leading multispecialty hospital providing comprehensive healthcare services" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          // src="https://fpimages.withfloats.com/actual/6247ec93d071180001d8ff40.png"
          src="/hosp.png"
          alt="Hospital Banner"
          width={1920}
          height={1080}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-5xl font-bold mb-4 text-black">Welcome to Harneshwar!</h1>
            <p className="text-xl mb-8 text-black">Your Health is Our Priority</p>
            <Link href="/appointments" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-medium">
              Book an Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-16 bg-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Cardiology', icon: '🫀' },
              { title: 'Neurology', icon: '🧠' },
              { title: 'Orthopedics', icon: '🦴' },
              { title: 'Pediatrics', icon: '👶' },
              { title: 'Oncology', icon: '🔬' },
              { title: 'Surgery', icon: '⚕️' },
            ].map((specialty) => (
              <div key={specialty.title} className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-4xl mb-4 text-black">{specialty.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{specialty.title}</h3>
                <p className="text-black">World-class care and treatment in {specialty.title.toLowerCase()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </RootLayout>
  );
}