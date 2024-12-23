import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RootLayout from '../layout';
import Head from "next/head";
import Image from 'next/image';

export default function Contact() {
    return (
      <RootLayout>
        <Navbar/>
        <Head>
          <title>Contact Us - HealthCare Plus</title>
        </Head>
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h1 className="text-4xl font-bold mb-8 text-blue-800">Contact Us</h1>
              <div className="space-y-4 text-black">
                <p className="flex items-center">
                  <span className="mr-2">📍</span>
                  50, Harneshwar Society, Talegaon Dabhade, Tal: Maval, Dist: Pune, Maharashtra 410507
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📞</span>
                  +91 - 8042782180
                </p>
                <p className="flex items-center">
                  <span className="mr-2">📧</span>
                  hospitalharneshwar@gmail.com
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/map.png"
                alt="Hospital Location"
                width={1920}
                height={1080}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
        <Footer/>
      </RootLayout>
    );
  }