import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from '../layout';
import Head from "next/head";

export default function Departments() {
    const departments = [
      {
        name: 'Cardiology1',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },
      {
        name: 'Cardiology2',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },
      {
        name: 'Cardiology3',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },
      {
        name: 'Cardiology4',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },
      {
        name: 'Cardiology5',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },
      {
        name: 'Cardiology6',
        description: 'Comprehensive heart care services',
        services: ['ECG', 'Echocardiogram', 'Angioplasty', 'Heart Surgery'],
      },

      // Add more departments...
    ];
  
    return (
      <RootLayout>
        <Navbar />
        <Head>
          <title>Departments - HealthCare Plus</title>
        </Head>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-blue-800">Our Departments</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept) => (
              <div key={dept.name} className="bg-gray-300 p-6 rounded-lg shadow-md text-black">
                <h2 className="text-2xl font-bold mb-4 text-blue-800">{dept.name}</h2>
                <p className="mb-4">{dept.description}</p>
                <h3 className="font-bold mb-2">Services:</h3>
                <ul className="list-disc pl-5">
                  {dept.services.map((service) => (
                    <li key={service}>{service}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </RootLayout>
    );
  }