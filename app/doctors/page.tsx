import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from '../layout';
import Head from "next/head";
import Image from 'next/image';

export default function Doctors() {
    const doctors = [
      {
        name: 'Dr. Shrikant Jategaonkar',
        specialty: 'Cardiologist',
        experience: '15+ years',
        education: 'MD - Cardiology, Harvard Medical School',
      },
      {
        name: 'Dr. Jyoti Jategaonkar',
        specialty: 'Cardiologist',
        experience: '15+ years',
        education: 'MD - Cardiology, Harvard Medical School',
      },
      {
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        experience: '15+ years',
        education: 'MD - Cardiology, Harvard Medical School',
      },
      // Add more doctors...
    ];
  
    return (
      <RootLayout>
        <Navbar/>
        <Head>
          <title>Our Doctors - HealthCare Plus</title>
        </Head>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Medical Team</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <div key={doctor.name} className="bg-gray-300 p-6 rounded-lg shadow-md">
                <Image
                  src="/sarah.png"
                  alt={doctor.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-xl font-bold mb-2 text-black">{doctor.name}</h2>
                <p className="text-blue-800 mb-2">{doctor.specialty}</p>
                <p className="text-gray-600">Experience: {doctor.experience}</p>
                <p className="text-gray-600">{doctor.education}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
      </RootLayout>
    );
  }